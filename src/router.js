import { createRouter, createWebHistory } from 'vue-router';

import MainLayouts from './layouts/MainLayouts.vue';

import Chat from './components/Chat.vue';

const routes = [
    {path: '/login', component: Login},

    {
        path: '/',
        component: MainLayouts,
        children: [
            {path: '/chat', component: Chat, props: true},
        ],
    },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;

// router.beforeEach((to, from, next) => {
// const token = localStorage.getItem('token');

//     if (!token && to.path !== '/login') {
//         next('/login');
//     } else {
//         if (token && to.path === '/login') {
//             next('/dashboard');
//         } else {
//             next();
//         }
//     }
// });

// router.beforeEach((to, from, next) => {
//     if (to.matched.length === 0) {
//       next('/404');
//     } else {
//       next();
//     }
// });
