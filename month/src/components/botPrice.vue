<template>
    <footer>
        <div class="left-wrap">
            <p>{{sum}}份礼品</p>
            <h3>{{prices}}.00</h3>
        </div>
        <div class="right-wrap">
            <p :class="{back:open}">购买</p>
        </div>
    </footer>
</template>


<script>
export default {
    data() {
        return {
            prices:0,
            open:false,sum:0
        }
    },
    created(){
        this.bus.$on('sum',(price,sum)=>{
            this.sum=sum;
            this.prices=price;
           this.open=true;
           if(price==0){
 this.open=false;
           }
        })
    }
}
</script>