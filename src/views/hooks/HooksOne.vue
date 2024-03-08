<script setup name="DDemo" lang="ts">
import { onMounted, ref } from 'vue';

//   模拟调用接口
function getRemoteData() {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          key: 1,
          name: '苹果',
          value: 1,
        },
        {
          key: 2,
          name: '香蕉',
          value: 2,
        },
        {
          key: 3,
          name: '橘子',
          value: 3,
        },
      ]);
    }, 3000);
  });
}

const optionsArr = ref<any[]>([]);
const value = ref();

onMounted(() => {
  getRemoteData().then((data) => {
    optionsArr.value = data;
  });
});
</script>

<template>
  <div>
    <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
      <el-option
        v-for="item in optionsArr"
        :key="item.key"
        :label="item.name"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<style lang="less" scoped></style>
