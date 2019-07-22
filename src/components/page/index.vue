<template>
    <div style="height: 100%;overflow: auto">
        <v-head></v-head>
        <div class='search'>
            <div class='tag'>
                <div class='item check'>模糊搜索</div>
                <div class='item'>精确搜索</div>
            </div>
            <div class='inputdiv'>
                <img src='../../assets/img/icon_search.png'>
                <input placeholder='请输入关键词,如: 上海大众on、奥迪Q5'>
                <div class='searchBtn'>搜索</div>
            </div>
            <a>热门搜索 : 奔驰新车上市</a>
        </div>
        <div class="title">I Seer每日实时全网舆情总数</div>
        <div class="js-odoo"></div>
        <div class='data-container'>
            <b></b>
            <b></b>
            <b></b>
            <b></b>
            <div class="showItem">
                <div class='iconItem item1'>
                    <img src='../../assets/img/info1.png'>
                </div>
                <div class='itemInfo'>
                    正面舆情<br><span>139,840,234</span>
                </div>
            </div>
            <div class="showItem">
                <div class='iconItem item2'>
                    <img src='../../assets/img//info2.png'>
                </div>
                <div class='itemInfo'>
                    中性舆情<br><span>239,840,234</span>
                </div>
            </div>
            <div class="showItem">
                <div class='iconItem item3'>
                    <img src='../../assets/img/info3.png'>
                </div>
                <div class='itemInfo'>
                    负面舆情<br><span>9,840,234</span>
                </div>
            </div>
            <div class="showItem">
                <div class='iconItem item4'>
                    <img src='../../assets/img/info4.png'>
                </div>
                <div class='itemInfo'>
                    负面扩散度<br><span>33,367</span>
                </div>
            </div>
        </div>
        <h2 class='h2'>24小时舆情热点扩散排名</h2>
        <div class='infoContent'>
            <div class='infoShow' v-for="(item,num) in dataList">
                <b></b>
                <b></b>
                <div class='infoHead'>
                    <img :src='getUrl(num + 1)'>
                    <div>{{item.title}}</div>
                    <div>扩散度</div>
                </div>
                <ul>
                    <li v-for="(second,index) in item.data">
                        <div class='index'>{{index + 1}}</div>
                        <div class='content'>{{second.content}}</div>
                        <div class='num'>{{second.num}}
                            <i class='up' v-if='second.status == 0'></i>
                            <i class='down' v-if='second.status == 1'></i>
                            <div class='equa' v-if='second.status == 2'>=</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import vHead from '../common/head'
import { numberAnimate } from '../../assets/libs/animation/numberAnimate.js'
import http from '../common/http'
import dataJson from '../../assets/vuetableTest.json'

$(function() {

    let num = 62353434;
    var Run = $(".js-odoo").numberAnimate({
        num: num,
        speed: 2000,
        symbol: ","
    });

    setInterval(function() {
        num += Math.round(Math.random() * 10000);
        Run.resetData(num);
    }, 3800);

})

export default {
    data() {
        return {
            dataList: dataJson.list
        }
    },
    components: {
        vHead
    },
    created() {

        console.info(this.dataList.list);


        //  this.getList();


    },
    methods: {

        getUrl(num) {
            return require("../../assets/img/" + `icon${num}` + ".png");
        },
        async getList() {
            let b = {
                token: 'X7jReTreG+rRunVBnDGbVZpSOg6V7mvMu75Zn4fUsC9lmYAVTwUxJGJTeExOag5+'
            }
            let a = await http.post('user/getone', { b })
            console.info('测试呀')
            console.info(a)
        }
    }
}
</script>
<style lang="scss">
@import'../../assets/libs/animation/numberAnimate.css';
@import'../../assets/css/index.scss';
</style>