<template>
  <div id="home">
    <ul>
      <li
        @click="getActive(index)"
        :class="index==currentindex?'active':null"
        v-for="(item,index) in text"
        :key="item"
      >{{item +' ' + index}}</li>
    </ul>
    <NavBar></NavBar>
    <div>{{fullname}}</div>
    <button @click="hcangge($event)">按钮</button>

    <div>
      <span  v-if="name">
        <label for="userid">用户账号</label>
        <input type="text" id="userid" placeholder="用户账号" key="username">
      </span>
      <span  v-else>
        <label  for="useremail">用户邮箱</label>
        <input type="text" id="useremail" placeholder="用户邮箱" key="useremail">
      </span>
      <button @click="name=!name">切换账号</button>
    </div>
  </div>
</template>>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Home",
  data() {
    return {
      text: ["海王", "火影", "叶问", "丑女大作战", "蓝精灵"],
      isactive: false,
      currentindex: 0,
      firstname: "smn",
      lastname: "mh",
      name:true
    };
  },
  components: {
    NavBar
  },
  methods: {
    getActive(index) {
      this.currentindex = index;
    },
    hcangge(e) {
      console.log(e.toElement);
    }
  },
  computed: {
    fullname: function() {
      return this.firstname + " " + this.lastname;
    }
  },
  mounted() {
    //  console.log(this.firstname);
  }
};
</script>

<style scoped>
.active {
  color: red;
  /* background: royalblue; */
}
</style>