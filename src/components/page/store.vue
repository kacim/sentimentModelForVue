<template>
    <div class="hello">
        <p>click {{getcount}}{{countp}} times,count is {{evenOrOdd}},test num is {{testWord}}</p>
        <el-row>
            <el-button @click="increment">+</el-button>
            <el-button @click="decrement">-</el-button>
            <el-button @click="doadd">++</el-button>
            <el-button @click="fixedvalue(123)">固定值</el-button>
            <el-button @click="changeNum">修改值</el-button>
            <el-button type="primary" @click="incrementIfOdd">increment if odd</el-button>
            <el-button type="primary" @click="getTestDate">increment async</el-button>
        </el-row>
        <div>显示网络数据</div>
        <div>{{list}}</div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
export default {
    name: "HelloWorld",
    data() {
        return {
            testWord: '',
            list: '123'
        }
    },
    created() {
        this.testWord = this.getcount;
        let s = this.getTestDate()
        console.info(1)
        console.info(this.countp)
    },
    computed: {
        ...mapState(['count','testNum','countp']),
        ...mapGetters(["evenOrOdd", "getcount",'doneTodos']),
        
    },
    methods: {

        ...mapActions(["incrementIfOdd", "incrementAsync", "fixedvalue"]),
        ...mapMutations(["increment", "decrement",'doadd']),

        changeNum() {
            this.fixedvalue(456);
        },
        getTestDate() {
          
          let s = this.count;
          let b = this.testNum;

          console.info(s+b);

        }

    }
};
</script>