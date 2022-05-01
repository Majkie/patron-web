<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Subscriptions</h1>

        <h3 class="text-lg font-bold tracking-tight md:text-xl">Active Subscriptions</h3>

        <div class="grid grid-cols-4">
            <ElementsCard class="space-y-4">

            </ElementsCard>
        </div>

        <h3 class="text-lg font-bold tracking-tight md:text-xl">Expired Subscriptions</h3>

        <div class="grid grid-cols-4">
            <ElementsCard class="space-y-4">

            </ElementsCard>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'Subscriptions',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>