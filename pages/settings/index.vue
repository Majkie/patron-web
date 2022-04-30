<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Settings</h1>
    
        <ElementsCard>
            
        </ElementsCard>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'Settings',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>
