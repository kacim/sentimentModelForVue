<template>
    <div class="head">
        <div class='headIcon'>
            <!-- <img src='../../assets/img/icon.png'> -->
            <div>I SEER</div>
        </div>
        <div class='leftHead'>
            <div class='leftItem'>首页</div>
            <div class='leftItem needDown' @click='tochange'>舆情监测</div>
            <div class='leftItem'>舆情搜索</div>
            <div class='leftItem needDown' @click='change'>舆情报告</div>
            <div class='leftItem needDown' @click='toparent'>定向监测</div>
        </div>
        <div class='rightHead'>
            <img src='../../assets/img/help.png'>
            <img src='../../assets/img/phone.png'>
            <div class='getInfo'>
                <router-link to="login">点登录 | 注册</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {

        tochange(){
            this.$router.push({ path:'/flex'})
        },

        toparent(){
            this.$router.push({ path:'/parent'})
        },

        change() {
            this.$router.push({ //核心语句
                path: '/home', //跳转的路径
                query: { //路由传参时push和query搭配使用 ，作用时传递参数
                    id: this.id,
                }
            })
        }
    }
}
</script>
<style lang="scss">
@import'../../assets/css/head.scss';
</style>