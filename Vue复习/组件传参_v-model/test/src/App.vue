<template>
  <div id="app">
      <div @click="isShow=true">显示弹框</div>
      <DiaLog v-if="isShow" />
  </div>
</template>

<script>
import EventBus from '@/utils/bus';
export default {
  name: 'App',
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    //自定义事件
    // closeDia(){
    //   this.isShow=false;
    // }   
  },
  created() {
    EventBus.$on('closeDia',()=>{
      this.isShow=false
    })
  },
  components:{
    DiaLog:{
      template:`
            <div>
                <div>这是一个弹框</div>
                <div @click="close">关闭按钮</div>
            </div>  `,
      methods: {
        //自定义事件  $emit
        close(){
          EventBus.$emit('closeDia')
        }
      },
    }
  }
}
</script>

<style>
#app {

}
</style>
