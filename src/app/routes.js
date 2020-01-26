import Tv from "./components/Tv.vue";
import Movies from "./components/Movies.vue";
import Movie from "./components/Movie.vue";
import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/tv", component: Tv },
    {
      path: "/:id",
      component: Movie,
      props: true
    },
    {
      path: "/",
      component: Movies
    }
  ]
});
