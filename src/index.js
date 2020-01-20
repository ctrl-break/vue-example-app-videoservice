import './assets/styles/reset.scss';
import './assets/styles/app.scss';
import 'es6-promise/auto';
 
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './app/routes';
import store from './app/store';
import App from './app/App.vue';
 
Vue.use(VueRouter);
 
// just for loader
setTimeout( () => {
    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app');
}, 1000);