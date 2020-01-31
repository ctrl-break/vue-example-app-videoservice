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
      currentSearch: ""
    };
  },
  methods: {
    ...mapMutations(["filterMoviesByTitle"]),
    searchMovie(event) {
      event.preventDefault();
      if (!this.currentSearch) {
        return;
      }
      this.filterMoviesByTitle(this.currentSearch);
      this.currentSearch = "";
      this.$router.push("/");
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

@media screen and (max-width: $width-desktop-sm) {
  .search {
    input {
      min-width: 320px;
    }
  }
}

@media screen and (max-width: $width-tablet) {
  .search {
    input {
      min-width: 100%;
    }
    button{
      margin-top: 20px;
    }
  }
}
</style>