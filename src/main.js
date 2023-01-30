import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAgile from 'vue-agile'

Vue.config.productionTip = false
Vue.use(CarouselPlugin)
Vue.use(BootstrapVue)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.use(VueAgile)

new Vue({
  VueAgile,
  CarouselPlugin,
  BootstrapVue,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
