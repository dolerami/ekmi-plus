<template>
  <div id="app">
    <HeaderList />
    <router-view />
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList";

export default {
  name: "App.vue",
    components: {HeaderList}
}
</script>

<style lang="scss" scoped>

#app {
}
</style>
