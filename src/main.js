import { createApp } from 'vue'
import App from './App.vue'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import router from './router'
import store from './store/index'

createApp(App).use(router).use(store).mount('#app')
