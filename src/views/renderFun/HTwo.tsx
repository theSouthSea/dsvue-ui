import { h, ref } from 'vue';

export default {
  setup() {
    const count = ref(1);

    // 返回渲染函数
    return () =>
      h(
        'div',
        {
          onClick(event: any) {
            console.log(event);
            count.value++;
          },
        },
        `hello vue JSX.count:${count.value}`
      );
  },
};
