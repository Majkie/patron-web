<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Accounts</h1>

        <ElementsCardNotifcation status="info">
            <p>
                To be able to use the subscription features, you need to connect your Twitch account. If streamer prefers Patreon over our own payment gateway you need to also connect Patreon.
            </p>
        </ElementsCardNotifcation>

        <ElementsCard class="flex items-center justify-between gap-6">
            <div>
                <h2 class="text-lg font-bold tracking-tight">Twitch</h2>
                <p class="text-sm">Connected account: majciiik</p>
            </div>
            <div>
                <button class="inline-flex items-center justify-center font-medium transition-all ease-in-out duration-100 focus:outline-none focus:ring border rounded-md border-red-500 bg-red-500 text-white shadow hover:bg-red-400 hover:border-red-400 focus:border-red-700 focus:bg-red-600 px-3 py-2 text-sm">
                    Unlink Twitch
                </button>
            </div>
        </ElementsCard>

        <ElementsCard class="flex items-center justify-between gap-6">
            <div>
                <h2 class="text-lg font-bold tracking-tight">Patreon</h2>
                <p class="text-sm">Connect your Patreon account here to be able to get the most out of our application</p>
            </div>
            <div>
                <button class="inline-flex items-center justify-center font-medium transition-all ease-in-out duration-100 focus:outline-none focus:ring border rounded-md border-blue-600 bg-blue-600 text-white shadow hover:bg-blue-500 hover:border-blue-500 focus:border-blue-700 focus:bg-blue-600 px-3 py-2 text-sm">
                    Link Patreon
                </button>
            </div>
        </ElementsCard>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'Accounts',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>