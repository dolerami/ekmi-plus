import Vue from 'vue'
import App from './App.vue'
import router from './router'
import responsive from "vue-responsive"
import { BootstrapVue } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(responsive)
Vue.use(CarouselPlugin)
Vue.use(BootstrapVue)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)

new Vue({
  CarouselPlugin,
  BootstrapVue,
  responsive,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
