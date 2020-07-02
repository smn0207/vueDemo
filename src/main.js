import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


Vue.prototype.$bus=new Vue()   //事件传递，到没有关联的组件，非父子组件的通信，事件总线$bus
// 1. Vue.prototype.$bus=new Vue()
// 2.  this.$bus.$emit("ItemImageLoade")
//  this.$bus.$on("ItemImageLoade", () => { }


// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
