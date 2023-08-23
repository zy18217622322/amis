<template>
  <div>
    <!-- <div style="height:46px;line-height: 46px;">
      <van-icon name="bars" @click="sidebarShow" />
    </div> -->
    <!-- <van-nav-bar :title="(route.name as string)" :left-arrow="route.name !== 'index'" @click-left="sidebarShow">
      <template #left>
        <van-icon name="bars" />
      </template>
      <template #right>
        <van-icon name="friends-o" size="30" />
      </template>
    </van-nav-bar> -->
    <!-- <van-tree-select style="top:46px;" v-if="state.showSide" v-model:active-id="activeId"
      v-model:main-active-index="activeIndex" :items="items" @click-item="toPath" /> -->
  </div>
</template>

<script setup lang="ts">
import type { TreeSelectItem } from 'vant'
const router = useRouter();
const route = useRoute();
const activeId = ref(1);
const activeIndex = ref(0);
// eslint-disable-next-line prettier/prettier

// interface TreeSelectItem {
//   text: string,
//   id: string,
//   children: TreeSelectItem[]
// }
const items: TreeSelectItem[] = [
  {
    text: '人力资源驾驶舱',
    children: [
      { text: '人员数量指标', id: '/hrNum' },
      { text: '人员结构指标', id: '/hrOrg' },
      { text: '人员变化指标', id: '/hrChange' },
      { text: '加班时长', id: '/hrExtra' },
    ]
  },
  {
    text: '财务管理驾驶舱',
  },
  {
    text: '项目管理驾驶舱',
  },
  {
    text: '市场管理驾驶舱',
  },
  {
    text: '安全运行驾驶舱',
  },
  // { text: '福建', disabled: true },
];
const state = reactive({
  showSide: false,
});
const sidebarShow = () => {
  state.showSide = !state.showSide;
};
const toPath = (e: any) => {
  router.push(e.id)
  state.showSide = false;
};
</script>

<style lang="less" scoped>
.header {
  .van-icon {
    margin: 10px;
  }

  // .van-nav-bar {
  //   background-color: #fff;
  //   position: relative;
  // }

  .van-tree-select {
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 999;
  }
}
</style>
