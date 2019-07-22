<template>
    <div class="toast" v-if="isShow">
        <div class="toast-div">{{ text }}{{ppo}}</div>
        <el-button @click='sendMsgToParent'>默认按钮</el-button>
        <el-button @click='alert1'>测试按钮</el-button>
        <el-button @click="showTalion">测试按钮2</el-button>
        <el-button @click="testForYour(0)">看这</el-button>
        <el-button @click="testForYour(1)">看这2</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            duration: 1500,
            ids:789,
            ids2:890
        }
    },
    methods: {
        
        testForYour:function(data){
            if(data == 0){
                this.$emit('testGet', this.ids)
            }else{
                 this.$emit('testGet', this.ids2)
            }

            
        },

        sendMsgToParent: function() {
            this.$emit('listenTo', 'hi hello')
            this.isShow = false;
        },
        alert1: function() {
            this.$emit('alert1', 'hi alert')
        },
        showTalion: function() {
            this.$emit('ttt')
        }
    },
    props: {

        ppo: {

        },
        isShow: {
            default: true
        },
        text: {
            type: String,
            default: "我是默认值"
        },
        acacacac: {
            type: String,
            default: () => {
                return '默认值'
            }
        }
    },
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.toast-div {
    color: white;
}

.toast {
    color: black;
    margin-left: 300px;
    width: 500px;
    height: 200px;
    transform: translate(-50%, 0);
    margin-top: 10px;
    line-height: 14px;
    color: #FFFFFF;
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    z-index: 10;
    font-size: 14px;
}
</style>