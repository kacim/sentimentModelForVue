import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;
/*Vue.prototype.COMMON = global;
Vue.prototype.$tool = tool;*/

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {

    // const role = localStorage.getItem('ms_username');
    // if (!role && to.path !== '/login') {
    //     next('/login');
    // } else {
    //     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    //     //    next();
    //      next('/login');
    // }
    // console.info(to)
    //跳转时的路由判断都在这些处理
     next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')