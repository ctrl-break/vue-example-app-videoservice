<template>
  <div class="movies">
    <div class="title">
      <!-- Из макета  не удалось вырезать иконку, она объединена с текстом -->
      <img src="/assets/img/icons/flame.svg" alt="shame">
    </div>
    <Slider v-bind:movies="allMovies" />
  </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";
import Slider from "./Slider.vue";

export default {
  name: "Movies",
  computed: mapGetters(["allMovies"]),
  components: {
    Slider
  }
};
</script>
 
 
<style lang="scss" scoped>
.title {
  font-size: $font-size-big;
  padding-bottom: 20px;
}
</style>