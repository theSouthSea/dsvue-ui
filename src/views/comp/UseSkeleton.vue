<script setup name="SkeletonView" lang="ts">
import { listApi } from '@/api';
import { useAutoSkeletonView } from '@/hooks/useAutoSkeletonView';
import SkeletonView from '@/libs/skeleton/SkelonScreen.vue';
// interface DataItem {
//   name: string;
//   birthday: string;
//   avatar: string;
// }
const view = useAutoSkeletonView({
  apiFun: listApi,
  // transformDataFun: (res: { data: DataItem }) => {
  //   return res.data || [];
  // },
});
</script>

<template>
  <div class="col">
    <SkeletonView v-slot="{ result }" v-bind="view.bindProps" v-on="view.bindEvents">
      <!-- <span>{{ result }}</span> -->
      <ol>
        <li v-for="item in result" :key="item.name">
          <div>
            <div>
              <span>姓名:</span><span>{{ item.name }}</span>
            </div>
            <div>
              <span>出生日期:</span><span>{{ item.birthday }}</span>
            </div>
          </div>
          <div class="avatar">
            <img :src="item.avatar" alt="avatar" />
          </div>
        </li>
      </ol>
    </SkeletonView>
  </div>
</template>
