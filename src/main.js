import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import { store } from './store.js';
 
const app = createApp(App);
app.use(router);
app.use(Vuex);
app.use(store);
app.mount('#app');
