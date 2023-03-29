<template>
    <!--vue3写法-->
    <router-view v-slot="{ Component }" class="content">
        <transition name="fade-right" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang='ts'>


</script>

<style lang="less" scoped>
.content {
    flex: 1;
    overflow: auto;
    padding: 20px;
}
</style>