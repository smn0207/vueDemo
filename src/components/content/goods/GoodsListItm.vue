<template>
  <div class="goodslistitem" @click="itemClick">
    <img :src="showImage" @load="imgload" />
    <div>
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>>

<script>
export default {
  name: "goodslistitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created(){    
  },
  computed: {
    showImage() { //判断图片路径
     return this.goodsitem.image || this.goodsitem.show.img;
    }
  },
  methods: {
    imgload() {
        this.$bus.$emit("ItemImageLoade");

      // if (this.$route.path().indexOf("/shouye")) {
      //   this.$bus.$emit("ItemImageLoade");
      // }else if (this.$route.path().indexOf('/detail')){
      //   //发送属于detail的事件
      // }
    },
    itemClick() {
      // 跳转路由到'detail'  需要注意/什么时候加
      this.$router.push("detail/" + this.goodsitem.iid);
    }
  }
};
</script>>

<style scoped>
.goodslistitem {
  width: 46%;
  overflow: hidden;
  display: inline-block;
  padding: 2%;
  /* justify-content: space-around;  均等分边距*/
}
.goodslistitem img {
  width: 100%;
  border-radius: 5px;
}
p {
  overflow: hidden;
  width: 160px;
  padding-left: 10px;
  /* 规定文本不换行 */
  white-space: nowrap;
  /* 表示显示省略符号来代表被修剪的文本。 */
  text-overflow: ellipsis;
}
.price,
p,
.collect {
  size: 12px;
  text-align: center;
}
.price {
  margin-left: 30%;
}
.price {
  /* background: green; */
  color: green;
  font-weight: bolder;
}
</style>