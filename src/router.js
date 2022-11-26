import {createRouter, createWebHistory} from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Dashboard from './components/Dashboard.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/signup', name: 'Sign Up', component: SignUp },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    ]
})