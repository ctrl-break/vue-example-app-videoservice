import Vue from 'vue';
import Vuex from 'vuex';
import Movies from '../data/movies';
import Genres from '../data/genres';

Vue.use(Vuex);

const movies = Movies;
const genres = Genres;

export default new Vuex.Store({
    state: {
        movies,
        filteredMovies: movies,
        genres,
        currentGenre: 'Новинки',
        user: null,
        showModal: false
    },
    mutations: {
      toggleModal(state) {
        state.showModal = !state.showModal;
      },
      closeModal(state) {
        state.showModal = false;
      },
      filterMoviesByGenre(state, genre) {
        state.currentGenre = genre;
        state.filteredMovies = state.movies.filter(movie => movie.genre === genre);
        console.log(genre, state.filteredMovies);
      },
    },
    getters: {
        allMovies(state) {
          return state.movies;
        },
        filteredMovies(state) {
          return state.filteredMovies;
        },
        movieById(state, id) {
            return state.movies.find(item => item.id === id);
        },
        modalState(state) {
          return state.showModal;
        },
        genres(state) {
          return state.genres.map(item => {
            item.iconPath = `/assets/img/icons/${item.icon}.svg`
            return item;
          });
        },
        currentGenre(state) {
          return state.currentGenre;
        } 
      }
})
  