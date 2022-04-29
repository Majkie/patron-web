<template>
  <div class="text-slate-500 dark:text-slate-400 min-h-screen">
    <Header />
    
    <main class="flex-1 container flex-wrap justify-between items-center pt-32 pb-32">
        <aside class="grid md:grid-cols-8 gap-10">
            <div class="col-span-2">
                <div class="relative flex flex-col items-start justify-center w-full py-6 bg-white border rounded-lg border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                    <h3 class="hidden px-6 pb-3 text-xs font-semibold leading-4 tracking-wider text-slate-500 dark:text-slate-200 uppercase md:block">Settings</h3>

                    <ul class="space-y-2 w-full">
                        <li>
                            <NuxtLink to="/settings" class="flex relative w-full items-center px-6 py-3 text-sm font-medium leading-5 transition duration-150 ease-in-out group hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:text-slate-900 focus:bg-slate-100 dark:hover:text-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">
                                <PresentationChartBarIcon class="flex-shrink-0 w-5 h-5 mr-3 -ml-1" />
                                <span class="hidden truncate md:inline-block">Dashboard</span>
                                <span class="absolute left-0 block w-1 transition-all duration-300 ease-out bg-blue-500 h-full top-0" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-6">
                <slot />
            </div>
        </aside>
    </main>
  </div>
</template>

<script setup>
import { CogIcon, PresentationChartBarIcon } from '@heroicons/vue/outline'

useHead({
  bodyAttrs: {
    class: 'antialiased bg-slate-50 dark:bg-slate-900',
  },
})
</script>