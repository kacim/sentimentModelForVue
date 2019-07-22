import Vue from 'vue'


const state =  {
        count: 1,
        testNum:'这是测试字段',
        lists:[0,1,2]
    }

//更新状态
const mutations = { // 包含了多个直接更新state函数的对象
    increment(state) {
        state.count = state.count + 1;
    },
    decrement(state) {
        state.count = state.count - 1;
    }
}

//获取状态
const getters = { // 当读取属性值时自动调用并返回属性值
    evenOrOdd(state) {
        return state.count % 2 === 0 ? "偶数" : "奇数";
    },
     getcount(state) {
        return state.count;
    }
}
const actions = { // 包含了多个对应事件回调函数的对象
    incrementIfOdd({ commit, state }) { // 带条件的action
        if (state.count % 2 === 1) {
            commit('increment')
        }
    },  
    fixedvalue({commit},msg) { //异步的action
    	   if(msg.isTrusted){
    	   	msg = 657
    	   }
           state.count = msg;
    },
    incrementAsync({ commit, state }) { // 带条件的action
        if (state.count % 2 === 1) {
            commit('increment')
        }
    }

}

 //用export default 封装代码，让外部可以引用
export default {
    state,
    mutations,
    getters,
    actions
}