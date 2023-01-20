<template>
  <div id="app">
    <HeaderList />
    <MainSlider />
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList";
import MainSlider from "@/components/MainSlider";

export default {
  name: "App.vue",
  components: {MainSlider, HeaderList}
}
</script>

<style lang="scss" scoped>

#app {
}
</style>
