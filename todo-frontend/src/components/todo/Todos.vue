<script setup>
    import { ref } from 'vue';
    import TodoItem from './TodoItem.vue';
    import TodoCreate from './TodoCreate.vue';

    const todos = ref([
    {body: 'hello there', completed: false},
    {body: 'hello there', completed: false},
    {body: 'hello there', completed: false},
    {body: 'hello there', completed: false},
    ])

    const todoCreate = (todo) => {
        todos.value = [...todos.value, todo]
    }
</script>
    
<template>
    <div class="mx-auto text-center">
        <div class="text-center">
            <h1 class="text-4x1 font-extrabold">One More Todo App</h1>
        </div>
        <div class="shadow-lg mt-8 max-w-lg mx-auto">
            <TodoItem v-for="todo in todos" :todo="todo"></TodoItem>
            <TodoCreate @todoCreate="todoCreate" />
        </div>
    </div>
</template>