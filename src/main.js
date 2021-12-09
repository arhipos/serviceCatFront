import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/fontawesome/css/all.css"
createApp(App).use(store).use(router).mount('#app')
