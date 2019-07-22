<template>
    <div class="hello">    
            <div>hi</div>
                        <router-link to="index1">toindex1</router-link>
                        <router-link :to="{ path: '/index2' }">toindex2</router-link>
                        <router-link :to="{ path: '/index2',query: { plan:list } }">toindex2text</router-link>
                        <router-view></router-view>
            </div>
</template>
<script>

export default {
    name: "",
    data() {
        return {
            testWord: '',
            list: '12345'
        }
    },
    created() {

    },

    methods: {

    }
};
</script>