import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/helloword',
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
    }
];

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})