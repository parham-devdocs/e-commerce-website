import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Signin from '../views/SigninView.vue'
import Signup from '../views/signupView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/signin', component: Signin },
        { path: '/', component: Home },
        {path:'/signup', component:Signup}
    ]
});

export default router