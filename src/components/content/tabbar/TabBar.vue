<template>
    <div id="tar-bar">
      <slot></slot>
      </div>  
</template>

<script>
export default {
    name:'tabbar'
}
</script>>

<style scoped>
#tar-bar{
  display:flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 -1px 3px rgba(10, 10,10 );
  z-index: 2;
}
</style>>