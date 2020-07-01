<!--  -->
<template>
<!-- 判断对象中是否有属性，有才显示，没有不显示 -->
  <div v-if="Object.keys(baseGoods).length !==0" class="detiailbaseinfo">
    <div class="detail-info">
      <div>{{baseGoods.title}}</div>
      <div>
        <span class="detail-price">{{baseGoods.newPrice}}</span>
        <span class="detail-oldprice">{{baseGoods.oldPrice}}</span>
        <span v-if="baseGoods.discount" class="discount">{{baseGoods.discount}}</span>
      </div>
      
      <div class="detail-colums">
        <span  v-for="item in baseGoods.colums" :key="item">{{item}}</span>
      </div>

      <div class="detail-serve" v-for="(item,index) in baseGoods.services" :key="index">
        <span><img class="serve-img" :src="item.icon" alt="">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detiailbaseinfo",
  props: {
    baseGoods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  }
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.detail-price {
  color: var(--color-hight-text);
}
.detail-oldprice {
  text-decoration: line-through;
  color: darkgrey;
}
.detail-colums {
  display: flex;
  border-bottom: solid 1px black;
  padding-bottom: 10px;
}
.detail-colums span {
  flex: 1;
  text-align: center;
}
.discount {
  background-color: var(--color-hight-text);
  color: white;
  padding: 2px 5px;
  border-radius: 15px;
}
.detail-serve{
  display: flex;
  display: inline-block;
}
.detail-serve span{
  flex: 1;
  text-align: center;
}
.serve-img{
  width: 20px;
  height: 20px;
}
</style>