import './assets/styles/reset.scss';
import './assets/styles/app.scss';
import 'es6-promise/auto';
 
import Vue from 'vue';
import VueRouter from 'vue-router'
import router from './app/routes'
import Vuex from 'vuex';
import App from './app/App.vue'
 
Vue.use(VueRouter)
Vue.use(Vuex);
 
// just for loader
setTimeout( () => {
    new Vue({
        router,
        render: h => h(App),
    }).$mount('#app');
}, 200);