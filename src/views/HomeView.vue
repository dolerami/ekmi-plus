<template>
  <div class="home">
    <MainSlider />
    <SecondSlider />
  </div>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import SecondSlider from "@/components/SecondSlider";

export default {
  name: 'HomeView',
  components: {
    SecondSlider,
    MainSlider
  },
  data(){
    return{
      mainItems:[
        { id:1, name:'img1', img:'10000_Post01.png' },
        { id:2, name:'img2', img:'Леон2.png' },
        { id:3, name:'img3', img:'Ампир2.png' },
      ]
    }
  }
}
</script>
