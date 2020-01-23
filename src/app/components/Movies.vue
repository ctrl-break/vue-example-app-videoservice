<template>
  <div class="movies">
    <div class="title">{{currentGenre}}</div>
    <Slider v-bind:movies="filteredMovies" />
    <Genre />
  </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";
import Slider from "./Slider.vue";
import Genre from "./Genre.vue";

export default {
  name: "Movies",
  computed: mapGetters(["filteredMovies", "currentGenre"]),
  components: {
    Slider,
    Genre
  }
};
</script>
