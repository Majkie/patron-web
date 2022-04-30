<template>
    <div class="relative flex-1 p-6 rounded-2xl" :class="status">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps(['status'])

const status = computed(() => ({
    'bg-green-700 text-white': props.status === 'success',
    'bg-red-700 text-white': props.status === 'error',
    'bg-yellow-700 text-white': props.status === 'warning',
    'bg-blue-700 text-white': props.status === 'info',
}))
</script>