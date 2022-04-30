<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">API Keys</h1>
        
        <ElementsCardNotifcation status="info">
            <p>
                API tokens allow third-party services to authenticate with our application on your behalf.
            </p>
        </ElementsCardNotifcation>

        <ElementsCard>
            <form method="post" class="space-y-4">
                <div>
                    <label for="key_name">Create a new API Key</label>
                    <input type="text" id="key_name" placeholder="My MacBook Pro" class="w-full p-2 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:placeholder-slate-500">
                </div>
                <div>
                    <button type="submit" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                        <span class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                            Create new key
                        </span>
                    </button>
                </div>
            </form>
        </ElementsCard>

        <ElementsCard class="space-y-4">
            <h3 class="text-lg font-bold tracking-tight">Active API Keys</h3>

            <div class="flex items-center justify-between">
                <div>
                    Token name
                </div>

                <div class="flex items-center">
                    <div class="text-sm text-slate-400 dark:text-slate-200">
                        Last used 2 days ago
                    </div>

                    <button class="cursor-pointer ml-6 text-sm text-red-500">
                        Delete
                    </button>
                </div>
            </div>
        </ElementsCard>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'API Keys',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>