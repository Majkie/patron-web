<template>
    <div class="space-y-6">

        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>

        <div class="grid md:grid-cols-2 gap-6">
            <ElementsCard>
                <div class="space-y-2">
                    <h2 class="text-lg sm:text-xl font-bold tracking-tight">Welcome, User Name</h2>
                </div>
            </ElementsCard>
            <ElementsCard>
                <div class="space-y-2">
                    Add some social sites etc. here so people can contact us.
                </div>
            </ElementsCard>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
            <ElementsCard>
                <div class="space-y-2">
                    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-200">
                        <span>New subscribers</span>
                    </div>
                    <div class="text-3xl">
                        17
                    </div>
                    <div class="flex items-center space-x-1 text-sm font-medium text-green-600">
                        <span>11% increase</span>
                        <TrendingUpIcon class="w-4 h-4" />
                    </div>
                </div>
            </ElementsCard>
            <ElementsCard>
                <div class="space-y-2">
                    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-200">
                        <span>Total subscribers</span>
                    </div>
                    <div class="text-3xl">
                        1321
                    </div>
                    <div class="flex items-center space-x-1 text-sm font-medium text-red-600">
                        <span>21% decrease</span>
                        <TrendingDownIcon class="w-4 h-4" />
                    </div>
                </div>
            </ElementsCard>
            <ElementsCard>
                <div class="space-y-2">
                    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-200">
                        <span>Daily revenue</span>
                    </div>
                    <div class="text-3xl">
                        45$
                    </div>
                    <div class="flex items-center space-x-1 text-sm font-medium text-green-600">
                        <span>7$ increase</span>
                        <TrendingUpIcon class="w-4 h-4" />
                    </div>
                </div>
            </ElementsCard>
            <ElementsCard>
                <div class="space-y-2">
                    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-200">
                        <span>Monthly revenue</span>
                    </div>
                    <div class="text-3xl">
                        564$
                    </div>
                    <div class="flex items-center space-x-1 text-sm font-medium text-red-600">
                        <span>113$ decrease</span>
                        <TrendingDownIcon class="w-4 h-4" />
                    </div>
                </div>
            </ElementsCard>
            <ElementsCard>
                <div class="space-y-2">
                    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-200">
                        <span>Used icons</span>
                    </div>
                    <div class="text-3xl">
                        46/60
                    </div>
                    <NuxtLink to="/twitch/icons" class="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:underline">
                        <span>Set your icons here</span>
                        <LinkIcon class="w-4 h-4" />
                    </NuxtLink>
                </div>
            </ElementsCard>
            <ElementsCard>
                <div class="space-y-2">
                    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-200">
                        <span>Active subscriptions</span>
                    </div>
                    <div class="text-3xl">
                        3
                    </div>
                    <NuxtLink to="/twitch/icons" class="flex items-center space-x-1 text-sm font-medium">
                        <span>Streamers you are subscribed to</span>
                    </NuxtLink>
                </div>
            </ElementsCard>
        </div>
    </div>
</template>

<script setup>
import { TrendingUpIcon, TrendingDownIcon, LinkIcon } from '@heroicons/vue/solid'

definePageMeta({
    middleware: ['auth'],
    layout: 'dashboard'
})

useHead({
    title: 'Dashboard',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>