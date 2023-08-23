<template>
  <div>
    <div id="myChart" :style="{ width: '100vw', height: '450px' }"></div>
    <van-tabs style="margin:20px 0" type="card" v-model="active">
      <van-tab v-for="(item, index) in parts" :title="item.title" :key="index">
      </van-tab>
      <HrOrg style="margin-top:20px;" />
    </van-tabs>
    <van-button id="target" @click="$router.push('/hrTable')" style="width:50%;margin-left: 50%;" type="success"
      block>查看借调详情</van-button>
    <van-tabs style="margin:20px 0" v-model="active1" type="card">
      <van-tab v-for="(item, index) in allParts" :title="item.title" :key="index">
      </van-tab>
      <HrNum style="margin-top:20px" :value="age" :tit="ageTit" />
      <HrNum :value="year" :tit="yearTit" />
      <HrNum :value="status" :tit="statusTit" />
      <HrNum :value="edu" :tit="eduTit" />
      <HrNum :value="sex" :tit="sexTit" />
      <HrChange />
      <HrExtra style="margin-top:20px" :value="workDay" :tit="workTit" />
      <HrExtra :value="freeDay" :tit="freeTit" />
    </van-tabs>


  </div>
</template>

<script setup lang="ts">
import HrOrg from "./hrOrg/index.vue"
import HrNum from "./hrNum/index.vue"
import HrChange from "./hrChange/index.vue"
import HrExtra from "./hrExtra/index.vue"
import * as echarts from 'echarts';
// 配置建议写在 onMount 的外面
const active = ref(0)
const active1 = ref(1)
const age = ref('age')
const sex = ref('sex')
const year = ref('year')
const status = ref('status')
const edu = ref('edu')
const workDay = ref('workDay')
const freeDay = ref('freeDay')
const ageTit = ref('年龄分布')
const sexTit = ref('性别分布')
const yearTit = ref('司龄分布')
const statusTit = ref('政治面貌分布')
const eduTit = ref('学历分布')
const workTit = ref('加班时长（工作日）')
const freeTit = ref('加班时长（非工作日）')
const parts = [
  {
    title: "所在部门",
    name: ""
  },
  {
    title: "借调部门",
    name: ""
  },
]
const allParts = [
  {
    title: "公司",
    name: ""
  },
  {
    title: "部门1",
    name: ""
  },
  {
    title: "部门2",
    name: ""
  },
  {
    title: "部门3",
    name: ""
  },
  {
    title: "部门4",
    name: ""
  },
  {
    title: "部门5",
    name: ""
  },
]
const list = [
  {
    title: '123',
    id: '12'
  }
]
const option = {
  title: {
    text: '人员组成'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '0%',
    left: 'center',
    selectedMode: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      silent: true,
      center: ['50%', '40%'],
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false
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
        { value: 1048, name: '0人力资源部100人10%' },
        { value: 735, name: '1人力资源部100人10%' },
        { value: 580, name: '2人力资源部100人10%' },
        { value: 484, name: '3人力资源部100人10%' },
        { value: 300, name: '4人力资源部100人10%' },
        { value: 1048, name: '5人力资源部100人10%' },
        { value: 735, name: '6人力资源部100人10%' },
        { value: 580, name: '7人力资源部100人10%' },
        { value: 484, name: '8人力资源部100人10%' },
        { value: 300, name: '9人力资源部100人10%' }
      ]
    }
  ]
};
onMounted(() => {
  //初始化挂载
  const domMap = document.getElementById("myChart");
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
