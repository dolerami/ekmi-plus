<template>
  <section>
    <div class="main">
      <h2>
        <span>Л</span>УЧШАЯ ЖИЗНЬ,
        СОЗДАННАЯ ДЛЯ ВАС!
      </h2>
      <p>Основано в 1993 году</p>
      <button>перейти в КАталог</button>
      <div class="slider">
        <img src="../assets/10000_Post01.png" alt="Couch">
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

section{
  width:100vw;
  height:98.8vh;

  .main{
    width:100vw;
    height:78.2vh;
    background: #CCB2A3;

    position: relative;

    h2{
      position: absolute;
      left: 8.7vw;
      top: 11.3vw;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 2.7vw;
      line-height: 110%;
      /* or 46px */

      display: flex;
      align-items: center;
      text-transform: capitalize;

      color: #FFFFFF;
      margin:0;

      span{
        color: #FF9619;
      }
    }

    p{
      position: absolute;
      right: 8.6vw;
      top: 2.27vw;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.3vw;
      line-height: 127.5%;
      /* or 25px */

      display: flex;
      align-items: center;

      color: #FFFFFF;
    }

    button{
      position: absolute;
      width: 13.6vw;
      height: 5.7vh;
      left: 8.7vw;
      top: 70.8vh;

      background: #FF9619;

      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 1vw;
      line-height: 150%;
      /* or 24px */

      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      text-transform: uppercase;

      color: #FFFFFF;
    }

    .slider{
      position: absolute;
      width: 56.6vw;
      left: 28.3vw;
      top: 28vh;
    }
  }
}

</style>