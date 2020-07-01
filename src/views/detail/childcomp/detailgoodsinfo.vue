<!--  -->
<template>
  <div class="detailgoodsinfo" v-if="Object.keys(goodsxiangqing).length!==0">
    <div>详情页</div>
    <table>
      <tr v-for="(table,index) in goodsxiangqing.infos" :key="index">
        <td>{{table.key}}</td>
        <td>{{table.value}}</td>
      </tr>
      <!-- <tr v-for="(tr,dexn) in table" :key="dexn">
           <td v-for="(td,dn) in tr" :key="dn">{{td}}</td>
      </tr>-->
    </table>
  </div>
</template>

<script>
export default {
  name: "detailgoodsinfo",
  props: {
    goodsxiangqing: {
      type: Object,
      default() {
        return {};
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
td{
  border: 1px solid;
  background-color: turquoise;
}
</style>