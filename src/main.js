import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n/i18n';
import './registerServiceWorker';

const app = createApp(App);
app.config.productionTip = process.env.NODE_ENV !== 'production';
app.use(router);
app.use(i18n);
app.use(store);

app.mount('#app');