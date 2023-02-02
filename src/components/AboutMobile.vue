<template>
  <div class="about-mobile">
    <section class="sec-3">
      <div class="heading-about">
        <h3 class="history-about"><span class="span-about">Н</span>аша история</h3>
      </div>
      <div class="cont-about">
        <div class="info-about">
          <div class="part-about">
            <div class="text-part">
              <div class="title-about">
                <h5 class="text-title">Наработки длинной в 25 лет</h5>
              </div>
              <div class="description-about">
                <p class="text-description">
                  Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="orange-part"></div>
        <div class="pic-about">
          <img src="../../public/assets/img/Босфор1.svg" alt="A black couch" class="img-about">
        </div>
      </div>
      <div class="year-amount">
        <h3 class="duration">25 лет</h3>
      </div>
      <div class="years-about">
        <div class="year-point">
          <h5 class="begin year">1993</h5>
        </div>
        <div class="year-point">
          <h5 class="finish year">2021</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutMobile"
}
</script>

<style lang="scss" scoped>

.sec-3{
  width:100vw;
  height:220.27vw;
  padding-top:24vw;

  .heading-about{
    width:100vw;
    height:9.87vw;
    padding-left:4.8vw;

    .history-about{
      margin:0;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 5.33vw;
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

  .cont-about{
    width:100vw;
    height:129.6vw;
    position:relative;

    .info-about{
      width:100vw;
      height:74.67vw;
      padding-top:8vw;

      .part-about{
        width:100vw;
        height:66.67vw;
        padding-top:13.07vw;
        padding-left:5.07vw;
        background: #5B5B5B;

        .text-part{
          width:90.67vw;
          height:33.33vw;

          .title-about{
            width:90.67vw;
            height:8vw;

            .text-title{
              font-family: 'Raleway',sans-serif;
              font-style: normal;
              font-weight: 500;
              font-size: 4.27vw;
              letter-spacing: 0.1em;
              line-height: 125%;
              color: #FFFFFF;
            }
          }

          .description-about{
            width:90.67vw;
            height:25.33vw;

            .text-description{
              font-family: 'Raleway',sans-serif;
              font-style: normal;
              font-weight: 300;
              font-size: 3.73vw;
              letter-spacing: 0.1em;
              line-height: 135%;
              color: #FFFFFF;
            }
          }
        }
      }
    }

    .orange-part{
      position:absolute;
      z-index:2;
      width:13.87vw;
      height:12.27vw;
      background: #FF9619;

      top:63.47vw;
      left:86.13vw;
    }

    .pic-about{
      width:100vw;
      height:62.13vw;
      position:absolute;
      z-index:1;
      top:67.47vw;
      padding-left:5.07vw;

      .img-about{
        width:90.4vw;
        height:62.13vw;
      }
    }
  }

  .year-amount{
    width:100vw;
    height:39.47vw;
    padding-left:5.07vw;

    .duration{
      margin:0;
      width: 90.4vw;
      height: 23.47vw;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 29.6vw;
      line-height: 150%;
      color: rgba(52, 52, 52, 0.1);
    }
  }

  .years-about{
    width:100vw;
    height:17.33vw;
    padding-left:5.07vw;

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .year-point{
      width:11.17vw;
      height:6.67vw;

      .year{
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 5.33vw;
        line-height: 127.5%;
        color:#343434;
      }
    }
  }
}

</style>