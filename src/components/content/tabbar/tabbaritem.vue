<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "bule"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1; //!!!!!使用计算属性去动态的去判断
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};//动态绑定样式！！重点
    }
  },
  methods: {
    itemClick() {
      // isActive = this.isActive
      this.$router.push(this.path);
    }
  }
};
</script>>

<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  /* line-height: 49px; */
}
.tar-bar-item img {
  height: 20px;
  width: 20px;
  margin-top: 5px;
}
.tar-bar-item div {
  font-size: 14px;
}
/* .active {
  color: green;
} */
</style>>