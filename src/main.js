import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './main.css'
import App from './App.vue'
import Home from './views/Home.vue'
import router from './router'


createApp(App).use(router).mount('#app')
