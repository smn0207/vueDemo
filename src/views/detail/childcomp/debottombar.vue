<!--  -->
<template>
  <div class="detailebuttom">
    <div class="detailebuttom-left">
      <div>
        <span>客服</span>
      </div>
      <div>
        <span>店铺</span>
      </div>
      <div>
        <span>收藏</span>
      </div>
    </div>
    <div  class="detailebuttom-right">
      <div class="color-b" @click="addtoCar">加入购物车</div>
      <div class="color-p">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods:{
     addtoCar(){
      this.$emit('addtoCar')
    }
  }
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.detailebuttom {
  height: 49px;
  position: relative;
  /* bottom: 49px; */
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  background: white;
}
.detailebuttom > div {
  flex: 1;
}
.detailebuttom-left,.detailebuttom-right {
  display: flex;
  text-align: center;
}
.detailebuttom-left > div,.detailebuttom-right>div {
  flex: 1;
  line-height: 49px;
}
.color-b{
  background: yellow;
}
.color-p{
  /* background-color: thistle; 253 119 153*/
  background-color: rgb(253, 119, 153);
  color: aliceblue;
}
</style>