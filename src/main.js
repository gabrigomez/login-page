import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
    ]
})

createApp(App)
.use(router)
.mount('#app')
