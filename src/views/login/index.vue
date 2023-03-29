<template>
  <div class="login">
    <div class="username">
      <el-input v-model="username"></el-input>
    </div>
    <div class="password">
      <el-input v-model="password"></el-input>
    </div>
    <button @click="toLogin">登陆</button>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, getCurrentInstance } from 'vue'
import { login } from '@/api/user'
import { useMenusStore, useUserInfoStore } from '@/stores/user'
import { ElMessage } from 'element-plus';
import { setCookie } from '@/utils/auth'
import router from '@/router';

const routes = [
  {
    id: 1, name: "/", path: "/", component: "Layout", redirect: "/index", hidden: false, children: [
      { name: "index", path: "/index", meta: { title: "index" }, component: "index/index" },
    ]
  },
  {
    id: 2, name: "/form", path: "/form", component: "Layout", redirect: "/form/index", hidden: false, children: [
      { name: "/form/index", path: "/form/index", meta: { title: "form" }, component: "form/index" }
    ]
  },
  {
    id: 3, name: "/example", path: "/example", component: "Layout", redirect: "/example/tree", meta: { title: "example" }, hidden: false, children: [
      { name: "/tree", path: "/example/tree", meta: { title: "tree" }, component: "tree/index" },
      { name: "/copy", path: "/example/copy", meta: { title: "copy" }, component: "tree/copy" }
    ]
  },
  {
    id: 4, name: "/table", path: "/table", component: "Layout", redirect: "/table/index", hidden: false, children: [
      { name: "/table/index", path: "/table/index", meta: { title: "table" }, component: "table/index" }
    ]
  },
  {
    id: 5, name: "/admin", path: "/admin", component: "Layout", redirect: "/admin/index", hidden: false, children: [
      { name: "/admin/index", path: "/admin/index", meta: { title: "admin" }, component: "admin/index" }
    ]
  },
  {
    id: 6, name: "/people", path: "/people", component: "Layout", redirect: "/people/index", hidden: false, children: [
      { name: "/people/index", path: "/people/index", meta: { title: "people" }, component: "people/index" }
    ]
  }
]
const username = ref<string>('Monica')
const password = ref<string>('v1skhwmMCD')

useMenusStore().menus = routes;

const toLogin = () => {
  login({ username: username.value, password: password.value }).then((res: any) => {
    if (res.userInfo) {
      useUserInfoStore().userInfo = res.userInfo;
      setCookie('token', res.userInfo.token)
      setCookie('permission',res.userInfo.permissions)
      ElMessage.success(res.message);
      router.push('/')
    } else {
      ElMessage.error(res.message);
    }
  })
}


</script>
  
  
<style lang="less" >
.login{
  
}
</style>