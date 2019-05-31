<template>
    <div class="index">
        <header>
            <span><</span>
            星拼悦蛋糕礼
            <span>···</span>
        </header>
        <div class="logo-img">
            <img src="../images/img10.jpg" alt="">
        </div>
        <div class="select-card">
                <p class="select">选择卡封面</p>
                <el-li :cont="listdata.images">
                  
                </el-li>
            </div>
        <section>
            
             <div class="select-prize">
                <p class="select">选择一份礼物</p>
                <div class="prize-list">
                  <el-dl :cont="listdata.list"></el-dl>
                </div>
            </div>
            <div class="use">
                <span>使用须知</span>
                <span>隐私权条款</span>
            </div>
        </section>
        <botPrice></botPrice>
    </div>
</template>


<script>
import data from '../mock/index';
import cards from '../components/cards';
import prize from '../components/prize';
import botPrice from '../components/botPrice';
export default {
    data() {
        return {
            listdata:data
        }
    },
    created() {
        // this.bus.$on('add',(data)=>{
        //     data.check=true;
        // })
    },
    methods: {
        
    },
    components:{
        elLi:cards,
        elDl:prize,
        botPrice
    }
}
</script>