<template>
    <div>班级</div>
</template>

<script>
export default {
    mounted() {
        
    },
    beforeRouteUpdate(to,from,next){
        if(to.params.classname==='1609B'){
            next({
                path:"/home/ui"
            });
        }else{
            next();
        }
        
    }
}
</script>

<style>

</style>
