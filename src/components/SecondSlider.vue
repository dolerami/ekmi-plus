<template>
  <section class="sec-2">
    <div class="second-slider">
      <div class="second-title">
        <h3 class="second-h3"><span class="orange">Н</span>овинки</h3>
      </div>
      <div class="cont-slider">
        <div class="cont-button">
          <div class="prev">
            <label for="slider-part" class="label-left">
              <span class="material-icons slide">keyboard_arrow_left</span>
            </label>
          </div>
        </div>
        <div class="slider-part" id="slider-part">
          <div class="product">
            <div class="product-view">
              <img class="product-img" src="../../public/assets/img/IMG_3505-готовый.png" alt="Purple Couch">
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
          <div class="product">
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
          <div class="product">
            <div class="product-view">
              <img class="product-img" src="../../public/assets/img/732.png" alt="Purple Couch">
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
        </div>
        <div class="cont-button">
          <div class="next">
            <label for="slider-part" class="label-right">
              <span class="material-icons slide">keyboard_arrow_right</span>
            </label>
          </div>
        </div>
      </div>
      <router-link to="/catalogue" class="main-route">
        <button type="button" class="catalogue-dir">перейти в КАталог</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondSlider"
}
</script>

<style lang="scss" scoped>

.sec-2{
  width:100vw;
  height:51.73vw;

  .second-slider{
    position:relative;
    left:8.9vw;
    top:11.1vw;

    width:77.6vw;
    height:39.6vw;

    .second-title{
      width:10.6vw;
      height:2.7vw;

      .second-h3{
        margin:0;

        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.4vw;
        line-height: 110%;

        color:#343434;

        .orange{
          color: #FF9619;
        }
      }
    }

    .cont-slider{
      width:77.6vw;
      height:29.4vw;

      display: flex;
      justify-content: space-evenly;

      .cont-button{
        height:3.1vw;
        padding-top:10.5vw;

        .slide{
          font-size: 3.1vw;
          color: #5A5A5A;
        }

        .slide:hover{
          border: 1px solid rgba(90, 90, 90, 0.7);
          cursor:pointer;
        }
      }

      .slider-part{
        width:64.5vw;
        height:29.4vw;
        padding:0;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .product {
          width: 18.75vw;
          height: 24.2vw;

          display: flex;
          flex-direction: column;
          align-items: center;
          transition:all 0.3s ease;

          .product-view {
            width: 18.75vw;
            height: 19.3vw;
            background-color: #F2F3F5;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-around;
            transition:all 0.3s ease;
          }

          .product-info{
            width:18.75vw;
            height:4.9vw;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            transition:all 0.3s ease;

            .title{
              width:18.75vw;
              height:2.45vw;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              transition:all 0.3s ease;

              .product-name{
                font-family: 'Raleway',sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1.25vw;
                line-height: 1.5vw;
                margin:0;
                /* or 122% */

                text-transform: uppercase;

                color: #343434;
                transition:all 0.3s ease;
              }
            }

            .numbers{
              width:18.75vw;
              height:2.45vw;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              transition:all 0.3s ease;

              .product-price{
                font-family: 'Open Sans',sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 1.25vw;
                line-height: 1.7vw;
                margin:0;
                /* identical to box height */

                text-transform: uppercase;

                color: #FF9619;
                transition:all 0.3s ease;
              }
            }
          }
        }

        .product:hover{
          width:22.8vw;
          height:29.4vw;
          cursor:pointer;

          .product-view{
            width:22.8vw;
            height:23.45vw;
          }

          .product-info{
            width:22.8vw;
            height:5.9vw;

            .title{
              width:22.8vw;
              height:5.9vw;

              justify-content: flex-end;
            }

            .numbers{
              width:22.8vw;
              height:5.9vw;
            }
          }
        }

        .product:nth-of-type(1){
          .product-view{
            .product-img{
              width: 17.6vw;
              height: 17.8vw;

              mix-blend-mode: darken;
              transition:all 0.3s ease;
            }
          }
        }

        .product:nth-of-type(1):hover{
          .product-view{
            .product-img{
              width: 21.6vw;
              height: 20.4vw;
            }
          }
        }

        .product:nth-of-type(2){
          .product-view{
            .product-img{
              width:18.5vw;
              height:12.2vw;

              mix-blend-mode: darken;
              transition:all 0.3s ease;
            }
          }
        }

        .product:nth-of-type(2):hover{
          .product-view{
            .product-img{
              width:22.5vw;
              height:14.8vw;
            }
          }
        }

        .product:nth-of-type(3){
          .product-view{
            .product-img{
              width:18.4vw;
              height:16.1vw;

              mix-blend-mode: darken;
              transition:all 0.3s ease;
            }
          }
        }

        .product:nth-of-type(3):hover{
          .product-view{
            .product-img{
              width:22.4vw;
              height:18.7vw;
            }
          }
        }
      }
    }
    .main-route{
      text-decoration:none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .catalogue-dir{
        width: 14.5vw;
        height: 3vw;

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
}

</style>