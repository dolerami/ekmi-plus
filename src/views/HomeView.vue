<template>
  <div class="home">
    <MainSlider v-if="screenSize > 375"/>
    <MainSliderMobile v-else/>
    <SecondSlider v-if="screenSize > 375"/>
    <SecondSliderMobile />
  </div>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import SecondSlider from "@/components/SecondSlider";
import MainSliderMobile from "@/components/MainSliderMobile";
import SecondSliderMobile from "@/components/SecondSliderMobile";

export default {
  name: 'HomeView',
  components: {
    SecondSliderMobile,
    MainSliderMobile,
    SecondSlider,
    MainSlider
  },
  props: {
    screenSize: {
      type: Number
    }
  }
}
</script>
