<template>
    <div class='outSize' style="height: 100%;max-width: 700px;">
        <div class='head'>
            <div class='title'>这里是标题</div>
            <div class='btn'>
                <div></div>
            </div>
        </div>
        <el-carousel class='swiper'>
            <el-carousel-item v-for="item in 4" :key="item">
                <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563962930986&di=a089963d8a6b011ee7e83690b7681203&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130801%2F11604791_100539834000_2.jpg'>
                <div class='item'>{{ item }}</div>
            </el-carousel-item>
        </el-carousel>
        <div class='info'>
            我是分割线
        </div>
        <div class='contentModel'>
            <div class='content'>
                <div class='item' v-for="(item,num) in dataList">
                     <img :src='item.src'>
                     <div class='setContent'>{{item.content}}</div>
                     <div class='contentName'>
                        {{item.status}}
                     </div>
                     <div class='userName'>用户名</div>
                </div>
            </div>
        </div>   
        <div class='footer'>
            <div class='item left'>
                <img src='../../assets/img/icon1.png'>
                <div>左</div>
            </div>
            <div class='item right'>
                <img src='../../assets/img/icon2.png'>
                <div>右</div>
            </div>
            <div class='mid'>按</div>
        </div> 
    </div>
</template>
<script>
import rem from '../../assets/js/rem.js'
import dataJson from '../../assets/mobile.json'

rem();
window.onresize = function() {
    rem();
}

export default {
    data() {
        return {
            dataList:''
        }
    },
    components: {

    },
    created() {

       let array = dataJson.list[0].data;
       array.forEach((val,index,arr1)=>{
           let info = val.content
           if(info.length > 26)
            array[index].content = info.substring(0, 26) + '...'
       })
       this.dataList = array;
    },
    methods: {


    }
}
</script>
<style lang="scss">
@import'../../assets/css/mobile.scss';
</style>