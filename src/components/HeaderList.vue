<template>
  <header>
    <nav>
      <ul class="main-ul">
        <li class="main-li text">
          Каталог
            <ul class="branch-ul">
              <li class="branch-li"><router-link to="/sofas" class="branch-menu">Диваны</router-link></li>
              <li class="branch-li"><router-link to="/armchairs" class="branch-menu">Кресла</router-link></li>
              <li class="branch-li"><router-link to="/chairs" class="branch-menu">Стулья</router-link></li>
              <li class="branch-li"><router-link to="/beds" class="branch-menu">Кровати</router-link></li>
              <li class="branch-li"><router-link to="/mattresses" class="branch-menu">Матрацы</router-link></li>
              <li class="branch-li"><router-link to="/puffs" class="branch-menu">Пуфы</router-link></li>
              <li class="branch-li"><router-link to="/exclusive-furniture" class="branch-menu">Эксклюзивная мебель</router-link></li>
              <li class="branch-li"><router-link to="/2d-3d-models" class="branch-menu">2D-3D модели</router-link></li>
            </ul>
        </li>
        <li class="main-li text">Индивидуальная мебель</li>
        <li class="main-li text">Контакты</li>
        <li class="main-li logo"><router-link to="/"><img src="../assets/telegram-cloud-document-2-5233443011957888024 1.png"  class="img" alt="EKMI+ Logo"></router-link></li>
        <li class="main-li text"><router-link to="/about">О компании</router-link></li>
        <li class="main-li phone"><a href="tel:+38 (099)-638-45-37" class="tel">+38 (099)-638-45-37</a></li>
        <li class="main-li language" id="lang" @click="show">
          {{ currentLanguage }}
          <label for="lang">
            <span class="material-icons" :class="flip">keyboard_arrow_down</span>
          </label>
          <ul  class="lang-ul" v-if="visible===true">
            <li class="lang-li" @click="currentLanguage='RU'"><router-link to="/ru" class="lang-menu">RU</router-link></li>
            <li class="lang-li" @click="currentLanguage='UA'"><router-link to="/ua" class="lang-menu">UA</router-link></li>
            <li class="lang-li" @click="currentLanguage='EN'"><router-link to="/en" class="lang-menu">EN</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderList",
  data(){
    return{
      visible: false,
      flip: '',
      currentLanguage: 'RU'
    }
  },
  methods:{
    show(){
      this.visible=!this.visible
      if(this.visible===true){
        this.flip='flip'
      }else{
        this.flip=''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

nav{
  margin:0 auto;
  max-width: 81.23vw;
  padding:1.5vw 0;

  .main-ul{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    list-style-position: inside;
    margin:0 auto;
    padding:0;

    .main-li:hover{
      cursor:pointer;
    }

    .text{
      font-size:0.85vw;
    }

    a{
      text-decoration: none;
    }

    .text:nth-of-type(1){
      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      font-size:0.85vw;
      /* or 20px */

      text-transform: uppercase;

      color: #343434;

      position:relative;

      .branch-ul{
        list-style-type: none;
        list-style-position: inside;

        display:none;
        position: absolute;
        top: 95%;
        left: 0;

        width: 16.3vw;
        padding-left:0;

        background: #FFFFFF;
        box-shadow: 0 0 0.6vw 0.1vw rgba(0, 0, 0, 0.15);
        z-index: 3;

        .branch-li:hover{
            background: #FF9619;
          a{
            color: #FFFFFF;
          }
        }

        .branch-menu{
          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 1.1vw;
          line-height: 185.5%;
          margin-left:5%;
          /* or 32px */

          display: flex;
          align-items: center;

          color: #343434;
        }

        .branch-menu:hover{
           background: #FF9619;
           a{
             color: #FFFFFF;
           }
           cursor:pointer;
        }
      }
    }

    .text:nth-of-type(1):hover{
       .branch-ul{
         display:block;
       }
     }

    .text:nth-of-type(2){
      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      /* or 20px */

      text-transform: uppercase;

      color: #343434;
    }

    .text:nth-of-type(3){
      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      /* or 20px */

      text-transform: uppercase;

      color: #343434;
    }

    .logo{
      a{
        img{
          width: 14.1vw;
        }
      }
    }

    .text:nth-of-type(5){
      a{
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        /* or 20px */

        text-transform: uppercase;

        color: #343434;
      }
    }

    .phone{
      line-height: 150%;

      .tel{
        font-family: 'Open Sans',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 0.85vw;

        /* or 20px */

        text-transform: uppercase;

        color: #343434;
      }
    }

    .language{
      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 0.8vw;
      line-height: 150%;
      /* or 20px */

      color: rgba(52, 52, 52, 0.7);
      position:relative;

      span{
        color: rgba(52, 52, 52, 0.8);
        font-size:1.57vw;
        position: absolute;
        top:-16%;
        left:75%;
        transition:all 0.3s ease;
      }

      label{
        margin:0;

        .flip{
          transform:rotateX(180deg);
        }
      }

      span:hover{
        cursor:pointer;
      }

      .lang-ul{
        list-style-type: none;
        list-style-position: inside;
        position:absolute;
        top:95%;

        width: 2.1vw;
        padding-left:0;

        background: #FFFFFF;
        box-shadow: 0 0.5vh 0.6vw 0.1vw rgba(0, 0, 0, 0.15);
        z-index:1;

        .lang-li{
          margin-left:18%;

          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 0.9vw;
          line-height: 150%;
          /* or 21px */

          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-around;

          color: rgba(52, 52, 52, 0.7);

          .lang-menu{
            font-size:0.9vw;
            color: rgba(52, 52, 52, 0.7);
          }
        }

        .lang-li:hover{
          .lang-menu{
            color: #FF9619;
          }
        }
      }
    }
  }
}
</style>