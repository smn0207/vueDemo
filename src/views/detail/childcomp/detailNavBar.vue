<!--  -->
<template>
  <div class="detailNavbar">
    <NavBar>
      <div slot="left" class="left">
        <img src="~assets/img/tabbar/back.jpg" alt @click="imgClick" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in titles"
          :key="item"
          :class="{active:currentIndex==index}"
          @click="activeChange(index)"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "detailNavbar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    activeChange(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    imgClick() {
      //跳转到上一页
      this.$router.back();
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
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-hight-text);
}
.left {
  text-align: center;
  margin-top: 5px;
}
.left img {
  width: 30px;
  height: 30px;
}
</style>