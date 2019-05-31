<template>
    <div class="index">
         <header>
             <span @click="$router.go(-1)"><</span>
            星拼悦蛋糕礼
            <span></span>
        </header>
        <div class="logo-img">
            <img src="../images/img10.jpg" alt="">
        </div>
        <div class="box">
            <div class="content">
                <div class="top">
                    <span class="cuo" @click="close">x</span>
                    <p class="img"> <img :src="require('../images/'+obj.img)" alt=""></p>
                    <div class="cont">
                        <p>{{obj.title}}</p>
                        <p>￥{{obj.price}}</p>
                    </div>
                </div>
                <div class="bot">
                    <li>适用门店:<span style="color:green">查看全部门店</span></li>
                    <li>使用时间段:2018.12.12-2019.2.19</li>
                    <li>使用须知:星巴克星巴克星巴克星巴克星巴克星巴克关键是给大十多年星巴关键是给大十多年星巴
                        克关是多功能十多是多功能十多年</li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../mock/index';
export default {
    data() {
        return {
            data:data.list,
            obj:{},
            open:false
        }
    },
    created() {
       this.obj=this.data.find(item=>item.id==this.id);
    },
    methods: {
        close(){
           this.$router.replace('/index')
        }
    },
    props:['id'],
}
</script>