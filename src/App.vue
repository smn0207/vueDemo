<template>
  <div id="app">
    <TabBar>
      <tabbaritem path="/shouye" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/zfb--1.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/zfb1.png" alt />
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/fenlei" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/qian--1.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/qian.png" alt />

        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cat" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/koubei.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/koubei2.png" alt />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/use1.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/us1.png" alt />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </TabBar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar/TabBar";
import tabbaritem from "components/content/tabbar/tabbaritem";

export default {
  name: "app",
  components: {
    TabBar,
    tabbaritem
  }
};
</script>>

<style>
@import "assets/css/base.css";
</style>
