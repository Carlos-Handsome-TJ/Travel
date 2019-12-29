import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false;
fastClick.attach(document.body);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
