<template>
  <div>
    <van-cell class="title-cell">
      <van-row>
        <van-col span="8"> 姓名</van-col>
        <van-col span="8">所在部门</van-col>
        <van-col span="8">借调部门</van-col>
      </van-row>
    </van-cell>
    <van-list :finished="finished" finished-text="没有更多了">
      <van-cell style="text-align:left" v-for="(item, index) in list" :key="index">
        <van-row>

          <van-col style="color:red;" span="8" @click="$router.push('/pinia')"> {{ item.title }}</van-col>
          <van-col span="8">{{ item.depart }}</van-col>
          <van-col span="8">{{ item.depart }}</van-col>
        </van-row>

      </van-cell>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 配置建议写在 onMount 的外面
const list = ref([
  {
    title: "张三",
    depart: "财务部",
    depart1: "人事部"
  },
  {
    title: "李四",
    depart: "项目部",
    depart1: "公司部"
  },
  {
    title: "小明",
    depart: "部门1",
    depart1: "部门2"
  },
  {
    title: "小张",
    depart: "部门5",
    depart1: "借调部门"
  },
]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  // setTimeout(() => {
  //   for (let i = 0; i < 10; i++) {
  //     list.value.push(list.value.length + 1);
  //   }

  //   // 加载状态结束
  //   loading.value = false;

  //   // 数据全部加载完成
  //   if (list.value.length >= 40) {
  //     finished.value = true;
  //   }
  // }, 1000);
};
</script>

<style lang="less" scoped>
.van-col {
  text-align: left;
}

.van-list :first-child {
  // background-color: pink;
}

.van-cell.title-cell {
  background-color: green;
  font-weight: 500;
  font-size: 20px;


  .van-col {
    color: #fff;
    text-align: center;
  }
}

.van-col {
  text-align: center;
}
</style>
