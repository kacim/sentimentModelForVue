<template>
        <v-tool :text='testWord' :ppo='testppo' :isShow='show' v-on:listenTo='showMsg' @alert1='showAlert' @ttt="open" @testGet='getDate'></v-tool>
</template>
<script>
import vTool from '../../common/Tools'

export default {
    data() {
        return {
            testppo: '传值模型',
            testWord: '父子组件',
            show: true,
        }
    },
    components: {
        vTool
    },
    created() {

    },
    methods: {
         getDate(date) {
            alert(date)
        },
         open: function() {
            alert('open')
        },
        showMsg: function(data) {
            console.log(data)
        },
        showAlert: function(e) {

            alert('fu'+e)
        },

    }
}
</script>
<style lang="scss">
</style>