import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Dashboard from './components/Dashboard.vue'

import './axios'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/signup', name: 'Sign Up', component: SignUp },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    ]
})

createApp(App)
.use(router)
.mount('#app')
