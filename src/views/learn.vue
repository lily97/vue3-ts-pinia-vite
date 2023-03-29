<template>
  <input type="text" v-model="a.person.age">
  <input type="text" v-model="b">
  <input type="text" v-model="c">
  <div>{{ name }}</div>
</template>


<script setup lang="ts">
import { ref, reactive, toRef, toRefs, toRaw, computed, watch, watchEffect } from 'vue'
// ref,reactive
// ref支持所有类型,reactive仅仅支持引用类型:Array、Object、Map、Set
// ref取值、赋值都需要加.value, 而reactive则不需要
// reactive声明的对象是由proxy代理的 如果直接赋值 则会破坏掉数据的响应式功能
// 使用数组的结构赋值 或者嵌套一层并赋值

// toRef,toRefs,toRa
// toRef只能修改响应式对象的值 非响应则试图无变化
// toRefs用来解构响应式对象
// toRow可以把响应式对象转换成非响应式


// computed 监听属性的变化 每次变化都会触发该函数中的操作
// watch 监听引用类型的时候 返回的新旧值是一样的 ref声明的变量需要开启deep才可以监听到 但reactive声明的变量则不需要开启
// watchEffect 在页面初始化时会执行一次  会追踪所有能访问到的响应式属性 watch则更加精准 仅追踪明确侦听的数据源

type props = {
  name: string,
  age: number
}
const prop = withDefaults(defineProps<props>(), {
  age: 18
});


console.log('propproppropprop', prop.name, prop.name);


const a = reactive({
  person: {
    name: 'ming',
    age: 29
  }
});

const b = ref<string>('good')

const c = 20;

watchEffect((oninvalidate) => {
  console.log(a.person.age);
  console.log(b.value);
  console.log(c);

  oninvalidate(() => {
    console.log('监听触发之前先执行这个回调函数');

  })
})

</script>

<style lang="less"></style>