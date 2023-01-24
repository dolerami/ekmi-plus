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
  }
}
</script>
