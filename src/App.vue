<template>
  <div id="app">
    <HeaderList />
    <router-view />
<!--    <v-carousel-->
<!--      :carousel_data="sliderItems"-->
<!--      :interval="2000"-->
<!--    />-->
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList";

export default {
  name: "App.vue",
  components: {HeaderList},
}
</script>

<style lang="scss" scoped>

#app {
}
</style>
