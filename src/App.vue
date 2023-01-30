<template>
  <div id="app">
    <HeaderList v-if="screenSize > 375"/>
    <HeaderMobile v-else />
    <router-view />
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList";
import HeaderMobile from "@/components/HeaderMobile";

export default {
  name: "App.vue",
  components: {HeaderMobile, HeaderList},
  data(){
    return{
      screenSize: ''
    }
  },
  mounted(){
    this.screenSize = window.screen.width

    window.onresize = () => {
      this.screenSize=window.screen.width
    }
  }
}
</script>

<style lang="scss" scoped>

#app {
}
</style>
