import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let state = {
    goods: [
      {
        id: '0',
        name: 'vivo-X20Plus屏幕指纹版',
        hint: '逆光也清晰，照亮你的美',
        price: 3596.00,
        num: 0,
        img:"https://res0.vmallres.com/pimages//product/6901443265084/428_428_1542852832819mp.png"
      },
      {
        id: '1',
        name: '华为mate10Plus',
        hint: '真正的人工智能芯片',
        price: 4999.00,
        num: 0,
        img:"https://res0.vmallres.com/pimages//product/6901443264780/428_428_1539244238246mp.png"
      },
      {
        id: '2',
        name: '华为mate10Plus',
        hint: '真正的人工智能芯片',
        price: 4999.00,
        num: 0,
        img:"https://res0.vmallres.com/pimages//product/6901443218646/428_428_1542854080066mp.png"
      }
    ],
    totalPrice: 0.00,
    totalNum: 0
  }
  
export default new Vuex.Store({
    state,
    mutations:{
        changeData(state,{type,index}){
            if(type==='add'){
                state.goods[index].num++;
                // state.totalNum++
                // state.totalPrice += state.goods[index].price
            }else{
                state.goods[index].num--
                // state.totalNum--
                // state.totalPrice -= state.goods[index].price
            }
           
        }
    },
    getters:{
        sum(state){
            state.totalNum=0;
            state.totalPrice=0;
             state.goods.forEach(item=>{
                if(item.num>0){
                   state.totalNum+=item.num;
                   state.totalPrice+=item.num*item.price
                }
            })
            return {num:state.totalNum,price:state.totalPrice}
        }
    },
    actions:{

    }
})