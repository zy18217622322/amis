<template>
  <!-- <div class="index">
    <van-cell v-for="item in list" :key="item.path" :title="(item.name as string)" :to="item.path"
      class="link"></van-cell>
  </div> -->

  <div :class="props.value" :style="{ width: '100vw', height: '300px' }"></div>
</template>

<script setup lang="ts">
import { layoutRoutes } from '@/router';
import * as echarts from 'echarts';
import { defineProps } from "vue";
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
// const list = layoutRoutes.filter((item) => item.name && item.name !== 'index');



const props = defineProps(['value', 'tit'])
const { proxy } = getCurrentInstance() as any
// 配置建议写在 onMount 的外面
const option = {
  title: {
    text: props.tit
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
onMounted(() => {
  // 获取挂载的组件实例
  // console.log(proxy.$eCharts, "====user=====")
  // const echarts = proxy.$eCharts
  //初始化挂载
  const chartDom = document.getElementsByClassName(props.value)[0] as HTMLDivElement
  const echarts1 = echarts.init(chartDom)
  // const echarts1 = echarts.init(this.$refs.myChart)
  //添加配置
  echarts1.setOption(option)
  // 自适应
  window.onresize = function () {
    echarts1.resize()
  }
})


</script>

<style lang="less" scoped>
.index {
  :deep(.van-cell) {
    background-color: #ddd;
    margin-top: 16px;
  }
}
</style>
