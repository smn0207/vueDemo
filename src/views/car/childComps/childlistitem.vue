<!--  -->
<template>
  <div>
    <div class="main">
      <checkbutton @click.native="btnclick" class="button_e" :isCheckt="itemInfo.checked"></checkbutton>
      <div class="child-img">
        <img :src="itemInfo.image" alt />
      </div>

      <div class="child_content">
        <div class="child_content_text">{{itemInfo.title}}</div>
        <div class="child_content_smalltext">{{itemInfo.desc}}</div>
        <div class="child_content_count">
          <span class="corlr">{{'￥'+itemInfo.price}}</span>
          <span>x{{itemInfo.count}}</span>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import checkbutton from "components/content/checkbutton/checkButton";
export default {
  name: "childlistitem",
  data() {
    return {
      // isCheckt:false
    };
  },
  components: { checkbutton },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    btnclick() {
      this.itemInfo.checked = !this.itemInfo.checked;
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
.main {
  border: 1px solid black;
  margin: 5px;
  padding-left: 45px;
}
.child_content {
  width: 60%;
  margin-top: -25px;
  /* display: inline-block; */
  float: left;
}
.child-img {
  /* display: inline-block; */
  float: left;
  width: 40%;
  /* margin-left: 45px; */
}
.child-img img {
  width: 140px;
  height: 140px;
}
.child_content {
  display: inline-block;
  vertical-align: middle;
}
.child_content div {
  width: 100%;
  /* width: 150px; */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.child_content_text {
  font-size: 20px;
  line-height: 30px;
}
.child_content_smalltext {
  line-height: 16px;
  color: darkgray;
}
.child_content_count {
  display: flex;
  text-align: center;
  margin-top: 20px;
}
.child_content_count span {
  flex: 1;
  /* background-color: blue; */
}
.corlr {
  color: chocolate;
}
.clear {
  clear: both;
}
.button_e {
  /* width: 10; */
  position: relative;
  top: 45px;
  left: -167px;
  z-index: 20;
  width: 35px;
  height: 35px;
}
</style>