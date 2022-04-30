<template>
  <div class="text-slate-500 dark:text-slate-400 min-h-screen">
    <Header />
    
    <main class="flex-1 container flex-wrap justify-between items-center pt-32 pb-32">
        <aside class="grid md:grid-cols-8 gap-10">
            <div class="col-span-2 space-y-6">
                <div v-for="(menu, index) in menus" :key="'menu-' + index" class="relative flex flex-col items-start justify-center w-full py-6 bg-white border rounded-lg border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                    <h3 class="hidden px-6 pb-3 text-xs font-semibold leading-4 tracking-wider text-slate-500 dark:text-slate-200 uppercase md:block">{{ titles[index] }}</h3>

                    <ul class="space-y-2 w-full">
                        <li v-for="item in menu">
                            <NuxtLink :to="item.path" v-slot="{ isActive }" class="flex relative w-full items-center px-6 py-3 text-sm font-medium leading-5 transition duration-150 ease-in-out group hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:text-slate-900 focus:bg-slate-100 dark:focus:bg-slate-700 dark:hover:text-slate-200 dark:text-slate-300 dark:hover:bg-slate-700">
                                <component :is="item.icon" :class="isActive ? 'text-slate-400 dark:text-slate-200' : 'text-slate-500 dark:text-slate-300'" class="flex-shrink-0 w-5 h-5 mr-3 -ml-1" />
                                <span :class="isActive ? 'text-slate-500 dark:text-slate-100' : 'text-slate-400 dark:text-slate-300'" class="hidden truncate md:inline-block">
                                    {{ item.name }}
                                </span>
                                <span :class="isActive ? 'bg-blue-500 h-full top-0' : 'top-1/2 bg-gray-300 group-hover:top-0 h-0 group-hover:h-full'" class="absolute left-0 block w-1 transition-all duration-300 ease-out" />
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
import { CogIcon, FilmIcon, PresentationChartBarIcon, KeyIcon, CodeIcon, UserIcon, CreditCardIcon, ArchiveIcon, ClipboardListIcon, PhotographIcon, IdentificationIcon, CakeIcon } from '@heroicons/vue/outline'

useHead({
  bodyAttrs: {
    class: 'antialiased bg-slate-50 dark:bg-slate-900',
  },
})

const titles = ref([
  'Settings',
  'Twitch',
  'Billing',
])

const menus = ref([
  [
    {
      name: 'Dashboard',
      icon: PresentationChartBarIcon,
      path: '/dashboard',
    },
    {
      name: 'Profile',
      icon: UserIcon,
      path: '/settings/profile',
    },
    {
      name: 'Accounts',
      icon: IdentificationIcon,
      path: '/settings/accounts',
    },
    {
      name: 'Security',
      icon: KeyIcon,
      path: '/settings/security',
    },
    {
      name: 'API Keys',
      icon: CodeIcon,
      path: '/settings/api-keys',
    },
    {
      name: 'Settings',
      icon: CogIcon,
      path: '/settings',
    }
  ],
  [
    {
      name: 'Chat Icons',
      icon: PhotographIcon,
      path: '/twitch/chat-icons',
    },
    {
      name: 'Subscriber icons',
      icon: CakeIcon,
      path: '/twitch/subscriber-icons',
    },
    {
      name: 'Alerts',
      icon: FilmIcon,
      path: '/twitch/alerts',
    }
  ],
  [
    {
      name: 'Plans',
      icon: ClipboardListIcon,
      path: '/billing/plans',
    },
    {
      name: 'Subscriptions',
      icon: CreditCardIcon,
      path: '/billing/subscriptions',
    },
    {
      name: 'Invoices',
      icon: ArchiveIcon,
      path: '/billing/invoices',
    }
  ]
])
</script>