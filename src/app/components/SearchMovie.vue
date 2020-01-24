<template>
  <div class="search">
    <form @submit="searchMovie">
      <input type="text" v-model="currentSearch" placeholder="Поиск..." />
      <button class="btn inverse" type="submit">Найти</button>
    </form>
  </div>
</template>
 
 
<script>
import { mapMutations } from "vuex";

export default {
  name: "SearchMovie",
  data() {
      return {
          currentSearch: ''
      }
  },
  methods: {
    ...mapMutations(["filterMoviesByTitle"]),
    searchMovie(event) {
      event.preventDefault();
      this.filterMoviesByTitle(this.currentSearch);
      this.currentSearch = '';
    }
  }
};
</script>
 
 
<style lang="scss" scoped>
.search {
  margin-top: 5px;
  text-align: center;
  input {
    min-width: 320px;
  }
  button {
    &:hover {
      opacity: $opacity;
    }
  }
}
</style>