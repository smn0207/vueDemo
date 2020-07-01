<template>
  <div class="recommends">
    <div class="recommends_item" v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt @load="swiperimageload" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>>

<script>
export default {
  name: "recommends",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isload: false
    };
  },
  methods: {
    //监听图片加载完成
    swiperimageload() {
      // 只需要监听一次图片加载完成，就可获取高度，无需发送四次
      if (!this.isload) {
        this.$emit("swiperimageload");
        this.isload=true
      }

      // console.log(1);
    }
  }
};
</script>>

<style scoped>
.recommends_item {
  display: inline-block;
  flex: 1;
  width: 25%;
}
.recommends {
  margin: 10px 0;
}
img {
  height: 80px;
}
</style>>