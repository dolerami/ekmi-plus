<template>
  <header>
    <nav>
      <ul class="header-ul">
        <li class="header-li logo">
          <router-link to="/">
            <img src="../../public/assets/img/telegram-cloud-document-2-5233443011957888024 3.svg"  class="img" alt="EKMI+ Logo">
          </router-link>
        </li>
        <li class="header-li language" id="lang" @click="showLang">
          {{ currentLanguage }}
          <label for="lang">
            <span class="material-icons" :class="flip">keyboard_arrow_down</span>
          </label>
          <ul  class="lang-ul" v-if="visibleLang===true">
            <li class="lang-li" @click="currentLanguage='RU'">
              <router-link to="/ru" class="lang-menu" :class="orange">RU</router-link>
            </li>
            <li class="lang-li" @click="currentLanguage='UA'">
              <router-link to="/ua" class="lang-menu" :class="orange">UA</router-link>
            </li>
            <li class="lang-li" @click="currentLanguage='EN'">
              <router-link to="/en" class="lang-menu" :class="orange">EN</router-link>
            </li>
          </ul>
        </li>
        <li class="header-li phone">
          <a href="tel:+38 (099)-638-45-37" class="tel">
            <span class="material-icons">call</span>
          </a>
        </li>
        <li class="header-li menu">
          <div class="menu-bar" @click="showMenu" v-if="visibleMenu===false">
            <span class="material-icons bar">menu</span>
          </div>
          <div class="menu-visible" v-if="visibleMenu===true">
            <span class="material-icons x" @click="showMenu">close</span>
            <ul class="main-ul">
              <li class="main-li">
                <span class="main-span" @click="showSubmenu">Каталог</span>
                  <ul class="branch-ul" v-if="visibleSubmenu===true">
                    <li class="branch-li">
                      <router-link to="/sofas" class="branch-menu">Диваны</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/armchairs" class="branch-menu">Кресла</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/chairs" class="branch-menu">Стулья</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/beds" class="branch-menu">Кровати</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/mattresses" class="branch-menu">Матрацы</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/puffs" class="branch-menu">Пуфы</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/exclusive-furniture" class="branch-menu">Эксклюзивная мебель</router-link>
                    </li>
                    <li class="branch-li">
                      <router-link to="/2d-3d-models" class="branch-menu">2D-3D модели</router-link>
                    </li>
                  </ul>
              </li>
              <li class="main-li">Индивидуальная мебель</li>
              <li class="main-li">2D-3D модели</li>
              <li class="main-li">Шоу-рум</li>
              <li class="main-li">Страница Партнеров Дизайнеров</li>
              <li class="main-li">Дилерам</li>
              <li class="main-li">Контакты</li>
              <li class="main-li">Каталог</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderMobile",
  data(){
    return{
      visibleLang: false,
      visibleMenu: false,
      visibleSubmenu: false,
      flip: '',
      currentLanguage: 'RU',
      orange: ''
    }
  },
  methods:{
    showLang(){
      this.visibleLang=!this.visibleLang
      if(this.visibleLang===true){
        this.flip='flip'
        this.orange='#FF9619'
      }else{
        this.flip=''
      }
    },
    showMenu(){
      this.visibleMenu=!this.visibleMenu
    },
    showSubmenu(){
      this.visibleSubmenu=!this.visibleSubmenu
    }
  }
}
</script>

<style lang="scss" scoped>
nav{
  margin:0 auto;
  max-width: 90.13vw;
  padding:4vw 0;

  ul{
    list-style-type:none;
    list-style-position: inside;

    li{
      text-decoration:none;
      color: #4B4844;
      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 400;

      a{
        text-decoration:none;
        color: #4B4844;
      }
    }
  }

  .header-ul{
    height:9.07vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin:0 auto;
    padding:0;

    .logo{
      width:24.53vw;
      flex-basis: 40vw;

      a{
        .img{
          width:24.53vw;
        }
      }
    }

    .language{
      font-family: 'Raleway',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 3.03vw;
      line-height: 150%;
      display:flex;
      /* or 20px */

      color: rgba(52, 52, 52, 0.7);
      position:relative;

      span{
        color: rgba(52, 52, 52, 0.8);
        font-size:4vw;
        position: absolute;
        top:3%;
        left:90%;
        transition:all 0.3s ease;
      }

      label{
        margin:0;

        .flip{
          transform:rotateX(180deg);
        }
      }

      .lang-ul{
        list-style-type: none;
        list-style-position: inside;
        position:absolute;
        top:95%;

        width: 5.8vw;
        padding-left:0;

        background: #FFFFFF;
        box-shadow: 0 0.5vh 0.6vw 0.1vw rgba(0, 0, 0, 0.15);
        z-index:1;

        .lang-li{
          margin-left:18%;

          font-family: 'Raleway',sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 3.73vw;
          line-height: 150%;
          /* or 21px */

          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-around;

          color: rgba(52, 52, 52, 0.7);

          &:active{
            .lang-menu{
              color:#FF9619;
            }
          }

          .lang-menu{
            font-size:2.65vw;
            color: rgba(52, 52, 52, 0.7);
          }
        }
      }
    }

    .phone{
      padding-left:4vw;

      .tel{
        display:flex;

        &:focus {
          span {
            -webkit-text-stroke: 1px #FF9619;
          }
        }
        span{
          font-size:6.13vw;
          -webkit-text-stroke: 1px rgb(0, 0, 0);
          color: rgb(255, 255, 255);
        }
      }
    }

    .menu{
      .menu-bar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        span{
          font-size:6.13vw;
        }
      }

      .menu-visible{
        display:flex;
        position:relative;

        span{
          z-index:4;
          font-size:6.13vw;
        }

        .main-ul{
          z-index: 3;
          width: 60.73vw;
          background: #FFFFFF;
          padding-left: 5.33vw;
          font-size: 4vw;
          line-height: 185.5%;
          position:absolute;
          right:-79%;
          transition:all 0.3s ease;

          .main-li{

            &:active{
              color:#FF9619;
            }

            .main-span{
              font-size: 4vw;
              line-height: 185.5%;
            }

            .branch-ul{
               z-index:3;
               padding-left:0;

               .branch-li{

                 &:active{
                   a{
                     color:#FF9619;
                   }
                 }
               }
            }
          }
        }
      }
    }
  }
}
</style>