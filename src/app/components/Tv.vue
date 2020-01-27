<template>
  <div>
    <simplebar class="tv" data-simplebar-auto-hide="true">
      <div
        class="grid"
        v-for="(tv, index) of tvSliceByCurrentTime"
        v-bind:key="tv.id"
        :class="{ last: index === tvSliceByCurrentTime.length - 1 }"
      >
        <div class="column tv_logo">
          <img :src="tv.logo" />
        </div>
        <div class="column bigger">
          <div class="tv_title strong">{{tv.title}}</div>
          <div
            class="program"
            v-for="(program, index) of tv.teleprogram"
            v-bind:key="program.id"
            :class="{ active: index === 0 }"
          >
            <span class="time">{{program.time}}</span>
            <span class="teleprogram">{{program.name}}</span>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>
 
 
<script>
import simplebar from "simplebar-vue";
import { mapGetters } from "vuex";

export default {
  name: "Tv",
  computed: mapGetters(["tvSliceByCurrentTime"]),
  components: {
    simplebar
  }
};
</script>
 
 
<style lang="scss" scoped>
.tv {
  height: 60vh;
  max-height: 696px;
  overflow-y: scroll;
  overflow-x: hidden;
  & .grid {
    background-color: $secondary;
    padding: 21px;
    margin-bottom: 21px;
    &.last{
      margin-bottom: 0;
    }
    .tv_title {
      margin-bottom: 16px;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    .tv_logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .program {
      margin-bottom: 12px;
      &.active {
        color: $primary;
      }
      .teleprogram {
        display: inline-block;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
    .time {
      display: inline-block;
      min-width: 65px;
    }
  }
}
</style>