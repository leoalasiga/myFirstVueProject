// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Header,Button} from 'mint-ui';

//导入mui样式
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header);
Vue.component(Button.name,Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c=>c(App),
})
