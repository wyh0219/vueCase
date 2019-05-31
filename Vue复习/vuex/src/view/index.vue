<template>
    <div class="box">
        <div 
        class="item"
        v-for="(val,index) in goods" 
        :key="index"
        >
            <div><img :src="val.img" alt=""></div>
            <div class="status">
                <div class="name">{{val.name}}</div>
                <div class="action">
                    <p style="color:red">￥{{val.price}}</p>
                    <div class="btn">
                        <p v-if="val.num>0" class="rad" @click="changeData('reduce',index)">-</p>
                        <p v-if="val.num>0">{{val.num}}</p>
                        <p class="rad" @click="changeData('add',index)">+</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="price">
            <div class="totalPrice">合计：￥{{totalPrice}}</div>
            <div class="totalNum">去结算:{{totalNum}}</div>
        </div>
        <div>{{sum.num}}个</div>
        <div>{{sum.price}}元</div>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
    mounted() {
        //console.log(this)
    },
    computed: {
        ...mapState(['goods','totalPrice','totalNum']),
        ...mapGetters(['sum']),
    },
    methods: {
        changeData(type,index){
            this.$store.commit('changeData',{type,index})
        }
    },
}
</script>

<style>

.price{
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 15px;
}
.totalPrice{
    width: 60%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    background: green;
    color: #fff;

}
.totalNum{
    width: 40%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    background: blue;
    color: #fff;
}
.box{
    width: 100%;
    height: 100%;
}
.item{
    width: 100%;
    display: flex;
}
img{
    width: 80px;
    height: auto;
}
.status{
    flex: 1;
    margin-left: 5px;
}
.name{
    height: 35px;
    line-height: 35px;
}
.action{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn{
    display: flex;
}
.btn>p{
    margin: 0 6px;
}
.rad{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    background: green;
    color: #fff;
}
</style>
