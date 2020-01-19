import './assets/styles/reset.scss';
import './assets/styles/app.scss';
import 'es6-promise/auto';
 
import Vue from 'vue';
import Vuex from 'vuex';
import App from './app/App.vue'
 
Vue.use(Vuex);
 
// just for loader
setTimeout( () => {
    new Vue({
        render: h => h(App),
    }).$mount('#app');
}, 200);