<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Profile</h1>

        <ElementsCard class="space-y-4">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" class="w-full p-2 rounded-lg dark:bg-slate-700">
            </div>
            <div>
                <label for="email">E-mail</label>
                <input type="email" id="email" class="w-full p-2 rounded-lg dark:bg-slate-700">
            </div>
            <div>
                <label for="about">About</label>
                <textarea id="about" class="w-full p-2 rounded-lg dark:bg-slate-700" rows="4"></textarea>
            </div>
            <div>
                <button type="submit" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                    <span class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                        Save
                    </span>
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
    title: 'Profile',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>