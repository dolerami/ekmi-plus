<template>
  <section class="sec-2">
    <div class="second-slider">
      <div class="second-title">
        <h3 class="second-h3"><span class="orange">Н</span>овинки</h3>
      </div>
      <div class="cont-slider">
        <div class="prev">
          <label for="slider-part" class="label-left">
            <span class="material-icons slide-left">keyboard_arrow_left</span>
          </label>
        </div>
        <div class="slider-part" id="slider-part">
          <div class="product">
            <div class="product-view">
              <img src="../assets/image 4.png" alt="Purple Couch">
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
        </div>
        <div class="next">
          <label for="slider-part" class="label-right">
            <span class="material-icons slide-right">keyboard_arrow_right</span>
          </label>
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

</style>