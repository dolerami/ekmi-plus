<template>
  <div class="about">
    <section class="sec-3">
      <div class="cont-about">
        <div class="title-about">
          <h3 class="history"><span class="span-about">Н</span>аша история</h3>
        </div>
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
          <img src="../../public/assets/img/Босфор1.png" alt="A black couch">
        </div>
      </div>
      <div class="cont-years">
        <div class="year-point">
          <h5 class="begin year">1993</h5>
        </div>
        <div class="year-amount">
          <h2 class="duration">25 лет</h2>
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
  width:100vw;
  height:56.8vw;
  padding:0 0 1.5vw 8.9vw;

  .cont-about{
    width:82vw;
    height:41.25vw;

    .title-about{
      .history{
        margin:0;

        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
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
  }
  .cont-years{
    width:82vw;
    height:15.5vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
}

</style>
