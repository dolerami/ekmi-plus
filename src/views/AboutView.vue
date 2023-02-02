<template>
  <div class="about">
    <section class="sec-3">
      <div class="cont-about">
        <div class="title-about">
          <h3 class="history"><span class="span-about">Н</span>аша история</h3>
        </div>
        <div class="info-about">
          <div class="part-about">
            <div class="part-text">
              <div class="cont-text">
                <div class="cont-title">
                  <h5 class="text-title">Наработки длинной в 25 лет</h5>
                </div>
                <div class="cont-description">
                  <p class="description-about">
                    Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей
                  </p>
                </div>
              </div>
            </div>
            <div class="part-orange"></div>
          </div>
          <div class="pic-about">
            <img src="../../public/assets/img/Босфор1.png" alt="A black couch" class="img-about">
          </div>
        </div>
      </div>
      <div class="cont-years">
        <div class="year-point">
          <h5 class="begin year">1993</h5>
        </div>
        <div class="year-amount">
          <h3 class="duration">25 лет</h3>
        </div>
        <div class="year-point">
          <h5 class="finish year">2021</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.sec-3{
  width:100%;
  height:59.3vw;
  padding:0 0 1.5vw 8.9vw;

  .cont-about{
    width:82vw;
    height:42.25vw;

    .title-about{

      .history{
        margin:0;
        padding-bottom:0.97vw;

        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.4vw;
        line-height: 150%;
        /* or 52px */

        display: flex;
        align-items: center;

        color:#343434;

        .span-about{
          color:#FF9619;
        }
      }
    }

    .info-about{
      width:82vw;
      height:37.7vw;

      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .part-about{
        width:37.4vw;
        height:37.7vw;
        padding-top:4.6vw;

        position: absolute;
        right:44.6vw;
        z-index:1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .part-text{
          width: 37.4vw;
          height: 17.15vw;

          background: #5B5B5B;
          display:flex;

          .cont-text{
            margin:auto;
            width:31.5vw;
            height:10.1vw;

            .cont-title{
              padding-bottom:1.7vw;

              .text-title{
                margin:0;
                font-family: 'Raleway',sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1.4vw;
                line-height: 125%;

                color:#FFFFFF;
              }
            }

            .cont-description{

              .description-about{
                margin:0;

                font-family: 'Raleway',sans-serif;
                font-style: normal;
                font-weight: 300;
                font-size: 1.25vw;
                line-height: 135%;

                color:#FFFFFF;
              }
            }
          }
        }

        .part-orange{
          position: absolute;
          width: 7vw;
          height: 3.8vw;
          right:4.8vw;
          top:19.9vw;


          background: #FF9619;
          z-index:2;
        }
      }

      .pic-about{
        width:55.6vw;
        height:37.7vw;

        .img-about{
          width:55.6vw;
          height:37.7vw;
        }
      }
    }
  }
  .cont-years{
    width:82vw;
    height:15.5vw;

    display: flex;
    justify-content: space-between;

    .year-point{
      padding-top:9.4vw;
      width:3.7vw;
      height:15.6vw;

      .year{
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 1.7vw;
        line-height: 127.5%;

        color:#343434;
      }
    }

    .year-amount{
      padding-top:5.6vw;
      width:31.5vw;
      height:15.6vw;

      .duration{
        margin:0;
        width: 31.5vw;
        height: 10vw;

        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 10vw;
        line-height: 150%;

        color: rgba(90, 90, 90, 0.1);

        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
}

</style>
