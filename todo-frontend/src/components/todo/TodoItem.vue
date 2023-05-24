<script setup>
defineProps({
    todo: {
        body: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true,
        },
    },
})
</script>

<template>
    <div class="px-4 py-2 border-b">{{todo.body}}</div>
</template>