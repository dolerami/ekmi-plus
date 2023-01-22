<template>
  <header>
    <nav>
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
            <label for="sel-lang">
              <span class="material-icons">keyboard_arrow_down</span>
            </label>
            <ul  class="lang-ul">
              <li class="lang-li"><a href="#">RU</a></li>
              <li class="lang-li"><a href="#">UA</a></li>
              <li class="lang-li"><a href="#">EN</a></li>
            </ul>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderList"
}
</script>

<style lang="scss" scoped>

nav{
  margin:0 auto;
  max-width: 83.5%;
  padding:25px 0;
}

.main-ul{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  list-style-position: inside;
  margin:0 auto;
}

.branch-ul{
  list-style-type: none;
  list-style-position: inside;
}

.lang-ul{
  list-style-type: none;
  list-style-position: inside;
  position:absolute;
  top:70%;
  display:none;
}

a{
  text-decoration: none;
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

  position:relative;
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

.main-li:nth-of-type(4)>.main-menu{
  width: 216px;
  height: 66px;
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

.main-li:nth-of-type(7)>.main-menu{
  font-family: 'Raleway',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  /* or 20px */

  display: flex;
  align-items: center;

  color: rgba(52, 52, 52, 0.7);
}

span{
  color: rgba(52, 52, 52, 0.8);
}

.branch-ul{
  display:none;
  position: absolute;
  top: 23px;
  left: 0;
}

.main-li:nth-of-type(1)>.main-menu:hover{
  .branch-ul{
    display:block;
  }
}

.branch-ul{
  width: 250px;
  height: 250px;
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
  width: 63px;
  height: 18px;
}

.branch-ul li:nth-of-type(2).branch-menu{
  width: 63px;
  height: 18px;
}

.branch-ul li:nth-of-type(3).branch-menu{
  width: 60px;
  height: 18px;
}

.branch-ul li:nth-of-type(4).branch-menu{
  width: 71px;
  height: 18px;
}

.branch-ul li:nth-of-type(5).branch-menu{
  width: 76px;
  height: 18px;
}

.branch-ul li:nth-of-type(6).branch-menu{
  width: 48px;
  height: 18px;
}

.branch-ul li:nth-of-type(7).branch-menu{
  width: 187px;
  height: 18px;
}

.branch-ul li:nth-of-type(8).branch-menu{
  width: 121px;
  height: 18px;
}

.branch-ul li:hover{
  background: #FF9619;
  a{
    color: #FFFFFF;
  }
}

span:hover{
  cursor:pointer;
}

.lang-ul{
  width: 32px;
  height: 75px;
  padding-left:0;

  background: #FFFFFF;
  box-shadow: 0 4px 9px 2px rgba(0, 0, 0, 0.15);
}

.lang-li a{
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
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;

  color: rgba(52, 52, 52, 0.7);
}

.lang-li:hover{
  a{
    color: #FF9619;
  }
}

.language{
  position:relative;
}

label{
  margin:0;
}


</style>