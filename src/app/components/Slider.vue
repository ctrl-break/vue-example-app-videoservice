<template>
  <div class="slider_wrapper">
    <button class="prev" @click="scrollBack()">&laquo;</button>
    <ul class="slider" >
      <SliderItem v-for="movie of movies" v-bind:key="movie.id" v-bind:movie="movie" />
    </ul>
    <button class="next" @click="scrollForward()">&raquo;</button>
  </div>
</template>
 
 
<script>
import SliderItem from "./SliderItem.vue";

export default {
  props: ["movies"],
  components: {
    SliderItem
  },
  methods: {
      scrollForward() {
          console.log('scroll forward');
      },
      scrollBack() {
          console.log('scroll back');
      }
  }
};
</script>
 
 
<style lang="scss" scoped>
.slider_wrapper {
  max-width: 100%;
  overflow: hidden;
  position: relative;
  button {
    opacity: 0;
    position: absolute;
    z-index: 100;
    transition: $anim_speed;
    background-color: rgba($primary, $opacity - 0.4);
    color: $text-light;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    &.prev {
      left: 10px;
      top: 40%;
    }
    &.next {
      right: 10px;
      top: 40%;
    }
    &:hover{
        background-color: rgba($primary, 1);
    }
  }
  &:hover button {
    opacity: 1;
  }
  .slider {
    white-space: nowrap;

    li {
      display: inline-block;
      padding: 0 10px;
      min-width: 300px;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>