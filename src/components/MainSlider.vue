<template>
  <section class="sec-1">
    <div class="main-slider">
      <div class="main-cta">
        <div class="main-text">
          <h2 class="main-h2">
            <span class="main-span">Л</span>УЧШАЯ ЖИЗНЬ,
            СОЗДАННАЯ ДЛЯ ВАС!
          </h2>
        </div>
        <router-link to="/catalogue" class="main-route">
          <button type="button" class="catalogue-dir">перейти в КАталог</button>
        </router-link>
      </div>
      <div class="text-and-pic">
        <p class="founded-text">Основано в 1993 году</p>
        <div class="main-img">
          <img src="../assets/10000_Post01.png" alt="Couch" class="main-couches">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSlider"
}
</script>

<style lang="scss" scoped>

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

          .main-span{
            color: #FF9619;
          }
        }
      }

      .main-route{
        text-decoration:none;

        .catalogue-dir{
          width: 14.5vw;
          height: 3vw;

          background: #5B5B5B;
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
          background: #FF9619;
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

      .main-img{
        width: 60.4vw;
        height: 42.8vw;

        .main-couches{
          width: 60.4vw;
          height: 42.8vw;
        }
      }
    }
  }
}

</style>