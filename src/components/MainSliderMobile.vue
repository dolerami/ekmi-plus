<template>
  <section class="sec-1-mob">
    <div class="main-slider-mob">
      <div class="main-text-mob">
        <h2 class="main-h2-mob">
          <span class="orange-mob">Л</span>УЧШАЯ ЖИЗНЬ,
          СОЗДАННАЯ ДЛЯ ВАС!
        </h2>
      </div>
      <div id="myCarousel" class="carousel slide main-mob" data-ride="carousel">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            class="carousel-inner carousel-mob"
            :interval="3500"
            indicators
            :autoplay="false"
            img-width="60.4vw"
            img-height="42.8vw"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
          <b-carousel-slide alt="Couch" class="main-slides carousel-item">
            <template #img>
              <img
                  class="d-block img-fluid w-100 slide-img"
                  src="../../public/assets/img/10000_Post01.svg"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide alt="Couch" class="main-slides carousel-item">
            <template #img>
              <img
                  class="d-block img-fluid w-100 slide-img"
                  src="../../public/assets/img/Леон2.svg"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide alt="Couch" class="main-slides carousel-item">
            <template #img>
              <img
                  class="d-block img-fluid w-100 slide-img"
                  src="../../public/assets/img/Ампир2.svg"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="small-text-mob">
        <p class="founded-text-mob">Основано в 1993 году</p>
      </div>
      <div class="button-part-mob">
        <router-link to="/catalogue" class="main-route-mob">
          <button type="button" class="catalogue-dir-mob">перейти в КАталог</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import {BCarousel, BCarouselSlide} from "bootstrap-vue";

export default {
  name: "MainSliderMobile",
  components: {BCarousel, BCarouselSlide},
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">

.sec-1-mob{
  width:100vw;
  height:161.33vw;

  .main-slider-mob{
    width:100vw;
    height:161.33vw;

    background: #CCB2A3;

    display:flex;
    flex-direction: column;
    align-items: center;

    .main-text-mob{
      width:100vw;
      height:23.47vw;
      padding-top:8vw;
      padding-left:4.8vw;

      .main-h2-mob{
        margin:0;
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 6.67vw;
        line-height: 110%;
        color: #FFFFFF;

        .orange-mob{
          color: #FF9619;
        }
      }
    }

    .main-mob{
      width:100vw;
      height:94.67vw;
      padding-top:8vw;

      .carousel-mob{
        width:100vw;
        height:86.67vw;

        .carousel-indicators{
          list-style-type: none;
          width:10.4vw;
          height:5.87vw;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          margin:0 auto;

          li{
            background-color:#d4d6da;

            width:1.87vw;
            height:1.87vw;
            border:none;

            border-radius:50%;
            margin:0 0.35vw;
          }

          .active{
            background-color: #FF9619;
          }
        }

        .main-slides{
          width: 100vw;
          background-size: contain;

          template{

            img{
              width: 100vw;
              background-size: contain;
            }
          }
        }
      }
    }

    .small-text-mob{
      padding-top:5.33vw;
      width:55.2vw;

      .founded-text-mob{
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 5.33vw;
        line-height: 127.5%;

        color: #FFFFFF;

        margin:0;
      }
    }

    .button-part-mob{
      padding-top:5.33vw;

      .main-route-mob{
        text-decoration:none;

        .catalogue-dir-mob{
          width:55.87vw;
          height: 11.47vw;
          padding:3.47vw 5.6vw;

          background: #FF9619;
          border:none;

          text-decoration: none;
          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 4.27vw;
          line-height: 150%;
          /* or 24px */

          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          text-align: center;

          text-transform: uppercase;

          color: #FFFFFF;
        }
      }
    }
  }
}

</style>