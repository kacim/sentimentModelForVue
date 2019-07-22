<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :data="data" type="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :data="data" type="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col>
                <el-card shadow="hover">
                    <schart ref="lineOl" class="schart" canvasId="lineOl" :data="datal" type="line" :options="options3"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Schart from 'vue-schart';
import http from '../../common/http';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            todoList: [{
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: false,
                }, {
                    title: '今天要修复100个bug',
                    status: false,
                },
                {
                    title: '今天要修复100个bug',
                    status: true,
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: true,
                }
            ],
            datal: [],
            data: [{
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            options: {
                title: '最近七天每天的用户访问量',
                showValue: false,
                fillColor: 'rgb(45, 140, 240)',
                bottomPadding: 30,
                topPadding: 30
            },
            options2: {
                title: '最近七天用户访问趋势',
                fillColor: '#FC6FA1',
                axisColor: '#008ACD',
                contentColor: '#EEEEEE',
                bgColor: '#F5F8FD',
                bottomPadding: 30,
                topPadding: 30
            },
            options3: {
                title: '线上数据访问趋势',
                fillColor: '#FC6FA1',
                axisColor: '#008ACD',
                contentColor: '#EEEEEE',
                bottomPadding: 30,
                topPadding: 30
            }
        }
    },
    components: {
        Schart
    },
    computed: {

    },
    created() {
        this.handleListener();
        this.changeDate();
        this.getList();
    },
    activated() {
        this.handleListener();
    },
    deactivated() {
        window.removeEventListener('resize', this.renderChart);
    },
    methods: {

        async getList() {
            let b = {
                begintime: "201810",
                endtime: "201905",
                timeType: 1,
                token: "X7jReTreG+rRunVBnDGbVUD4fA7/1qC7CH82MrWxXdLv6UqzkxvFXxmHwJ5yNtly"
            }
            let a = await http.post('salesmarket/all_trend', b)
            let list = new Array();
            let array = a.data.data.data;
            array.forEach((item, k) => {
            list.push({name:item.name,value:item.sales})
            })
            this.datal = list
        },
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
            })
        },
        handleListener() {
            window.addEventListener('resize', this.renderChart)
        },
        handleBus(msg) {
            setTimeout(() => {
                this.renderChart()
            }, 300);
        },
        renderChart() {
            this.$refs.bar.renderChart();
            this.$refs.line.renderChart();
        }
    }
}
</script>
<style>
.el-row {
    margin-top: 20px;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>