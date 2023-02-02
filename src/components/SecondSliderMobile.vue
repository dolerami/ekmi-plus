<template>
  <section class="sec-2-mob">
    <div class="second-slider">
      <div class="second-title">
        <h3 class="second-h3"><span class="orange">Н</span>овинки</h3>
      </div>
      <div class="cont-sliders">
        <div class="cont-slider">
          <div class="cont-button">
            <div class="prev">
              <label
                  for="slider-part1"
                  class="label-left"
                  @click="$refs['carousel carousel1'].goToPrev()"
              >
                <span class="material-icons action">keyboard_arrow_left</span>
              </label>
            </div>
          </div>
          <agile
              ref="carousel carousel1"
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
                <img class="product-img" src="../../public/assets/img/IMG_3505-готовый.svg" alt="Chair">
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
                <img class="product-img" src="../../public/assets/img/image 4.svg" alt="Purple Couch">
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
                <img class="product-img" src="../../public/assets/img/732.svg" alt="Old Couch">
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
                  @click="$refs['carousel carousel1'].goToNext()"
                  @mouceenter="hover=true"
                  @mouceleave="hover=false"
              >
                <span class="material-icons action">keyboard_arrow_right</span>
              </label>
            </div>
          </div>
        </div>
        <div class="cont-slider">
          <div class="cont-button">
            <div class="prev">
              <label
                  for="slider-part2"
                  class="label-left"
                  @click="$refs['carousel carousel2'].goToPrev()"
              >
                <span class="material-icons action">keyboard_arrow_left</span>
              </label>
            </div>
          </div>
          <agile
              ref="carousel carousel2"
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
                <img class="product-img" src="../../public/assets/img/image 4.svg" alt="Purple Couch">
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
                <img class="product-img" src="../../public/assets/img/732.svg" alt="Old Couch">
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
                <img class="product-img" src="../../public/assets/img/IMG_3505-готовый.svg" alt="Chair">
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
                  @click="$refs['carousel carousel2'].goToNext()"
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
      align-items: center;

      .second-title{
        width:90.13vw;
        height:13.87vw;
        padding:0 61.07vw 8vw 0;

        .second-h3{
          margin:0;
          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 5.33vw;
          line-height: 110%;

          color:#343434;

          .orange{
            color: #FF9619;
          }
        }
      }

      .cont-sliders{
        width:90.13vw;
        height:201.6vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .cont-slider{
          width:90.13vw;
          height:92.8vw;
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .cont-button{
            width:6.6vw;
            height:92.8vw;
            padding-bottom:18.67vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .action{
              font-size: 6.47vw;
              color: #5A5A5A;
            }
          }

          .slider-part{
            width:72vw;
            height:92.8vw;
            padding:0;

            display: flex;
            flex-direction: column;
            align-items: center;

            .slide {
              width:72vw;
              height:92.8vw;

              display: flex;
              flex-direction: column;
              align-items: center;
              transition: all 0.3s ease;

              .product-view {
                width: 72vw;
                height: 74.13vw;
                background-color: #F2F3F5;

                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-around;
                transition: all 0.3s ease;
              }

              .product-info{
                width:72vw;
                height:18.67vw;

                display: flex;
                flex-direction: column;
                align-items: center;
                transition:all 0.3s ease;

                .title{
                  width:72vw;
                  height:10.67vw;

                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-end;
                  transition:all 0.3s ease;

                  .product-name{
                    font-family: 'Raleway',sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 4.8vw;
                    line-height: 5.87vw;
                    margin:0;
                    /* or 122% */

                    text-transform: uppercase;

                    color: #343434;
                    transition:all 0.3s ease;
                  }
                }

                .numbers{
                  width:72vw;
                  height:8vw;

                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-end;
                  transition:all 0.3s ease;

                  .product-price{
                    font-family: 'Open Sans',sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 4.8vw;
                    line-height: 6.67vw;
                    margin:0;

                    text-transform: uppercase;

                    color: #FF9619;
                    transition:all 0.3s ease;
                  }
                }
              }
            }
          }

          #slider-part1{
            .slide:nth-of-type(1){
              .product-view{
                .product-img{
                  width: 67.76vw;
                  height: 68.27vw;

                  mix-blend-mode: darken;
                  transition:all 0.3s ease;
                }
              }
            }

            .slide:nth-of-type(2){
              .product-view{
                .product-img{
                  width:71.2vw;
                  height:46.93vw;

                  mix-blend-mode: darken;
                  transition:all 0.3s ease;
                }
              }
            }

            .slide:nth-of-type(3){
              .product-view{
                .product-img{
                  width:70.67vw;
                  height:61.87vw;

                  mix-blend-mode: darken;
                  transition:all 0.3s ease;
                }
              }
            }
          }

          #slider-part2{
            .slide:nth-of-type(1){
              .product-view{
                .product-img{
                  width:71.2vw;
                  height:46.93vw;

                  mix-blend-mode: darken;
                  transition:all 0.3s ease;
                }
              }
            }

            .slide:nth-of-type(2){
              .product-view{
                .product-img{
                  width:70.67vw;
                  height:61.87vw;

                  mix-blend-mode: darken;
                  transition:all 0.3s ease;
                }
              }
            }

            .slide:nth-of-type(3){
              .product-view{
                .product-img{
                  width: 67.76vw;
                  height: 68.27vw;

                  mix-blend-mode: darken;
                  transition:all 0.3s ease;
                }
              }
            }
          }
        }
      }

      .cont-button{
        width:90.13vw;
        height:27.47vw;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        .main-route {
          text-decoration: none;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .catalogue-dir {
            width: 55.88vw;
            height:11.47vw;
            //padding: 0.97vw 1.46vw;

            background: #FF9619;
            border: none;

            text-decoration: none;
            font-family: 'Raleway', sans-serif;
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