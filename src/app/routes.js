import Tv from './components/Tv.vue';
import Movies from './components/Movies.vue';
import VueRouter from 'vue-router';


// 3. Create the router
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Movies },
    { path: '/tv', component: Tv },
  ]
});
