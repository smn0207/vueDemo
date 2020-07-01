<template>
  <div class="goodslist">
    <goodslistitem class="goodslistitem" v-for="item in goods" :key="item.id" :goodsitem="item" />
  </div>
</template>>

<script>
import goodslistitem from "./GoodsListItm";
export default {
  name: "goodslist",
  components: {
    goodslistitem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>>

<style scoped>
.goodslistitem{
background: white;
}

</style>