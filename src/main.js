import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import './axios'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/id', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/signup', name: 'Sign Up', component: SignUp },
    ]
})

createApp(App)
.use(router)
.mount('#app')
