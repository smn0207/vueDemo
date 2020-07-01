<!--  -->
<template>
  <div class="carbuttonbar">
    <div class="carbuttonbar_check">
      <checkbutton :isCheckt="isCelectAll" class="check" @click.native="selectAllClick" />
      <span class>全选</span>
    </div>
    <div class="count">合计：{{totalPrice}}</div>
    <div class="clculate">去计算：{{checklength}}</div>
  </div>
</template>

<script>
import checkbutton from "components/content/checkbutton/checkButton";
export default {
  name: "carbuttonbar",
  components: { checkbutton },
  computed: {
    totalPrice() {
      return this.$store.state.CartList.filter(item => {
        return item.checked;
      }).reduce((prevalue, item) => {
        return prevalue + item.price * item.count;
      }, 0);
    },
    checklength() {
      return this.$store.state.CartList.filter(item => {
        return item.checked;
      }).length;
    },
    isCelectAll() {
      if (this.$store.state.CartList.length == 0) {
        //判断没有加入购物车的数据时候不选中
        return false;
      } else {
        return !this.$store.state.CartList.find(item => !item.checked); //找到一个不选种的就返回，然后进行取反
      // return !(this.$store.state.CartList.filter(item=>!item.checked).length)//对数字取反，如果大于0就false
     }
    }
  },
  methods: {
    selectAllClick() {
      //第二种
      this.isCelectAll?this.$store.state.CartList.forEach(item => {item.checked=false;}):this.$store.state.CartList.forEach(item => {item.checked=true;})
      //   if(this.isCelectAll){  //第一种方法
      //     return this.$store.state.CartList.forEach(item => {item.checked=false;})
      //   }else{
      //      return this.$store.state.CartList.forEach(item => {item.checked=true;})
      //   }
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
.carbuttonbar {
  height: 40px;
  position: relative;
  bottom: 135px;
  background-color: darkgray;
  /* z-index: 30; */
}
.check {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
  /* margin-top: 10px; */
  /* margin-top: -5px; */
}

.carbuttonbar_check {
  height: 40px;
  display: inline-block;
}
.carbuttonbar_check span {
  line-height: 40px;
}
.count {
  display: inline-block;
  margin: 0 20px;
}
.clculate {
  display: inline-block;
  width: 100px;
  background: darkorange;
  line-height: 40px;
  text-align: center;
  /* position: relative; */
  /* right: 0; */
  float: right;
  color: aliceblue;
}
</style>