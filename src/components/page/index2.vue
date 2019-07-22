<template>
    <div class="hello">    
            <div>index2333</div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            testWord: '',
            list: '123'
        }
    },
    created() {
          let s = this.$route.query.plan
          console.info('vvv')
          console.info(s)
    },

};
</script>