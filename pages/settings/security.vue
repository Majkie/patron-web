<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Security</h1>
    
        <ElementsCard>
            <form method="post" class="space-y-4">
                <div>
                    <label for="password">Current password</label>
                    <input type="password" id="password" class="w-full p-2 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300">
                </div>
                <div>
                    <label for="new_password">New password</label>
                    <input type="password" id="new_password" class="w-full p-2 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300">
                </div>
                <div>
                    <label for="new_password_confirmation">Confirm new password</label>
                    <input type="password" id="new_password_confirmation" class="w-full p-2 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300">
                </div>
                <div>
                    <button type="submit" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                        <span class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                            Update password
                        </span>
                    </button>
                </div>
            </form>
        </ElementsCard>

        <ElementsCard class="space-y-4">
            <h3 class="text-lg font-bold tracking-tight">Sessions</h3>

            <div class="flex items-center justify-between">
                <div>
                    Mac - Ostrava, Czech Republic
                </div>

                <div class="flex items-center">
                    <div class="text-sm text-slate-400 dark:text-slate-200">
                        Last used 2 days ago
                    </div>

                    <button class="cursor-pointer ml-6 text-sm text-red-500">
                        Log out
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
    title: 'Security',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>