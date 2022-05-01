<template>
    <ul
        class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium uppercase font-mono">
        <li v-for="(item, index) in menu" :key="index">
            <NuxtLink :to="item.path" v-slot="{ isActive }">
                <ClientOnly>
                    <span class="block py-2 pr-4 pl-3 rounded md:p-0 transition-colors"
                        :class="isActive ? 'text-black dark:text-white' : 'text-slate-700 dark:text-slate-300 dark:hover:text-white'">
                        {{ item.name }}
                    </span>
                </ClientOnly>
            </NuxtLink>
        </li>
        <li v-if="!auth.isAuthenticated">
            <NuxtLink to="/login"
                class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition-all ease-in-out">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in-out bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                </span>
            </NuxtLink>
        </li>
        <li v-else>
            <NuxtLink to="/dashboard" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition-all ease-in-out">
                <span class="relative px-5 py-2.5 transition-all ease-in-out bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Dashboard
                </span>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
const auth = useAuth()

const menu = ref([
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Pro',
        path: '/pro'
    }
])
</script>
