<template>
  <section>
    <div class="container main-slider">
      <h1>
        <span>Л</span>УЧШАЯ ЖИЗНЬ,
        СОЗДАННАЯ ДЛЯ ВАС!
      </h1>
      <p>Основано в 1993 году</p>
      <button>перейти в КАталог</button>
      <img src="../assets/10000_Post01.png" alt="Couch">
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
  position:relative;
  width:100%;
  top:-25px;
}

.main-slider{
  position: absolute;

  width: 100%;
  height: 744.91px;
  left: 0;
  top: 116px;

  padding:0;
}

div{
  position: relative;
  width: 100%;
  height: 590px;
  left: 0;
  top: 0;

  background: #CCB2A3;
}

h1{
  //position: absolute;
  left: 9.38%;
  right: 71.88%;
  top: 4.23%;
  bottom: 93.09%;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 110%;
  /* or 46px */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #FFFFFF;
}

span{
  //position: absolute;
  left: 9.38%;
  right: 71.88%;
  top: 4.23%;
  bottom: 93.09%;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 110%;
  /* or 46px */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #FF9619;
}

button{
  position: absolute;
  width: 209.54px;
  height: 43px;
  left: 134px;
  top: 534px;

  background: #5B5B5B;
  left: 10.76%;
  right: 77.64%;
  top: 7.98%;
  bottom: 91.79%;

  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
}

</style>