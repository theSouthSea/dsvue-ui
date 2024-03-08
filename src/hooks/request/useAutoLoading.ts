import type { Ref } from 'vue';
import { ref } from 'vue';

type AutoLoadingResult = [Ref<boolean>, <T>(requestPromise: Promise<T>) => Promise<T>];

/* 在给run方法传入一个promise，会在promise执行前或执行后将loading状态设为true，在执行完成后设为false */
export function useAutoLoading(defaultLoading = false): AutoLoadingResult {
  const ld = ref(defaultLoading);

  function run<T>(requestPromise: Promise<T>): Promise<T> {
    ld.value = true;
    return requestPromise.finally(() => {
      ld.value = false;
    });
  }

  return [ld, run];
}
