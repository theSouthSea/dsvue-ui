<template lang="html">
  <TodoItem
    v-for="item in list"
    :key="item.id"
    :data="item"
    :deleteItem="deleteItem"
    :toggleCompleted="toggleCompleted"
  >
  </TodoItem>
</template>
<script setup lang="ts">
import TodoItem from './TodoItemReact.vue';
export interface TodoListProps {
  // list: Array<Todo>;
  list: Todo[];
  deleteItem: (id: number) => void;
  toggleCompleted: (id: number) => void;
}
// const props = withDefaults(defineProps<TodoListProps>(), {
//   list: () => [],
//   deleteItem: () => {},
//   toggleCompleted: () => {},
// });
defineProps<TodoListProps>();
</script>
<style lang="css"></style>
