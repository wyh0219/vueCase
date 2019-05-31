<template>
    <div> 
        
        <div class="link">
            <!-- :to="{name:'Class',params:{classname:val.class},query:{id:val.id}}" -->
            <router-link 
            tag="span"
            v-for="(val,index) in classNames"
            :class="{active:i===index}"
            :key="index" 
            :to="{path:`/home/web/${val.class}`,query:{id:val.id}}"         
            
            >{{val.class}}</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i:0,
            classNames:[{
                id:1,
                class:'1609B'
            },{
                id:2,
                class:'16010A'
            },{
                id:3,
                class:'1608C'
            }]
        }
    },
}
</script>

<style>
.router-link-active{
    color: red;
}
</style>
