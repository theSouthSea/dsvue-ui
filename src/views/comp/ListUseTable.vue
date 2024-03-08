<template>
  <div class="app">
    <TableLayout :loading="loading">
      <template #header>
        <FilterForm :model="query" @submit="onSearch" @reset="onSearch">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="query.name"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="query.address"></el-input>
          </el-form-item>
        </FilterForm>
      </template>
      <template #body>
        <Table :data="list">
          <el-table-column prop="name" label="用户名" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="date" label="创建时间" />
        </Table>
      </template>
      <template #footer>
        <Pagination v-model:current-page="pageIndex" v-model:page-size="pageSize" :total="total" />
      </template>
    </TableLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { getUserList, IUser } from '@/api/user';
import FilterForm from '@/components/business/table/FilterForm.vue';
import Pagination from '@/components/business/table/Pagination.vue';
import Table from '@/components/business/table/Table.vue';
import TableLayout from '@/components/business/table/TableLayout.vue';
import { useTable } from '@/hooks/useTable';

const { list, total, pageIndex, pageSize, getList, loading } = useTable<IUser>({
  fetchData: getUserList,
});

// 过滤查询参数
const query = ref({
  name: '',
  address: '',
});

// 获取过滤数据
const onSearch = () => {
  getList(query);
};
</script>

<style scoped></style>
