<template>
    <div>
        <div v-for="(val,index) in list" :key="index">
           <div @click="$router.push('/detail/id='+val.id)"> {{val.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    id:1,
                    name:"李四"
                },
                {
                    id:2,
                    name:"张三"
                },
                {
                    id:3,
                    name:"王五"
                },
            ]
        }
    },
}
</script>

<style>

</style>
