<template>
  <div id="app">
      <!-- <div>姓名：{{name}}</div>
      <div @click="changeName">用actions修改name属性</div>
      <div @click="changeAge('reduce')">年龄减少</div>
      <div>年龄：{{age}}</div>
      <div @click="changeAge('add')">年龄增加</div>
      <div>双倍的年龄是：{{dubleAge}}</div>
      <div>请求的数据是：{{arr}}</div> -->
      <div class="shop">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  // mounted() {
  //   this.$store.dispatch('getData')
  // },
  // computed: {
  //   ...mapState(['arr','name','age']),
  //   ...mapGetters(['dubleAge'])
  // },
  // watch: {
  //   arr(){
      
  //   }
  // },
  // methods: {
  //   ...mapMutations(['changeAge']),
  //   // changeAge(type){
  //   //   this.$store.commit('changeAge',type)
  //   // },
  //   ...mapActions(['changeName'])
  //   // changeName(){
  //   //    this.$store.dispatch('changeName')
  //   // }
  // },
}
</script>

<style>
.shop{
  margin-top: 30px;
}
</style>
