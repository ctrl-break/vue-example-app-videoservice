<template>
  <div class="movie" v-if="movie">
    <div class="grid">
      <div class="column">
        <div class="poster">
          <router-link to="/" class="backlink">&lt;</router-link>
          <img :src="movie.picture" />
        </div>
      </div>
      <div class="column">
        <div class="info">
          <span class="label">Название:</span>
          <span class="text">
            <strong>{{movie.title}}</strong>
          </span>
        </div>
        <div class="info">
          <span class="label">Страна:</span>
          <span class="text">{{movie.country}}</span>
        </div>
        <div class="info">
          <span class="label">Жанр:</span>
          <span class="text">{{movie.genre}}</span>
        </div>
        <div class="info">{{movie.description}}</div>
      </div>
    </div>

    <Comments v-bind:comments="movie.comments" v-bind:movieId="movie.id"/>
  </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";
import Comments from "./Comments.vue";

export default {
  name: "Movie",
  props: ["id"],
  computed: mapGetters(["movieById"]),
  data() {
    return {
      movie: null
    };
  },
  mounted() {
    this.movie = this.movieById(this.id);
  },
  components: {
    Comments
  }
};
</script>
 
 
<style lang="scss" scoped>
.movie {
  & > .grid {
    margin-bottom: 40px;
  }
  .poster {
    position: relative;
    img {
      margin: 0 auto;
      border-radius: 5px;
    }
    .backlink {
      position: absolute;
      top: 10px;
      left: 5px;
      color: $primary;
      font-size: $font-size-big;
    }
  }

  .info {
    margin-bottom: 16px;
    span {
      display: inline-block;
    }
    .label {
      min-width: 150px;
    }
    .text {
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>