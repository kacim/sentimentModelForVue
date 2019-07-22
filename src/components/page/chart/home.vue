<template>
	 <div class='homeSet' style="height: 100%;overflow: auto">
        <v-head></v-head>
        <div class='changeSize'>
     	    <router-view></router-view>
     	</div>
     </div>
</template>   


<script>
import vHead from '../../common/head'

export default {
    data() {
        return {
            
        }
    },
    components: {
        vHead
    },
    created() {

    },
    methods: {

       
    }
}

</script>

<style lang="scss">
@import'../../../assets/css/chart/home.scss';
</style>