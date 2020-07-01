<template>
  <div class="detaileShopinfo">
    <!-- <div>{{shopInfo}}</div> -->
    <!-- <div>{{shopInfo}}</div> -->
    <div class="detaileShopinfo-logo">
      <img :src="shopInfo.logo"  alt />
      <span>{{shopInfo.name}}</span>
    </div>

    <div class="shopinfo-num">
      <div>
        <div class="shopinfo-num-1">
          <span>{{shopInfo.sells | sellcounterfiler}}</span>
          <span>{{shopInfo.sells}}</span>
        </div>
        <div class="shopinfo-num-2">
             <span>总销量</span>
             <span>全部宝贝</span>
        </div>
      </div>
      <div>
         <div v-for="(item,index) in shopInfo.score" :key="index">
           <span>{{item.name}}</span>
           <span>{{item.score}}</span>
           <span class="colortext"  :class="{bettercolor:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detaileShopinfo",
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellcounterfiler(value) {
      if (value < 10000) {
        return value;
      } else {
     return    (value/10000).toFixed(1)+'万';
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.detaileShopinfo-logo img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
}
.detaileShopinfo-logo span {
  color: darkgrey;
}
.shopinfo-num{
  display: flex;
}
.shopinfo-num>div{
  flex: 1;
}
.shopinfo-num-1 span{
  display: inline-block;
  margin: 10px;
}
.shopinfo-num-2 span {
  display: inline-block;
  margin: 10px;
}
.colortext{
  color: green;
}
.bettercolor{
  color:red;
}
div{
  background-color: white;
}
</style>