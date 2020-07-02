<!--  -->
<template>
<div>
   <img src="~assets/img/tabbar/qian--1.png" :class="{activ:isCheckt}" alt="">
</div>
</template>

<script>
export default {
name:'checkbuton',
props:{
  isCheckt:{
    type:Boolean,
    default(){
      return false
    }
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>

<style scoped>
/* @import url(); 引入css类 */
img{
  width: 100%;
  height: 100%;
  }
div{
  display: inline-block;
}
.activ{
  background-color: orange;
}
</style>
