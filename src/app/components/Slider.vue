<template>
  <div class="slider_wrapper">
    <template v-if="movies.length">
      <button class="arrows left" @click="scrollLeft()">&laquo;</button>
      <ul class="slider scrollable" @wheel.prevent="mouseWheel($event)">
        <SliderItem v-for="movie of movies" v-bind:key="movie.id" v-bind:movie="movie" />
      </ul>
      <button class="arrows right" @click="scrollRight()">&raquo;</button>
    </template>
    <template v-else>
      <div class="title text-center">Ничего не найдено</div>
      <div class="text-center">
        <button class="btn inverse small" @click="resetFilter">сбросить</button>
      </div>
    </template>
  </div>
</template>
 
 
<script>
import { mapMutations } from "vuex";
import SliderItem from "./SliderItem.vue";

function sideScroll(element, direction, speed = 25, distance = 300, step = 50) {
  let scrollAmount = 0;
  const slideTimer = setInterval(function() {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

export default {
  props: ["movies"],
  components: {
    SliderItem
  },
  methods: {
    scrollRight() {
      const el = this.$el.querySelector(".scrollable");
      sideScroll(el, "right");
    },
    scrollLeft() {
      const el = this.$el.querySelector(".scrollable");
      sideScroll(el, "left");
    },
    mouseWheel(event) {
      const direction = event.deltaY ? event.deltaY : event.wheelDelta;
      const el = this.$el.querySelector(".scrollable");
      if (direction > 0) {
        sideScroll(el, "right");
      } else {
        sideScroll(el, "left");
      }
    },
    ...mapMutations(["resetFilter"])
  },
  mounted() {
    if (!this.movies.length) {
      return;
    }
    const el = this.$el.querySelector(".scrollable");
    el.onscroll = ev => {
      const rightPos = ev.target.scrollWidth - ev.target.offsetWidth;
      if (ev.target.scrollLeft > 0 && ev.target.scrollLeft < rightPos) {
        const left = this.$el.querySelector(".left");
        const right = this.$el.querySelector(".right");
        left.style.display = "block";
        right.style.display = "block";
        return;
      }
      if (
        ev.target.scrollLeft ===
        ev.target.scrollWidth - ev.target.offsetWidth
      ) {
        const right = this.$el.querySelector(".right");
        right.style.display = "none";
      }
      if (ev.target.scrollLeft === 0) {
        const left = this.$el.querySelector(".left");
        left.style.display = "none";
      }
    };
  }
};
</script>
 
 
<style lang="scss" scoped>
.slider_wrapper {
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
  .scrollable {
    max-width: 100%;
    overflow-x: scroll;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .slider {
    white-space: nowrap;

    li {
      display: inline-block;
      margin: 0 10px;
      min-width: 280px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  button.arrows {
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
    &.left {
      left: 10px;
      top: 40%;
      display: none;
    }
    &.right {
      right: 10px;
      top: 40%;
    }
    &:hover {
      background-color: rgba($primary, 1);
    }
  }
  &:hover button {
    opacity: 1;
  }
}
</style>