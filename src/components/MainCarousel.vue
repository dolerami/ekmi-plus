<template>
  <div class="main-carousel">
    <img :src="require('../../public/assets/img/' + item_data.img)" :alt="item_data.name">
  </div>
</template>

<script>
export default {
  name: "MainCarousel",
  props:{
    item_data:{
      type: Object,
      default: () => {}
    },
    imageSlide:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>