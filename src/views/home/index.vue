<template>
    <div id="line"></div>
</template>

<script setup lang='ts'>
import { onMounted, provide, type HtmlHTMLAttributes } from "vue"
import * as echarts from "echarts";
provide('echarts', echarts)
onMounted(() => {
    initLine();
})

const initLine = () => {
    const lineChart = echarts.init(document.getElementById('line') as HTMLElement);
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    lineChart.setOption(option)
    window.addEventListener('resize', () => {
        lineChart.resize();
    })
}

</script>

<style lang="less" scoped></style>