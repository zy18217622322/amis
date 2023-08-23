<template>
  <div class="app-container">
    <!-- 显示列表 滚动条https://my.oschina.net/u/4261744/blog/3315859 -->
    <!-- <vue-scroll style="width:100%;height:100%"> -->
    <div class="data-box">
      <van-row class="th-row" style="display:flex;">
        <van-col style="width:80px">编号</van-col>
        <van-col style="width:80px">姓名</van-col>
        <van-col style="width:80px">工资</van-col>
        <van-col style="width:80px">保额</van-col>
        <!-- <van-col style="width:80px">时间</van-col>
          <van-col style="width:80px">备注</van-col> -->
      </van-row>

      <!-- 数据循环展示，checkbox可以进行选择-->
      <van-row class="td-row" :style="{ background: index % 2 == 0 ? '#fff' : '#ffcccc' }"
        v-for="(item, index) in accountList" :key="index">


        <van-col class="common-ellipsis">{{ item.workerNo }}</van-col>
        <van-col class="common-ellipsis">{{ item.workerName }}</van-col>
        <van-col class="common-ellipsis">{{ item.salary }}</van-col>
        <van-col class="common-ellipsis">{{ item.amount }}</van-col>

      </van-row>
    </div>
    <!-- </vue-scroll> -->


  </div>
</template>

<script setup lang="ts">
// 配置建议写在 onMount 的外面
const accountList = [
  { workerNo: "122212122", workerName: "张良-牛牛牛牛", salary: "1000", amount: "50000", amountTime: "20021201", remark: "what are you 弄啥咧" },
  { workerNo: "133131331", workerName: "天明-牛牛", salary: "1111", amount: "40000", amountTime: "20021203", remark: "what are you 弄啥咧" },
  { workerNo: "1423241232", workerName: "少司命-牛牛牛牛牛", salary: "1222", amount: "60000", amountTime: "20021001", remark: "what are you 弄啥咧" },
  { workerNo: "15231313133", workerName: "高渐离-牛牛牛牛牛", salary: "1333", amount: "20000", amountTime: "20021021", remark: "what are you 弄啥咧" },
  { workerNo: "162342342342", workerName: "雪女-牛牛牛牛牛牛", salary: "1444", amount: "10000", amountTime: "20020801", remark: "what are you 弄啥咧" },
];
onMounted(() => {

})
</script>

<style lang="less">
.app-container {
  width: 100%;
  height: 100%;
  // transform: rotate(90deg);
}

.data-box {
  font-size: 13px;
  margin: 12px 0px;
  border: 1px solid #fd7273;

  .th-row {
    height: 30px;
    line-height: 30px;
    padding: 0px 12px;
    background: #fd7273;
  }

  .td-row {
    height: 30px;
    line-height: 30px;
    padding: 0px 12px;
  }

}

// 超出 1 行显示省略号
.common-ellipsis {
  width: 80px;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

// 滚动条位置 --展示的是竖向
// /deep/.__bar-is-vertical {
// right: -1px !important;
// }
// // 隐藏横向滚动条
// /deep/.__bar-is-horizontal {
// display: none !important;
// }

// 滚动条位置 --展示横向
/deep/.__bar-is-vertical {
  display: none !important;
}

// 隐藏横向滚动条
/deep/.__bar-is-horizontal {
  bottom: -1px !important;
}
</style>
