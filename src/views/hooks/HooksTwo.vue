<script setup name="DDemo" lang="ts">
import { onMounted, ref } from 'vue';

//   模拟调用接口
function getRemoteData() {
  return new Promise<any[]>((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
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
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  });
}

const optLoading = ref(false);
const optionsArr = ref<any[]>([]);
const value = ref();

function initSelect() {
  optLoading.value = true;
  getRemoteData()
    .then((data) => {
      optionsArr.value = data;
    })
    .catch((e) => {
      // 请求出线错误时将错误信息显示到select中，给用户一个友好的提示
      optionsArr.value = [
        {
          key: -1,
          value: -1,
          name: e.message,
          disabled: true,
        },
      ];
    })
    .finally(() => {
      optLoading.value = false;
    });
}

onMounted(() => {
  initSelect();
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
        :loading="optLoading"
      />
    </el-select>
  </div>
</template>
