import { onMounted, onUnmounted, Ref, ref } from 'vue';
export default function useMousePosition(): [Ref<number>, Ref<number>] {
  const x = ref(0);
  const y = ref(0);

  const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));
  //   return [x.value, y.value];
  return [x, y];
}
