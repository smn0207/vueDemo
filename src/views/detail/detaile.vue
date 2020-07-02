<template>
    <div class="detail">


        <detailNavbar @titleClick="titleClick" class="detail-nav" ref="detailnav"></detailNavbar>
        <!-- <div>{{$store.state.CartList.length}}</div> -->
        <Scroll class="content" ref="scroll" :probeType="3" @contenscroll="contenscroll">
            <detailSwiper :SwiperImage="topImages"></detailSwiper>
            <detiailbaseinfo :baseGoods="goods"></detiailbaseinfo>
            <detaileShopinfo :shopInfo="shop"></detaileShopinfo>
            <imageInfo :imageInfo="detailInfo" @imageLode="imageLode"></imageInfo>
            <detailgoodsinfo ref="param" :goodsxiangqing="paramInfo"></detailgoodsinfo>
            <detailComentinfo ref="comment" :commentInfo="commentInfo"></detailComentinfo>
            <goodslist ref="recomend" :goods="Recommond"/>
        </Scroll>
        <detailbuttomBar @addtoCar="addtoCar"/>

        <backtop @click.native="backclick" v-show="isvisible"/>

        <transition name="fade">
            <popup v-if="isPopup"/>
        </transition>


    </div>
</template>

<script>
    import detailNavbar from "./childcomp/detailNavBar";
    import detailSwiper from "./childcomp/detailSwiper";
    import detiailbaseinfo from "./childcomp/detailbaseInfo";
    import detaileShopinfo from "./childcomp/detaileShopinfo";
    import imageInfo from "./childcomp/detailImageInfo";
    import detailgoodsinfo from "./childcomp/detailgoodsinfo";
    import detailComentinfo from "./childcomp/detailCommentinfo";
    import goodslist from "components/content/goods/GoodsList";
    import detailbuttomBar from "./childcomp/debottombar";

    import popup from 'components/content/Popup/Popup'

    import Scroll from "components/common/scroll/scroll";
    import {debounce} from "components/common/utils"; //引入工具类的函数
    import {itmeLisentMixin, backtopMixin} from "components/common/mixin";

    import {mapActions} from 'vuex';//映射actions中的方法

    import {
        GetDetail,
        Goods,
        shop,
        GoodsParam,
        GetRecommond
    } from "network/detail";

    export default {
        name: "detail",
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                Recommond: [],
                themeTopY: [0, 1000, 2000, 3000],
                getThemeTopY: null, //防抖
                currantIndex: 0,
                isPopup: false
            };
        },
        mixins: [itmeLisentMixin, backtopMixin],
        components: {
            detailNavbar,
            detailSwiper,
            detiailbaseinfo,
            detaileShopinfo,
            Scroll,
            imageInfo,
            detailgoodsinfo,
            detailComentinfo,
            goodslist,
            detailbuttomBar,
            popup
        },
        methods: {

            ...mapActions(['addCart']),//映射actions中的方法名

            imageLode() {
                this.$refs.scroll.refresh();
                this.getThemeTopY();
            },
            titleClick(index) {
                // console.log("点击了");
                this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
            },
            //监听滚动
            contenscroll(position) {
                const positionY = -position.y;
                //根据滚动位置，判断nav的选中情况
                var length = this.themeTopY.length;
                for (let i = 0; i < length; i++) {
                    if (
                        this.currantIndex !== i &&
                        ((i < length - 1 &&
                            positionY >= this.themeTopY[i] &&
                            positionY < this.themeTopY[i + 1]) ||
                            (i === length - 1 && positionY >= this.themeTopY[i]))
                    ) {
                        this.currantIndex = i;
                        this.$refs.detailnav.currentIndex = this.currantIndex;
                    }
                }

                this.isvisible = -position.y > 2000 ? true : false;
            },
            //加入购物车
            addtoCar() {
                //获取购物车需要的信息，
                const product = {};
                product.image = this.topImages[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.price = this.goods.realPrice;
                product.iid = this.iid;

                //掌握知识点一、可以是由promise  二、映射actions
                //  向vuex中填入数据     !vuex中的细节，
                // this.$store.dispatch("addCart", product).then(res=>{
                //   console.log(res);
                // });

                this.addCart(product).then(res => { //映射后的写法
                    this.$nextTick(function () {
                        this.isPopup =  ! this.isPopup;
                        let timer=null;
                        timer= setTimeout(() => {
                            this.isPopup = ! this.isPopup;
                            clearTimeout(timer)
                        }, 2000)
                    })

                })
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
            //1.保存存入的iid
            this.iid = this.$route.params.iid;
            // console.log(this.iid)
            //2.根据iid请求数据
            GetDetail(this.iid).then(res => {
                const data = res.result;
                // console.log(res);
                //3.轮播图数据
                this.topImages = data.itemInfo.topImages;
                //4.获取商品信息
                this.goods = new Goods(
                    data.itemInfo,
                    data.columns,
                    data.shopInfo.services
                );
                //5.创建店铺信息
                this.shop = new shop(data.shopInfo);
                //6. 获取店铺图片信息
                this.detailInfo = data.detailInfo;
                //7. 获取商品详情信息
                this.paramInfo = new GoodsParam(
                    data.itemParams.info,
                    data.itemParams.rule
                );
                //8. 获取评论信息
                if (data.rate.cRate.length !== 0) {
                    this.commentInfo = data.rate;
                }
            });
            // 请求推荐数据
            GetRecommond().then(res => {
                // console.log(res);
                this.Recommond = res.data.list;
            });

            //4 给getThemeTopY赋值
            this.getThemeTopY = debounce(() => {
                this.$nextTick(() => {//确保mounted中的组件加载完毕在执行
                    this.themeTopY = [];
                    this.themeTopY.push(0);
                    this.themeTopY.push(this.$refs.param.$el.offsetTop);
                    this.themeTopY.push(this.$refs.comment.$el.offsetTop);
                    this.themeTopY.push(this.$refs.recomend.$el.offsetTop);
                    // console.log(this.themeTopY);
                }, 1000);
            });
        },
        updated() {
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            // //防抖动
            // const refresh = debounce(this.$refs.scroll.refresh, 20);
            // //全局事件
            // this.$bus.$on("ItemImageLoade");
        },
        destroyed() {
            //组件销毁
            //取消全局事件监听,第二个参数表示取消某个事件，不传会取消全局监听事件
            this.$bus.$off("ItemImageLoade", this.itemShouyimagelode);
        }
    };
</script>

<style scoped>
    /* @import url(); 引入css类 */
    .detail {
        position: relative;
        z-index: 10;
        height: 100vh;
        background-color: #fff;
    }

    .content {
        height: calc(100% - 44px - 49px);
    }

    .detail-nav {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background-color: white;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
