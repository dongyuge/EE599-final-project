// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//css
import '../style/reset.css'

// inmention box
import Titles from './api/title.js'
Vue.prototype.mytitle = Titles

// formdata
import referto from './api/formdata.js'
Vue.prototype.myreferto = referto

//vuex file
import store from './store/store.js'


Vue.prototype.$goEasy = new GoEasy({
    host: "hangzhou.goeasy.io", 
    appkey: "BC-854f6d5d26f347b2a9382b0b8bbe12fc", 
    onConnected: function() {
        console.log('connect successfully！')
    },
    onDisconnected: function() { 
        console.log('connect interrupt！')
    },
    onConnectFailed: function(error) {
        console.log('fail to connect and an error！')
    }
});

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/kua'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
