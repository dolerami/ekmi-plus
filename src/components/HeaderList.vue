<template>
  <header>
    <ul class="main-ul">
      <li class="main-li dropdown">
        <a href="#" class="main-menu text">
          Каталог
            <ul class="branch-ul">
              <li><a href="#" class="branch-menu text">Диваны</a></li>
              <li><a href="#" class="branch-menu text">Кресла</a></li>
              <li><a href="#" class="branch-menu text">Стулья</a></li>
              <li><a href="#" class="branch-menu text">Кровати</a></li>
              <li><a href="#" class="branch-menu text">Матрацы</a></li>
              <li><a href="#" class="branch-menu text">Пуфы</a></li>
              <li><a href="#" class="branch-menu text">Эксклюзивная мебель</a></li>
              <li><a href="#" class="branch-menu text">2D-3D модели</a></li>
            </ul>
        </a>
      </li>
      <li class="main-li dropdown"><a href="#" class="main-menu text">Индивидуальная мебель</a></li>
      <li class="main-li dropdown"><a href="#" class="main-menu text">Контакты</a></li>
      <li class="main-li logo"><img src="../assets/telegram-cloud-document-2-5233443011957888024 1.png"  class="main-menu img" alt="EKMI+ Logo"></li>
      <li class="main-li dropdown"><a href="#" class="main-menu text">О компании</a></li>
      <li class="main-li phone"><a href="tel:+38 (099)-638-45-37" class="main-menu tel">+38 (099)-638-45-37</a></li>
      <li class="main-li languages">
        <a href="#" id="sel-lang" class="main-menu language">
          RU
          <ul  class="lang-ul">
            <li class="lang-li"><a href="#">RU</a></li>
            <li class="lang-li"><a href="#">UA</a></li>
            <li class="lang-li"><a href="#">EN</a></li>
          </ul>
        </a>
        <label for="sel-lang"><span class="material-icons">keyboard_arrow_down</span></label>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderList"
}
</script>

<style lang="scss" scoped>

.main-ul{
  //position:relative;
  display:flex;
  flex-direction: row;
  max-width: 83.5%;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  list-style-position: inside;
}

.branch-ul{
  position:absolute;

  list-style-type: none;
  list-style-position: inside;
}

.lang-ul{
  position:absolute;

  list-style-type: none;
  list-style-position: inside;
}

a{
  text-decoration: none;
}

.main-li:nth-of-type(1){
  //position: absolute;
  left: 9.38%;
  right: 86.25%;
  top: 0.64%;
  bottom: 98.96%;
}

.main-li:nth-of-type(1)>.main-menu{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #343434;
}

.main-li:nth-of-type(2){
  //position: absolute;
  left: 18.06%;
  right: 68.68%;
  top: 0.64%;
  bottom: 98.96%;
}

.main-li:nth-of-type(2)>.main-menu{
  width:101%;
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #343434;
}

.main-li:nth-of-type(3){
  //position: absolute;
  left: 35.62%;
  right: 59.24%;
  top: 0.64%;
  bottom: 98.96%;
}

.main-li:nth-of-type(3)>.main-menu{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #343434;
}

.main-li:nth-of-type(4){
  //position: absolute;
  left: 45%;
  top: -25px;
}

.main-li:nth-of-type(4)>.main-menu{
  width: 216px;
  height: 66px;
}

.main-li:nth-of-type(5){
  //position: absolute;
  left: 64.31%;
  right: 29.03%;
  top: 0.64%;
  bottom: 98.96%;
}

.main-li:nth-of-type(5)>.main-menu{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #343434;
}

.main-li:nth-of-type(6){
  //position: absolute;
  left: 75.28%;
  right: 16.32%;
  top: 0.64%;
  bottom: 98.96%;
}

.main-li:nth-of-type(6)>.main-menu{
  width:103%;
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #343434;
}

.main-li:nth-of-type(7){
  //position: absolute;
  left: 87.92%;
  right: 10.69%;
  top: 0.76%;
  bottom: 99.08%;
}

.main-li:nth-of-type(7)>.main-menu{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: flex-start;

  color: rgba(52, 52, 52, 0.7);
}

span{
  position: absolute;
  width: 12.39px;
  height: 7.52px;
  left: 14.29px;
  top: -3px;

  color: rgba(52, 52, 52, 0.8);
}

.lang-ul{
  display:none;
}

.branch-ul{
  display:none;
}

.main-li:nth-of-type(1)>.main-menu:hover{
  .branch-ul{
    display:block;
  }
}

.branch-ul{
  position: absolute;
  width: 250px;
  height: 250px;
  left: 0;
  top: 100%;
  padding-left:0;

  background: #FFFFFF;
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.15);
}

.branch-menu{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 185.5%;
  margin-left:5%;
  /* or 32px */

  display: flex;
  align-items: center;

  color: #343434;
}

.branch-ul li:nth-of-type(1).branch-menu{
  position: absolute;
  width: 63px;
  height: 18px;
  left: 146px;
  top: 81px;
}

.branch-ul li:nth-of-type(2).branch-menu{
  position: absolute;
  width: 63px;
  height: 18px;
  left: 146px;
  top: 120px;
}

.branch-ul li:nth-of-type(3).branch-menu{
  position: absolute;
  width: 60px;
  height: 18px;
  left: 146px;
  top: 159px;
}

.branch-ul li:nth-of-type(4).branch-menu{
  position: absolute;
  width: 71px;
  height: 18px;
  left: 146px;
  top: 198px;
}

.branch-ul li:nth-of-type(5).branch-menu{
  position: absolute;
  width: 76px;
  height: 18px;
  left: 146px;
  top: 237px;
}

.branch-ul li:nth-of-type(6).branch-menu{
  position: absolute;
  width: 48px;
  height: 18px;
  left: 146px;
  top: 276px;
}

.branch-ul li:nth-of-type(7).branch-menu{
  position: absolute;
  width: 187px;
  height: 18px;
  left: 146px;
  top: 315px;
}

.branch-ul li:nth-of-type(8).branch-menu{
  position: absolute;
  width: 121px;
  height: 18px;
  left: 146px;
  top: 354px;
}

.branch-ul li:hover{
  background: #FF9619;
  a{
    color: #FFFFFF;
  }
}

.main-li:nth-of-type(1)>.main-menu{
  position:relative;
}

span:hover{
  cursor:pointer;
}

.lang-ul{
  position: absolute;
  width: 32px;
  height: 75px;
  left:5%;
  top:18px;
  padding-left:0;

  background: #FFFFFF;
  box-shadow: 0 4px 9px 2px rgba(0, 0, 0, 0.15);
}

.lang-li a{
  position: absolute;
  width: 20px;
  height: 25px;
  margin-left:18%;

  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */

  display: flex;
  align-items: center;

  color: rgba(52, 52, 52, 0.7);
}

.lang-li:nth-of-type(2) a{
  top:33%;
}

.lang-li:nth-of-type(3) a{
  top:66%;
}

.lang-li:hover{
  a{
    color: #FF9619;
  }
}

</style>