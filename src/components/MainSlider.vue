<template>
  <section class="sec-1">
    <div class="main-slider">
      <div class="main-cta">
        <div class="main-text">
          <h2 class="main-h2">
            <span class="orange">Л</span>УЧШАЯ ЖИЗНЬ,
            СОЗДАННАЯ ДЛЯ ВАС!
          </h2>
        </div>
        <router-link to="/catalogue" class="main-route">
          <button type="button" class="catalogue-dir">перейти в КАталог</button>
        </router-link>
      </div>
      <div class="text-and-pic">
        <p class="founded-text">Основано в 1993 году</p>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <div class="img-container">
            <b-carousel
                id="carousel-1"
                v-model="slide"
                class="carousel-inner"
                :interval="3500"
                indicators
                img-width="60.4vw"
                img-height="42.8vw"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
              <b-carousel-slide alt="Couch" class="main-couches carousel-item">
                <template #img>
                  <img
                      class="d-block img-fluid w-100"
                      src="../../public/assets/img/10000_Post01.png"
                      alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide alt="Couch" class="main-couches carousel-item">
                <template #img>
                  <img
                      class="d-block img-fluid w-100"
                      src="../../public/assets/img/Леон2.png"
                      alt="image slot"
                  >
                </template>
              </b-carousel-slide>
              <b-carousel-slide alt="Couch" class="main-couches carousel-item">
                <template #img>
                  <img
                      class="d-block img-fluid w-100"
                      src="../../public/assets/img/Ампир2.png"
                      alt="image slot"
                  >
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {BCarousel} from "bootstrap-vue";
import {BCarouselSlide} from "bootstrap-vue";

export default {
  name: "MainSlider",
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

.sec-1{
  width:100vw;
  height:51.73vw;

  .main-slider{
    position:relative;

    width:100vw;
    height:41vw;

    background: #CCB2A3;

    .main-cta{
      position:absolute;
      top:12.1vw;
      left:8.9vw;

      width:18.75vw;
      height:20vw;

      .main-text{
        padding-bottom: 4.2vw;

        .main-h2{
          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 2.9vw;
          line-height: 110%;

          color: #FFFFFF;

          .orange{
            color: #FF9619;
          }
        }
      }

      .main-route{
        text-decoration:none;

        .catalogue-dir{
          height: 3vw;
          padding:0.97vw 1.46vw;

          background: #FF9619;
          border:none;

          text-decoration: none;
          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 1.1vw;
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
        .catalogue-dir:hover{
          background: #5B5B5B;
        }
      }
    }
    .text-and-pic{
      position:absolute;
      top:2.4vw;
      right:8.9vw;

      width:60.4vw;
      height:49.3vw;

      display:flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;

      .founded-text{
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.4vw;
        line-height: 127.5%;

        color: #FFFFFF;

        margin:0;
        padding-bottom:2.4vw;
      }

      .carousel{
        width:60.4vw;
        height:45vw;

        .img-container{
          width: 60.4vw;
          height: 45vw;
          display:flex;
          flex-direction: row;
          justify-content: space-between;

          #carousel-1{
            width: 100%;
            height: 45vw;

            display:flex;

            .main-couches{
              width: 100%;
              height: 42.8vw;
              background-size: contain;

              template{

                img{
                  width: 60.4vw;
                  height: 42.8vw;
                  background-size: contain;
                }
              }
            }
            .carousel-indicators{
               list-style-type: none;
               width:6vw;
               height:2.3vw;

               flex-direction: row;
               justify-content: space-between;
               align-items: flex-end;
               margin: 0 auto;

               li{
                 background-color:#d4d6da;

                 width:0.9vw;
                 height:0.9vw;
                 border:none;

                 border-radius:50%;
                 margin:0 0.35vw;
               }

                .active{
                  background-color: #FF9619;
              }
            }
          }
        }
      }
    }
  }
}

</style>