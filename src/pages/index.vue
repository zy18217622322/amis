<template>
  <van-tabs v-model:active="active">
    <van-tab title="人力资源">
      <Hr />
    </van-tab>
    <van-tab title="财务管理">
    </van-tab>
    <van-tab title="项目管理">
    </van-tab>
    <van-tab title="市场管理">
    </van-tab>
    <van-tab title="安全运行">
    </van-tab>
    <!-- <van-tab v-for="(item, index) in parts" :title="item" :key="index">
      <Hr />
    </van-tab> -->
  </van-tabs>
  <!-- <div id="myChart" :style="{ width: '100%', height: '300px' }"></div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Hr from './hr/index.vue'
import { layoutRoutes } from '@/router';
import { defineComponent, onMounted, getCurrentInstance } from 'vue'
// const list = layoutRoutes.filter((item) => item.name && item.name !== 'index');
const active = ref(0);
const parts = ["人力资源", "财务管理", "项目管理", "市场管理", "安全运行"]
</script>

<style lang="less" scoped>
// :deep(.van-cell) {
//   background-color: #ddd;
//   margin-top: 16px;
// }
// :deep(.van-tabs__wrap) {
//   position: fixed;
// }
</style>
