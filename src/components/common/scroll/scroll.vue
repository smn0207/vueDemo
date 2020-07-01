<template>
  <!-- ref 绑定给子组件 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //创建better-scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //    监听滚动的位置
    this.scroll.on("scroll", position => {
      // console.log(position)
      this.$emit("contenscroll", position); //自定义事件，给父组件，并传达参数
      // this.$emit("scroll", position); //自定义事件，给父组件，并传达参数

      this.scroll.refresh(); //图片加载完后，更新，解决bug！重新计算可滚动的区域，图片加载问题
    });
    //上拉加载更多   监听到滚动到底部
    this.scroll.on("pullingUp", () => {
      // console.log("监听到滚动到底部");
      this.$emit("pullingUp");
    });
  },

  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time); //返回顶部的效果
    },

    // 结束上拉加载更多?为了多次完成上拉加载更多？
    finishpullup() {
      this.scroll.finishPullUp();
    },
    refresh() {
      //实时监测子组件的高度，避免滚动的bug  得图片加载完后再调用  图片在goodlistitem组件中
      this.scroll.refresh();
      // console.log("-----------------");
    },
    getscrollY() {
      return this.scroll.y ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>