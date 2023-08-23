<template>
  <div>
    <van-cell class="title-cell">
      <van-row v-for="(item, index) in list" :key="index">
        <van-col span="12"> {{ item.title }}</van-col>
        <van-col span="12"> {{ item.depart }}</van-col>
      </van-row>
    </van-cell>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 配置建议写在 onMount 的外面
const list = ref([
  {
    title: "项目名称",
    depart: "风险类型"
  },
  {
    title: "项目名称",
    depart: "风险类型"
  },
  {
    title: "项目名称",
    depart: "风险类型"
  },
  {
    title: "项目名称",
    depart: "风险类型"
  },
  {
    title: "项目名称",
    depart: "风险类型"
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
    height: 50px;
    line-height: 50px;
  }
}

.van-col {
  text-align: center;
}
</style>
