import { createApp } from 'vue'
import type {  Directive } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.less'
import './assets/css/element.less'
import '@/router/permission'
import * as echarts from "echarts"
import * as directives from '@/directives'


const app = createApp(App)

// 定义全局变量 并扩充 否则会报红
app.config.globalProperties.$env = "xiaoming";
app.config.globalProperties.$menusList = [];
app.config.globalProperties.$echarts = echarts

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $env: string,
        $menusList: Array<object>,
    }
}

// 循环添加自定义全局指令 
Object.keys(directives).forEach(key => {  //Object.keys() 返回一个数组，值是所有可遍历属性的key名
    app.directive(key, (directives as { [key: string]: Directive })[key])  //key是自定义指令名字；后面应该是自定义指令的值，值类型是string
})

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
