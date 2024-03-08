<template>
  <div class="app" v-loading="loading">
    <div class="filter">
      <el-form ref="form" inline :model="query">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="query.name"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="query.address"></el-input>
        </el-form-item>
      </el-form>
      <div class="hanle">
        <el-button type="primary" @click="onSearch">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </div>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="date" label="创建时间" />
    </el-table>
    <el-pagination
      v-model:current-page="pageIndex"
      v-model:page-size="pageSize"
      :total="total"
      :page-sizes="[1, 2, 3, 4]"
      layout="total, sizes, prev, pager, next, jumper"
    />
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ref } from 'vue';

import { getUserList, IUser } from '@/api/user';

const list = ref<IUser[]>();
const total = ref(0);
const pageIndex = ref(1);
const pageSize = ref(20);
const loading = ref(false);

// 过滤查询参数
const query = ref({
  name: '',
  address: '',
});

const getList = () => {
  loading.value = true;
  getUserList({
    index: pageIndex.value,
    size: pageSize.value,
    ...query.value,
  })
    .then((res) => {
      list.value = res.data;
    })
    .finally(() => {
      loading.value = false;
    });
};

const form = ref<FormInstance>();

// 搜索
const onSearch = () => {
  getList();
};

// 重置
const onReset = () => {
  form.value?.resetFields();
  getList();
};
</script>

<style scoped>
.filter {
  display: flex;
}
.el-table {
  margin-bottom: 10px;
}
</style>
