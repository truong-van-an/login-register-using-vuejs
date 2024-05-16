import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import AOS from 'aos';
import store from './state/store';
import Toast from 'vue-toastification'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@/assets/scss/app.scss'
import 'aos/dist/aos.css';
import "vue-toastification/dist/index.css";

const vuetify = createVuetify({
    components,
    directives,
  })
createApp(App)
    .use(AOS.init())
    .use(store)
    .use(Toast)
    .use(router)
    .use(vuetify)
    .mount('#app')
