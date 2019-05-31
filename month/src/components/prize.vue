<template>
<div>
    <dl  v-for="(val,index) in cont"
    :key="index">
        <dt @click="$router.push('/detail/'+val.id)">
            <img :src="require('../images/'+val.img)" alt="">
        </dt>
        <dd>
            <div class="left"  @click="$router.push('/detail/'+val.id)">
                <p>{{val.title}}</p>
                <p>￥{{val.price}}</p>
            </div>
            <div class="right">
                <span class="opacity" :class="{active:val.check}" @click="reduce(index)">-</span>
                <span class="num" v-show="val.check">{{val.count}}</span>
                <span @click="add(index)">+</span>
            </div>
        </dd>
    </dl>
</div>
    
</template>


<script>
export default {
    data() {
        return {
            data:[],
            pricedata:[],
            price:0,
            sumcount:0
        }
    },
    created() {
        this.data=this.cont;
        this.get()
        
    },
    methods: {
       
        reduce(i){
             this.data[i].count--;
              this.data[i].count= this.data[i].count<=0?0: this.data[i].count;
              this.get();
              this.sum();
              if(this.data[i].count<=0){
                  this.data[i].check=false;
              }
              
        },
        add(i){
           this.data[i].count++;
           this.data[i].check=true;
           this.get();
           this.sum();
        },
         get(){
             this.pricedata=[];
            this.data.forEach(item=>{
                this.pricedata.push(
                    {
                        sum:item.count,
                        price:item.count*item.price
                    }
                )
            })
        },
        sum(){
           this.price=0;
           this.sumcount=0;
           this.pricedata.forEach(item=>{
               this.sumcount+=item.sum;
               this.price+=item.price;
           })
           this.bus.$emit('sum',this.price,this.sumcount)
         
        }
    },
    props:['cont']
}
</script>