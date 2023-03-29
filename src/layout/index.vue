<template>
  <div class="layout">
    <div class="layout-left">
      <Menu></Menu>
    </div>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'

const name:string='小明'

const getName=(name:string)=>{
console.log(name);

}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  overflow: hidden;
  &-right {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>