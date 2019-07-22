<template>
    <div>
        <div class='btnControl'>
            <div @click='tochangeType(1)'>type 1</div>
            <div @click='tochangeType(2)'>type 2</div>
            <div @click='tochangeType(3)'>type 3</div>
            <div @click='tochangeType(4)'>type 4</div>
            <div @click='tochangeType(5)'>type 5</div>
        </div>
        <div style='color:white'>当前type{{control}}</div>
        <div class='flex' :class="{ 'type1':control == 1,'type2':control == 2,'type3':control == 3,'type4':control == 4,'type5':control == 5}">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            control: 1,
        }
    },
    created() {

    },
    methods: {

        tochangeType(num) {
            this.control = num
        }

    }
}
</script>
<style lang="scss">
.btnControl {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;

    div {
        width: 18%;
        display: inline-block;
        vertical-align: top;
        height: 50px;
        color: white;
        background: #000;
        text-align: center;
        line-height: 50px;
        cursor: pointer;

        &:hover {
            background: #333;
        }
    }
}

.flex {
    display: flex;
    //justify-content: flex-start | flex-end | center | space-between | space-around;
    //flex-direction: row | row-reverse | column | column-reverse;
    //flex-wrap: nowrap | wrap | wrap-reverse;

    div {
        background: red;
        width: 18%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }

}

.type1 {
    flex-direction: row;
}

.type2 {
    flex-direction: column;
}

.type3 {
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        background: red;
        margin-bottom: 20px;
        width: 30%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }

}

.type4 {
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        background: red;
        margin-bottom: 20px;
        width: 30%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    div:nth-child(5) {
        flex-grow: 2;
        margin-left: 10px;
        margin-right: 10px;
        /* default 0 */
    }

}

.type5 {

    flex-wrap: wrap;
    justify-content: space-between;

    div {
        background: red;
        margin-bottom: 20px;
        width: 30%;
        height: 50px;
        line-height: 50px;
        text-align: center;

    }
    div:nth-child(5) {
        order:-1;
        /* default 0 */
    }

}
</style>