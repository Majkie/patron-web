<template>
  <nav
    class="fixed w-full top-0 bg-transparent px-2 sm:px-4 py-4 z-40 border-b border-slate-200 dark:border-slate-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://flowbite.com" class="flex items-center">
        <div class="mr-3 h-6 sm:h-9">

        </div>
        <span class="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">Flowbite</span>
      </a>
      <button type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd" />
        </svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto">
        <Menu />
      </div>
    </div>
  </nav>
</template>
