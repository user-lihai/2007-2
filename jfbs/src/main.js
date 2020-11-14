import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import qs from 'qs';
import moment from 'moment';
//关注组件
import gz_button from './components/gz_button.vue'
//导入MintUI的所有组件
import MintUI from 'mint-ui';
//引入点赞
import dz_button from './components/dz_button.vue'
//引入评论
import pl_button from './components/pl_button.vue'
//导入MintUI的样式文件
import 'mint-ui/lib/style.min.css';
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);
axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.prototype.axios = axios;
Vue.prototype.moment = moment;
Vue.prototype.qs = qs;
Vue.config.productionTip = false
Vue.component('dz-button',dz_button);
Vue.component('gz-button',gz_button);
Vue.component('pl-button',pl_button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
