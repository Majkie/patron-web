<template>
  <div class="text-slate-500 dark:text-slate-400 min-h-screen">
    <Header />
    
    <main class="flex-1 container flex-wrap justify-between items-center pt-32 pb-32">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'antialiased bg-slate-50 dark:bg-slate-900',
  },
})
</script>