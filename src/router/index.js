import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/store',
            component: resolve => require(['../components/page/store.vue'], resolve)
        },
        {
            path: '/index1',
            component: resolve => require(['../components/page/index1.vue'], resolve)
        },
        {
            path: '/mobile',
            component: resolve => require(['../components/page/mobile.vue'], resolve)
        },
        {
            path: '/index',
            meta: { title: '系统首页' },
            component: resolve => require(['../components/page/index.vue'], resolve),
            children: [{
                    path: '/index1',
                    component: resolve => require(['../components/page/index1.vue'], resolve),
                    meta: { title: '系统副页' }
                },
                {
                    path: '/index2',
                    component: resolve => require(['../components/page/index2.vue'], resolve),
                    meta: { title: '系统副页' }
                }
            ]
        },
         {
            path: '/home',
            redirect: '/vc'
        },
        {
            path: '/home',
            meta: { title: '系统首页' },
            component: resolve => require(['../components/page/chart/home.vue'], resolve),
            children: [{
                    path: '/vc',
                    component: resolve => require(['../components/page/chart/vc.vue'], resolve),
                    meta: { title: '图表页' }
                },
                {
                    path: '/flex',
                    component: resolve => require(['../components/page/chart/flex.vue'], resolve),
                    meta: { title: 'flex页' }
                },
                 {
                    path: '/parent',
                    component: resolve => require(['../components/page/chart/parent.vue'], resolve),
                    meta: { title: 'parent页' }
                }
            ]
        },
    ]
})