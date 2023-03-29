<template>
    <div class="container special">
        <!-- 条件查询 -->
        <div class="seek-group">
            <div class="seek-item">
                <p>用户名：</p>
                <el-input v-model="userName" />
            </div>
            <div class="seek-btns">
                <el-button type="primary" @click="search()">查询</el-button>
                <el-button class="el-button-reset" @click="reset()">重置</el-button>
                <el-button type="primary" v-permission="['system:user:adds']" @click="search()">新增</el-button>
            </div>
        </div>

        <!-- 列表 -->
        <div class="tableList">
            <el-table :data="userList.list" v-loading.fullscreen="loading" element-loading-background="rgba(0, 0, 0, 0.8)" style="width: 100%" :max-height="550">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </div>

        <!-- 分页 -->
        <div class="pages">
            <el-pagination layout="prev, pager, next" background :page-size="pageSize" v-model:current-page="pageNum"
                :total="total" />
        </div>

    </div>
</template>
  
<script lang="ts" setup>

import { ref, toRef, reactive, onMounted, watch, watchEffect,getCurrentInstance} from 'vue'
import { getUserList } from '@/api/user'
const userName = ref('');
const showPage = ref<boolean>(true)
const loading = ref<boolean>(true)
const pageSize = ref<number>(15)
const pageNum = ref<number>(1)
const total = ref<number>(0)
let userList = reactive({ list: [] })
const proxy= getCurrentInstance()?.proxy;
console.log( proxy?.$menusList);

watch(pageNum, (a, b) => {
    pageNum.value = a
    getList();
})
watchEffect(() => {
    console.log(userName.value);
}, {
  flush: 'pre',
  onTrack(e) {
    console.log(e);
    
  },
  onTrigger(e) {
    console.log(e);
  }
})


onMounted(() => {
    getList();
})

const search = () => {
    getList();
}

const reset = () => {
    userName.value = '';
    getList();
}

const getList = () => {
    loading.value = true
    getUserList({ userName: userName.value, pageSize: pageSize.value, pageNum: pageNum.value }).then((res: any) => {
        userList.list = res.data;
        total.value = res.total;
       setTimeout(()=>{
        loading.value = false
       },300)
    }).catch((err) => {
        console.log(err);
    })
}
</script>

<style lang="less" scoped>
.seeks {
    display: flex;

    .each {
        display: flex;
    }
}

.pages {
    width: auto;
}
</style>
  