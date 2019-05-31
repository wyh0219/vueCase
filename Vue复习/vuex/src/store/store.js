import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    //state
    state:{
        name:"张三",
        age:10,
        arr:'',
    },
    //用来改变state的值  需要用commit来触发里面的事件
    mutations:{
        changeAge(state,type){
            type==='add'?++state.age:--state.age
        },
        changeNames(state){
            state.name="李四"
        },
        getData(state,data){
            state.arr=data.data;
        }
    },
    //计算属性
    getters:{
        dubleAge:(state)=>{
            return state.age*2
        }        
    },
    //需要通过dispatch来触发
    actions:{
        changeName(){
            this.commit('changeNames')
        },
        getData(){
            axios.get('/data').then(res=>{
                this.commit('getData',res.data)
            })
        }
    }
})