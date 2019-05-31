<template>
    <div>
        <div class="link">
            <router-link to="/home/web" tag="p">网站</router-link>
            <router-link to="/home/ui" tag="p">传媒</router-link>
            <router-link to="/home/data" tag="p">大数据</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.link{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
