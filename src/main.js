import Vue from 'vue'
import App from './App.vue'
import router from './router'
import responsive from "vue-responsive"

Vue.config.productionTip = false
Vue.use(responsive)

new Vue({
  responsive,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
