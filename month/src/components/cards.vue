<template>
    <ul class="card-list" >
        <li v-for="(cont,index) in cont"
        :key="index" @click="addStyle(index)" :class="{hover:i==index}" ref="lis">
            <p :class="{dui:i==index}" v-if="i==index">√</p>
            <img :src="require('../images/'+cont.img)" alt="">
        </li>
    </ul>
</template>


<script>
export default {
    data() {
        return {
            i:0
        }
    },
    created() {
    },
    props:['cont'],
    methods: {
        addStyle(i){
            this.cont[i].check=true;
            this.i=i;
             
        }
    },
}
</script>