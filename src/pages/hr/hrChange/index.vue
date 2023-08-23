<template>
  <!-- <div class="index">
    <van-cell v-for="item in list" :key="item.path" :title="(item.name as string)" :to="item.path"
      class="link"></van-cell>
  </div> -->
  <div id="hrChange" :style="{ width: '100vw', height: '300px' }"></div>
</template>

<script lang="ts">
import { layoutRoutes } from '@/router';
import * as echarts from 'echarts';
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
// const list = layoutRoutes.filter((item) => item.name && item.name !== 'index');

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance() as any
    // 配置建议写在 onMount 的外面
    const categories = (function () {
      let now = new Date();
      let res = [];
      let len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
      }
      return res;
    })();
    const categories2 = (function () {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(10 - len - 1);
      }
      return res;
    })();
    const data = (function () {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(Math.round(Math.random() * 1000));
      }
      return res;
    })();
    const data1 = (function () {
      let res = [];
      let len = 10;
      while (len--) {
        res.push(Math.round(Math.random() * 1000));
      }
      return res;
    })();
    const data2 = (function () {
      let res = [];
      let len = 0;
      while (len < 10) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
        len++;
      }
      return res;
    })();
    const option = {
      title: {
        text: '人员变化指标'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend: {
        bottom: '0%',
        left: 'center',
        selectedMode: false
      },
      toolbox: {
        show: false,
        // feature: {
        //   dataView: { readOnly: false },
        //   restore: {},
        //   saveAsImage: {}
        // }
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: categories
        },
        {
          type: 'category',
          boundaryGap: true,
          data: categories2
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: 'Price',
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2]
        },
        {
          type: 'value',
          scale: true,
          name: 'Order',
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2]
        }
      ],
      series: [
        {
          name: 'Dynamic Bar',
          type: 'bar',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: data
        },
        {
          name: 'Dynamic Bar1',
          type: 'bar',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: data1
        },
        {
          name: 'Dynamic Line',
          type: 'line',
          silent: true,
          data: data2
        }
      ]
    };
    // app.count = 11;
    // setInterval(function () {
    //   let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
    //   data.shift();
    //   data.push(Math.round(Math.random() * 1000));
    //   data2.shift();
    //   data2.push(+(Math.random() * 10 + 5).toFixed(1));
    //   categories.shift();
    //   categories.push(axisData);
    //   categories2.shift();
    //   categories2.push(app.count++);
    //   myChart.setOption({
    //     xAxis: [
    //       {
    //         data: categories
    //       },
    //       {
    //         data: categories2
    //       }
    //     ],
    //     series: [
    //       {
    //         data: data
    //       },
    //       {
    //         data: data2
    //       }
    //     ]
    //   });
    // }, 2100);
    onMounted(() => {
      // 获取挂载的组件实例
      // console.log(proxy.$eCharts, "====user=====")
      // const echarts = proxy.$eCharts
      //初始化挂载
      const echarts1 = echarts.init(document.getElementById('hrChange')!)
      // const echarts1 = echarts.init(this.$refs.myChart)
      //添加配置
      echarts1.setOption(option)
      // 自适应
      window.onresize = function () {
        echarts1.resize()
      }
    })
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
