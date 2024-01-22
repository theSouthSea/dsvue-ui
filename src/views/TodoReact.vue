<script setup lang="ts">
import InputItem from '@/components/demo/todo/InputTodo.vue';
import TodoListReact from '@/components/demo/todo/TodoListReact.vue';
import { useTodos } from '@/stores/todo';
const todos = useTodos();
const handleAddItem = (text: string) => {
  todos.addTodo(text);
};
console.log('todos=', todos.todos);
</script>
<template>
  <!-- 直接从 store 中访问 state -->
  <div>
    <h2>待办事项</h2>
    <InputItem @addTodo="handleAddItem" />
    <TodoListReact
      :list="todos.todos"
      :deleteItem="todos.deleteTodo"
      :toggleCompleted="todos.toggleTodo"
    />
  </div>
</template>
