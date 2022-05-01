<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Settings</h1>
    
        <ElementsCard class="space-y-4">
            <h3 class="text-lg font-bold tracking-tight">Subscriptions preferences</h3>

            <RadioGroup v-model="form.subscriptionOption">
                <RadioGroupLabel class="sr-only">
                    Subscription option
                </RadioGroupLabel>
                <div class="relative bg-white rounded-md -space-y-px dark:bg-slate-700">
                    <RadioGroupOption v-for="(option, index) in subscriptionOptions" :key="option.value" :value="option.value" as="template" v-slot="{ checked, active }">
                        <div :class="[index === 0 ? 'rounded-tl-md rounded-tr-md' : '', index === subscriptionOptions.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-indigo-50 border-indigo-200 z-10 dark:bg-indigo-600 dark:border-indigo-500' : 'border-slate-200 dark:border-slate-600', 'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 focus:outline-none']">
                            <div class="flex items-center text-sm">
                                <span :class="[checked ? 'bg-indigo-600 dark:bg-indigo-700 border-transparent' : 'bg-white border-slate-300 dark:bg-slate-700 dark:border-slate-600', active ? 'ring-2 ring-indigo-50 dark:ring-slate-800' : '']" class="h-4 w-4 rounded-full border flex items-center justify-center" aria-hidden="true">
                                    <span class="rounded-full bg-white dark:bg-slate-700 w-1.5 h-1.5" />
                                </span>
                                <div class="ml-3">
                                    <RadioGroupLabel as="span" class="text-slate-900 dark:text-slate-100 font-bold">{{ option.label }}</RadioGroupLabel>
                                    <RadioGroupDescription class="text-slate-800 dark:text-slate-300">
                                        {{ option.description }}
                                    </RadioGroupDescription>
                                </div>
                            </div>
                        </div>
                    </RadioGroupOption>
                </div>
            </RadioGroup>

            <div>
                <button type="submit" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                    <span class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                        Update
                    </span>
                </button>
            </div>
        </ElementsCard>
    </div>
</template>

<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption, RadioGroupDescription } from '@headlessui/vue'

definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'Settings',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})

const subscriptionOptions = [
    {
        value: 'patreon',
        label: 'Patreon',
        description: 'We will sync your Patreon account with Twitch and our application to serve content to your subscribers.',
    },
    {
        value: 'flowbite',
        label: 'Flowbite',
        description: 'Viewers will be able to subscribe to your channel through Flowbite payments to serve content to your subscribers.',
    },
    {
        value: 'both',
        label: 'Both',
        description: 'Viewers will be able to subscribe on Patreon or our payment gateway.'
    },
    {
        value: 'none',
        label: 'None',
        description: 'Viewers will not be able to subscribe to your channel and/or get subscription benefits. You can still use channel emotes.'
    }
]   

const form = reactive({
    subscriptionOption: 'patreon'
})
</script>
