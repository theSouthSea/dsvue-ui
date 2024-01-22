<template lang="html">
  <TodoItem v-for="item in list" :key="item.id" :data="item" v-bind="$attrs"> </TodoItem>
</template>
<script setup lang="ts">
import TodoItem from './TodoItem.vue';
export interface TodoListProps {
  // list: Array<Todo>;
  list: Todo[];
}
// const props = withDefaults(defineProps<TodoListProps>(), {
//   list: () => [],
//   deleteItem: () => {},
//   toggleCompleted: () => {},
// });
defineProps<TodoListProps>();
// const emit = defineEmits<{
//   (e: 'deleteItem', id: number): void;
//   (e: 'toggleCompleted', id: number): void;
// }>();
</script>
<style lang="css"></style>
