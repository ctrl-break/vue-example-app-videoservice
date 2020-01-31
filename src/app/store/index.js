import Vue from "vue";
import Vuex from "vuex";
import { mergeComments } from './helpers';
import Movies from "../data/movies";
import Genres from "../data/genres";
import Tv from "../data/tv";

Vue.use(Vuex);


const externalComments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : null;
const movies = externalComments ? mergeComments(Movies, externalComments) : Movies;
const genres = Genres;
const tv = Tv.map(item => {
  item.teleprogram = item.teleprogram.sort((a, b) =>
    a.time > b.time ? 1 : -1
  );
  return item;
});

export default new Vuex.Store({
  state: {
    movies,
    filteredMovies: movies,
    genres,
    currentGenre: "Новинки",
    tv,
    user: localStorage.getItem("user"),
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
      state.filteredMovies = state.movies.filter(
        movie => movie.genre === genre
      );
    },
    filterMoviesByTitle(state, title) {
      state.filteredMovies = state.movies.filter(
        movie => movie.title.indexOf(title) >= 0
      );
      state.currentGenre = `Поиск: "${title}"`;
    },
    setUser(state, userName) {
      state.user = userName;
      localStorage.setItem("user", userName);
    },
    userLogout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    resetFilter(state) {
      state.filteredMovies = state.movies;
      state.currentGenre = "Новинки";
    },
    saveNewComment(state, comment) {
      const movieId = state.movies.findIndex(item => item.id === comment.movieId);
      if (movieId >=0) {
          state.movies[movieId].comments.unshift(comment);
      }
    },
    deleteOwnComment(state, comment) {
      const movieId = state.movies.findIndex(item => item.id === comment.movieId);
      if (movieId >=0) {
          const commentIndex = state.movies[movieId].comments.findIndex(item => item.id === comment.id);
          state.movies[movieId].comments.splice(commentIndex, 1);
      }
    }
  },
  getters: {
    allMovies(state) {
      return state.movies;
    },
    filteredMovies(state) {
      return state.filteredMovies;
    },
    movieById: state => id =>  {
      return state.movies.filter(item => +item.id === +id)[0]; //ie11
    },
    modalState(state) {
      return state.showModal;
    },
    genres(state) {
      return state.genres.map(item => {
        item.iconPath = `/assets/img/icons/${item.icon}.svg`;
        return item;
      });
    },
    currentGenre(state) {
      return state.currentGenre;
    },
    tv(state) {
      return state.tv;
    },
    tvSliceByCurrentTime(state) {
      const currentTime = new Date().getHours();
      return state.tv.map(item => {
        item.teleprogram = item.teleprogram
          .filter(tvprog => tvprog.time.substr(0, 2) >= currentTime)
          .slice(0, 3);
        return item;
      });
    },
    user(state) {
      return state.user;
    }
  }
});
