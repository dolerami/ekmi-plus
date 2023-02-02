<template>
  <div class="home" v-if="screenSize > 375">
    <MainSlider />
    <SecondSlider />
  </div>
  <div class="home-mobile" v-else>
    <MainSliderMobile />
    <SecondSliderMobile />
    <AboutMobile />
  </div>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import SecondSlider from "@/components/SecondSlider";
import MainSliderMobile from "@/components/MainSliderMobile";
import SecondSliderMobile from "@/components/SecondSliderMobile";
import AboutMobile from "@/components/AboutMobile";

export default {
  name: 'HomeView',
  components: {
    AboutMobile,
    SecondSliderMobile,
    MainSliderMobile,
    SecondSlider,
    MainSlider
  },
  props: {
    screenSize: {
      type: Number,
      default: 0
    }
  }
}
</script>
