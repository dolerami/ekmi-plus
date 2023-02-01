<template>
  <section class="sec-2-mob">
    <div class="second-slider">
      <div class="second-title">
        <h3 class="second-h3"><span class="orange">Н</span>овинки</h3>
      </div>
      <div class="cont-sliders">
        <div class="cont-1">
          <div class="cont-button">
            <div class="prev">
              <label
                  for="slider-part1"
                  class="label-left"
                  @click="$refs.carousel.goToNext()"
              >
                <span class="material-icons action">keyboard_arrow_left</span>
              </label>
            </div>
          </div>
          <agile
              ref="carousel"
              class="slider-part"
              id="slider-part1"
              :dots="false"
              :nav-buttons="false"
              :slides-to-show="1"
              :autoplay="true"
              :autoplay-speed="3500"
          >
            <div class="slide">
              <div class="product-view">
                <img class="product-img" src="../../public/assets/img/IMG_3505-готовый.png" alt="Chair">
              </div>
              <div class="product-info">
                <div class="title">
                  <h5 class="product-name">Alba</h5>
                </div>
                <div class="numbers">
                  <h5 class="product-price">15 000 uah</h5>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="product-view">
                <img class="product-img" src="../../public/assets/img/image 4.png" alt="Purple Couch">
              </div>
              <div class="product-info">
                <div class="title">
                  <h5 class="product-name">Martin</h5>
                </div>
                <div class="numbers">
                  <h5 class="product-price">15 000 uah</h5>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="product-view">
                <img class="product-img" src="../../public/assets/img/732.png" alt="Old Couch">
              </div>
              <div class="product-info">
                <div class="title">
                  <h5 class="product-name">Luara</h5>
                </div>
                <div class="numbers">
                  <h5 class="product-price">15 000 uah</h5>
                </div>
              </div>
            </div>
          </agile>
          <div class="cont-button">
            <div class="next">
              <label
                  for="slider-part1"
                  class="label-right"
                  @click="$refs.carousel.goToPrev()"
                  @mouceenter="hover=true"
                  @mouceleave="hover=false"
              >
                <span class="material-icons action">keyboard_arrow_right</span>
              </label>
            </div>
          </div>
        </div>
        <div class="cont-2">
          <div class="cont-button">
            <div class="prev">
              <label
                  for="slider-part2"
                  class="label-left"
                  @click="$refs.carousel.goToNext()"
              >
                <span class="material-icons action">keyboard_arrow_left</span>
              </label>
            </div>
          </div>
          <agile
              ref="carousel"
              class="slider-part"
              id="slider-part2"
              :dots="false"
              :nav-buttons="false"
              :slides-to-show="1"
              :autoplay="true"
              :autoplay-speed="3500"
          >
            <div class="slide">
              <div class="product-view">
                <img class="product-img" src="../../public/assets/img/image 4.png" alt="Purple Couch">
              </div>
              <div class="product-info">
                <div class="title">
                  <h5 class="product-name">Martin</h5>
                </div>
                <div class="numbers">
                  <h5 class="product-price">15 000 uah</h5>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="product-view">
                <img class="product-img" src="../../public/assets/img/732.png" alt="Old Couch">
              </div>
              <div class="product-info">
                <div class="title">
                  <h5 class="product-name">Luara</h5>
                </div>
                <div class="numbers">
                  <h5 class="product-price">15 000 uah</h5>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="product-view">
                <img class="product-img" src="../../public/assets/img/IMG_3505-готовый.png" alt="Chair">
              </div>
              <div class="product-info">
                <div class="title">
                  <h5 class="product-name">Alba</h5>
                </div>
                <div class="numbers">
                  <h5 class="product-price">15 000 uah</h5>
                </div>
              </div>
            </div>
          </agile>
          <div class="cont-button">
            <div class="next">
              <label
                  for="slider-part2"
                  class="label-right"
                  @click="$refs.carousel.goToPrev()"
                  @mouceenter="hover=true"
                  @mouceleave="hover=false"
              >
                <span class="material-icons action">keyboard_arrow_right</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="cont-button">
        <router-link to="/catalogue" class="main-route">
          <button type="button" class="catalogue-dir">перейти в КАталог</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: "SecondSliderMobile",
  components:{
    agile:VueAgile
  },
  props:{
    slidesToShow: 1
  }
}
</script>

<style lang="scss" scoped>

  .sec-2-mob{
    width:100vw;
    height:266.93vw;
    padding:24vw 4.8vw;

    .second-slider{
      width:90.13vw;
      height:242.93vw;

      display:flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>