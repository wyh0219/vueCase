<template>
    <div>
        <div>
            <router-link  to="/list/tab1">列表一</router-link>
            <router-link  to="/list/tab2">列表二</router-link>
            <router-link  to="/list/tab3">列表三</router-link>
        </div>
        <div>
            <router-view></router-view>
            <router-view name="concat"></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
