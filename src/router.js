import Vue from "vue";
import Router from "vue-router";

import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Dashboard from "./components/Dashboard.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signUp",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});
