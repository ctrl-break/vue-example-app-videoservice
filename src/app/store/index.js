import Vue from 'vue';
import Vuex from 'vuex';
import Movies from '../data/movies';

Vue.use(Vuex);

const movies = Movies;

export default new Vuex.Store({
    state: {
        movies,
        user: null
    },
    mutations: {
    },
    getters: {
        allMovies(state) {
          return state.movies;
        },
        movieById(state, id) {
            return state.movies.find(item => item.id === id);
        }
      }
})
  