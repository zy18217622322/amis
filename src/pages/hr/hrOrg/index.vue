<template>
  <div>
    <div class="myChart" :style="{ width: '100vw', height: '300px' }"></div>
  </div>
</template>

<script setup lang="ts">
import HrOrg from "./hrOrg/index.vue"
import * as echarts from 'echarts';
// 配置建议写在 onMount 的外面
const list = [
  {
    title: '123',
    id: '12'
  }
]
const option = {
  title: {
    text: '借调人员信息'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    x: 'right',      //可设定图例在左、右、居中
    y: 'center',     //可设定图例在上、下、居中
    padding: [0, 50, 0, 0],
    selectedMode: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      silent: true,
      center: ['35%', '50%'],
      radius: ['30%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ]
    }
  ]
};
onMounted(() => {
  //初始化挂载
  const domMap = document.getElementsByClassName('myChart')[0] as HTMLDivElement
  // 清除Echarts默认添加的属性
  domMap.removeAttribute("_echarts_instance_");
  const echarts1 = echarts.init(domMap)

  // const echarts1 = echarts.init(this.$refs.myChart)
  //添加配置
  echarts1.setOption(option)
  // 自适应
  window.onresize = function () {
    echarts1.resize()
  }
})
</script>

<style lang="less">
.title {
  font-size: 18px !important;
  color: #323233;
  font-weight: 600;
  margin: 20px 0;
}
</style>
