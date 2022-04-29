<template>
    <div class="flex flex-col space-y-12 px-2 sm:px-0 w-full max-w-lg mx-auto">
        <div class="p-8 lg:p-16 rounded-3xl bg-white dark:bg-slate-800 space-y-6">
            <div>
                <h2 class="text-slate-800 dark:text-slate-100 text-3xl font-bold">Log in to your account</h2>
            </div>

            <div class="grid gap-6">
                <form @submit.prevent="login" method="post">
                    <div class="mb-4">
                        <label for="email">E-mail</label>
                        <input v-model="form.email" id="email" type="email" class="w-full p-2 rounded-lg dark:bg-slate-700" autocomplete="email" />
                    </div>
                    <div class="mb-4">
                        <label for="password">Password</label>
                        <input v-model="form.password" id="password" type="password" class="w-full p-2 rounded-lg dark:bg-slate-700" />
                    </div>
                    <div>
                        <button type="submit" class="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                            <span class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                                Login
                            </span>
                        </button>
                    </div>
                </form>
                <hr class="dark:border-slate-700" />
                <div class="flex flex-col space-y-4">
                    <a href="#" class="text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700">
                        Login using Twitch
                    </a>
                    <a href="#" class="text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700">
                        Login using Patreon
                    </a>
                </div>
                <div class="flex flex-col lg:flex-row lg:inline-flex lg:justify-between space-y-4 lg:space-y-0">
                    <a href="#" class="text-slate-600 hover:text-slate-900 dark:hover:text-slate-200 dark:text-slate-300">Forgot your password?</a>
                    <NuxtLink to="/register" class="text-slate-600 hover:text-slate-900 dark:hover:text-slate-200 dark:text-slate-300">Don't have an account?</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const auth = useAuth()

definePageMeta({
    middleware: ['guest']
})

const form = reactive({
        email: '',
        password: '',
    })

function login() {
    $fetch('/api/auth/login', {
        method: 'POST',
        body: form
    }).then(res => {
        if (res.status === 200) {
            auth.login(res.user)
            auth.token = res.token

            navigateTo('/dashboard')
        }
    })
}
</script>