import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store/index'
import axios from 'axios'

Vue.use(VueRouter);

const requireAuth = () => (from, to, next) => {
    const accessToken = store.state.accessToken
    if (accessToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return next()
    } else {
        next('/login')
    }
};

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/todo",
        component: () =>
            import ("@/views/TodoView.vue"),
        beforeEnter: requireAuth()
    },
    {
        path: "/userinfo",
        component: () =>
            import ("@/views/UserInfo.vue"),

    },
    {
        path: "/login",
        component: () =>
            import ("@/views/Login.vue"),
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),

    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;