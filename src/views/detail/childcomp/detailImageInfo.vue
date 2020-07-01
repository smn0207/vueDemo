<!--  -->
<template>
  <div v-if="Object.keys(imageInfo).length!==0" class="detailImageInfo">
    <div>
      <div>{{imageInfo.desc}}</div>
    </div>
    <div>{{imageInfo.detailImage[0].key}}</div>
    <div class="detail-img">
      <img
        v-for="(item,index) in imageInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgload"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailImageInfo",
  data() {
    return {
      count: 0,
      imagelegth: 0
    };
  },
  props: {
    imageInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgload() {
      // if (++this.count === this.imagelegth) {
        this.$emit("imageLode");
      // }
    }
  },
  watch: {
    imageInfo() {
      this.imagelegth = this.imageInfo.detailImage[0].list.length;
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
.detailImageInfo {
  background-color: #fff;
}
.detail-img img {
  width: 100%;
}
</style>