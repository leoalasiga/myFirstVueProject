// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Header,Button} from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';


//导入axios和vue-axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import qs from 'qs'

// Vue.prototype.$http = Axios
// Vue.prototype.$qs=qs

// Vue.use(VueAxios,axios)


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//使用mint-ui对应组件
Vue.component(Header.name, Header);
Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c=>c(App),
})
