<template>
  <div>
    <div class="title">
      Жанры
      <span
        v-if="currentGenre !== 'Новинки'"
        @click="resetFilter"
        title="Сбросить фильтр"
      >&times;</span>
    </div>
    <div class="genres">
      <div
        class="genre grad"
        v-for="genre of genres"
        v-bind:key="genre.icon"
        :class="genre.gradientClass"
        @click="filterMoviesByGenre(genre.genre)"
      >
        <div class="icon">
          <img :src="genre.iconPath" />
          <div class="genre_name">{{genre.genre}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Genre",
  computed: mapGetters(["genres", "currentGenre"]),
  methods: {
    ...mapMutations(["filterMoviesByGenre", "resetFilter"])
  }
};
</script>
 
 
<style lang="scss" scoped>
.grad {
  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
}

.title span {
  font-size: $font-size-small;
  cursor: pointer;
  color: $primary;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  .genre {
    cursor: pointer;
    color: $text-light;
    opacity: 0.8;
    min-width: 280px;
    height: 208px;
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    &:hover {
      opacity: 1;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    .icon {
      img {
        margin: 30px auto 32px;
      }
      .genre_name {
        font-size: $font-size-big;
        padding-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: $width-desktop) {
  .genres {
    .genre {
      flex: 1 0 45%;
      margin: 0 0 20px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &:nth-child(2n-1){
        margin-right: 10px;
      }
    }
  }
}

@media screen and (max-width: $width-tablet) {
  .genres {
    .genre {
      &:nth-child(2n-1){
        margin-right: 0;
      }
    }
  }
}
</style>