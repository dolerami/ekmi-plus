<template>
  <div class="v-carousel-item">
    <img :src="require('../../public/assets/img/' + item_data.img)" :alt="item_data.name" v-if="imageSlide">
    <div class="item_content" v-else>
      <p>{{item_data.name}}</p>
      <p>{{item_data.id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-carousel-item",
  props:{
    item_data:{
      type: Object,
      default: () => {}
    },
    imageSlide:{
      type: Boolean,
      default: true
    }
  },
  data(){
    return{

    }
  },
  computed:{

  }
}
</script>

<style lang="scss" scoped>

</style>