import { ref, toValue, watchEffect } from 'vue';

// 接口返回数据结构
interface IResResult<IData> {
  data: IData;
  total: number;
}

// 初始化参数类型
type TProps<IData> = {
  // 获取数据方法
  fetchData: (...args: any) => Promise<IResResult<IData[]>>;
};

export const useTable = <IData>({ fetchData }: TProps<IData>) => {
  // 数据列表
  const list = ref<IData[]>();
  // 总数
  const total = ref(0);
  // 当前页
  const pageIndex = ref(1);
  // 每页显示条目个数
  const pageSize = ref(2);
  // 加载状态
  const loading = ref(false);

  // 获取数据方法
  const getList = (filterOptions?: object): Promise<IResResult<IData[]>> => {
    loading.value = true;

    return new Promise((resolve, reject) => {
      fetchData({
        index: pageIndex.value,
        size: pageSize.value,
        // 将值、refs 或 getters 规范化为值
        ...toValue(filterOptions),
      })
        .then((res) => {
          list.value = res.data;
          total.value = res.total;

          // 如果需要在组件中特殊处理,返回数据
          resolve(res);
        })
        .catch((err) => {
          console.log('获取数据失败!', err);
          reject(err);
        })
        .finally(() => {
          loading.value = false;
          console.log('接口调用完成!');
        });
    });
  };

  // 页大小改变
  const onSizeChange = (size: number) => {
    pageSize.value = size;
  };

  // 翻页
  const onIndexChange = (index: number) => {
    pageIndex.value = index;
  };

  watchEffect(() => {
    // 使用watchEffect可监听getList方法中使用的响应式依赖变化后执行方法
    getList();
  });

  return {
    list,
    total,
    pageIndex,
    pageSize,
    loading,
    onSizeChange,
    onIndexChange,
    getList,
  };
};
