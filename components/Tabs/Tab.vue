<template>
    <div v-show="props.title === selectedTab">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps(['title'])

const selectedTab = inject('selectedTab')
</script>