import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/global.css'
createApp(App).use(router).mount('#app')