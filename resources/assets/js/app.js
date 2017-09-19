import router from './router';
import store from './vuex';
import moment from 'moment';
import localforage from 'localforage';

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'catullus'
});

require('./bootstrap');

window.Vue = require('vue');

Vue.component('app', require('./components/App.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));

store.dispatch('auth/setToken').then(() => {
    store.dispatch('auth/fetchUser').catch(() => {
        store.dispatch('auth/clearAuth');
        router.replace({ name: 'login' });
    });
}).catch(() => {
    store.dispatch('auth/clearAuth');
});

Vue.filter('dateForHumans', date => moment(date).calendar());

const app = new Vue({
    el: '#app',
    store,
    router
});
