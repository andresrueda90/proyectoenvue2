import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
    {
        path: '*',
        component: () => import('../components/404.vue'),
    },
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/helloword',
        name: 'hola-mundo',
        component: () => import('../components/HolaComponente.vue'),
    },
    {
        path: '/user',
        component: () => import('../components/User.vue'),
    },
    {
        path: '/list-post',
        component: () => import('../components/ListPosts.vue'),
    }
    ,
    {
        path: '/comments/:id',
        component: () => import('../components/Comments.vue'),
    },
    {
        path: '/superhero/:id',
        component: () => import('../components/ListSuperHero.vue'),
    },
    {
        path: '/superhero/',
        component: () => import('../components/ListSuperHero.vue'),
    }


];

export default new Router({
    mode: 'history',
	routes,
	strict: process.env.NODE_ENV !== 'production',

})