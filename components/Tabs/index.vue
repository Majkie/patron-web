<template>
<div class="space-y-6">
    <div class="text-sm font-medium text-center text-slate-500 border-b border-slate-200 dark:text-slate-400 dark:border-slate-700">
        <ul class="flex flex-wrap -mb-px">
            <li v-for="(title, index) in tabTitles" :key="index" class="mr-2">
                <a @click.prevent="selectedTab = title" :class="title === selectedTab ? 'border-blue-600 active dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'" class="inline-block p-4 rounded-t-lg border-b-2 cursor-pointer">
                    {{ title }}
                </a>
            </li>
        </ul>
    </div>

    <div>
        <slot />
    </div>

</div>
</template>

<script setup>
const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTab = ref(tabTitles.value[0])

provide('selectedTab', selectedTab)
</script>
