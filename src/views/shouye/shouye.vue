<template>
  <div id="shouye">
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <tabcontrol
      :titles="['流行','新款','经典']"
      @tabclick="tabclick"
      ref="tabcontrol1"
      v-show="isshow"
      class="tab-control"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @contenscroll="contenscroll"
      @pullingUp="morecontent"
    >
      <homerecommend :recommend="recommend" @swiperimageload="swiperimageload" />

      <fluent :imageList="banners" @bannerLoad="bannerLoad"/>
      <tabcontrol :titles="['流行','新款','经典']" @tabclick="tabclick" ref="tabcontrol2" />
      <goodslist :goods="goods[currentindex].list" />
    </scroll>

    <backtop @click.native="backclick" v-show="isvisible" />
    <!-- 监听组件的点击事件 -->
  </div>
</template>>

<script>
import NavBar from "components/common/navbar/NavBar";
import homerecommend from "./homeitem/homerecommend";
import fluent from "./homeitem/homefluent";
import tabcontrol from "components/content/tabcontrol/tabcontrol";
import goodslist from "components/content/goods/GoodsList";
import scroll from "components/common/scroll/scroll";
import backtop from "components/content/backtop/backtop";

import { homerequest, homeGoods } from "network/home";
import { debounce } from "components/common/utils"; //引入工具类的函数
import {itmeLisentMixin} from 'components/common/mixin'

export default {
  name: "shouye",
  components: {
    NavBar,
    homerecommend,
    fluent,
    tabcontrol,
    goodslist,
    scroll,
    backtop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      dKeyword: [],
      keywords: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentindex: "pop",
      isvisible: false,
      tabcontrol: 0,
      isshow: true,
      saveY: 0
    };
  },
  mixins:[itmeLisentMixin],//混入
  activated() {  //只有组件被缓存后才有此方法
    // console.log("进入组件？？？");
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh(); //刷新一次
  },
  deactivated() { //只有组件被缓存后才有此方法
    // console.log("离开组件？？？");
    //保存Y值
    this.saveY = this.$refs.scroll.getscrollY();
    //取消全局事件监听,第二个参数表示取消某个事件，不传会取消全局监听事件
    this.$bus.$off("ItemImageLoade",this.itemShouyimagelode);
  },
  created() {
    // 请求多个数据
    this.homerequest();

    // 请求商品数据
    this.homeGoods("pop");
    this.homeGoods("new");
    this.homeGoods("sell");
  },
  mounted() {
    // //1. 监听图片加载完成  混入代替了
    // const refresh = debounce(this.$refs.scroll.refresh, 20);
    // // ItemImageLoade  监听图片加载完成

    // this.itemShouyimagelode = () => {
    //   //调用过于频繁！需要对其进行防抖动处理
    //   refresh();
    // };
    // this.$bus.$on("ItemImageLoade", this.itemShouyimagelode);
  },
  methods: {
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentindex = "pop";
          break;
        case 1:
          this.currentindex = "new";
          break;
        case 2:
          this.currentindex = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;
    },

    destroyed() {},
    backclick() {
      this.$refs.scroll.scrollTo(0, 0,300);
      //
    },
    contenscroll(position) {
      // if(-position.y>2000){
      //   this.isvisible=true
      // }else{
      //           this.isvisible=false
      // }

      //1.判断backtop是否显示
      this.isvisible = -position.y > 2000 ? true : false;
      //2.决定tabcontrol是否吸顶（position：fixed）
      this.isshow = -position.y > this.tabcontrol;
    },
    morecontent() {
      this.homeGoods(this.currentindex);
      this.$refs.scroll.scroll.refresh(); //图片加载完后，更新，解决bug！重新计算可滚动的区域，图片加载问题
    },
    swiperimageload() {
      this.tabcontrol = this.$refs.tabcontrol2.$el.offsetTop;
    },
    // 网络请求的方法

    homerequest() {
      homerequest().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    homeGoods(type) {
      const page = this.goods[type].page + 1;
      homeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1; //保证page页面的正确
        this.$refs.scroll.finishpullup(); //多次上拉加载更多
      });
    },
      bannerLoad(){
          //轮播图加载完成重新计算高度
          this.morecontent()
      }
  }
};
</script>

<style scoped>
#shouye {
  /* padding-top: 44px; */
  height: 100vh;
  /* 视口高度 */
  position: relative;
}
.home_nav {
  background: var(--color-tint);
  color: white;

  /* 在使用浏览器原生滚动的时使用的 */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
/* .tabcontrol {
  position: sticky;
  top: 44px;
} */
/* .fixed{
  position: fixed;
  left: 0;
  top: 44px;
  right: 0;
} */
.content {
  /* height: 300px;
overflow: hidden; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

  /* height: cacl(100%-93px);
  overflow: hidden;
  margin-top: 44px; */
}
.tab-control {
  position: relative;
  z-index: 10;
  /* left: 0;
  top: 0; */
}
/* .show{
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;
} */
</style>
