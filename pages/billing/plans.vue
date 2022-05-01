<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Plans</h1>
            <p class="text-sm">This function is relevant only if you use our payment gateway for subscriptions. Otherwise, ignore default settings here.</p>
        </div>

        <ElementsCard>
            <h3 class="text-lg font-bold tracking-tight">Create subscription plan</h3>

        </ElementsCard>

        <h1 class="text-lg font-bold tracking-tight md:text-xl">Active subscription plans</h1>
        <div class="grid grid-cols-3">
            <ElementsCard>
            </ElementsCard>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'Plans',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>