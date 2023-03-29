<template>
  <div class="menu">
  <Logo></Logo>
    <el-menu active-text-color="#ffd04b" background-color="rgb(25, 24, 40)" class="el-menu-vertical-demo"
      :default-active="useActiveMenuPathStore().activeMenuPath" text-color="#fff" router @open="handleOpen"
      @close="handleClose">
      <div v-for="item in menuList" :key="item.id">
        <el-sub-menu v-if="item.children.length > 0" :index="item.path">
          <template #title>
            <el-icon>
              <House />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="ele in item.children" :key="ele.id" :index="ele.path">
            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>{{ ele.name }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.path">
          <template #title>
            <el-icon>
              <House />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, watch, ref } from "vue"
import { useActiveMenuPathStore } from '@/stores/user'
import Logo from '../logo/index.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  House
} from '@element-plus/icons-vue'



const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const menuList = [
  {
    id: '1', path: '/', name: '首页', icon: 'home', children: []
  },
  {
    id: '2', path: '/system', name: '系统管理', icon: 'system', children: [{
      id: '2-1', path: '/system/menu', name: '菜单管理', icon: 'menu', children: []
    }, {
      id: '2-2', path: '/system/role', name: '角色管理', icon: 'role', children: []
    }, {
      id: '2-3', path: '/system/user', name: '用户管理', icon: 'user', children: []
    }]
  }
]

onMounted(() => {

});

</script>

<style lang="less" scoped>
.menu {
  width: 180px;
  height: 100vh;
}

.el-menu {
  width: 100%;
  height: 100%;
  border: none
}

.is-active {
  background-color: #006569 !important;
  color: #fff !important;
}

.is-active:hover {
  background-color: #006569 !important;
}

.el-menu-item {
  background-color: #222130;
}

.el-menu-item:hover {
  background-color: #373648;
}
</style>