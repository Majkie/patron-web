<template>
    <div class="flex flex-col space-y-12 px-2 sm:px-0 w-full max-w-lg mx-auto">
        <div class="p-8 lg:p-16 rounded-3xl bg-white dark:bg-slate-800 space-y-6">
            <div>
                <h2 class="text-slate-800 dark:text-slate-100 text-3xl font-bold">Register to your account</h2>
            </div>

            <div class="grid gap-6">
                <form @submit.prevent="register" method="post" class="space-y-4">
                    <div>
                        <label for="name">Name</label>
                        <input id="name" type="text" v-model="form.name" class="w-full p-2 rounded-lg dark:bg-slate-700"
                            autocomplete="name" required />
                    </div>
                    <div>
                        <label for="email">E-mail</label>
                        <input id="email" type="email" v-model="form.email"
                            class="w-full p-2 rounded-lg dark:bg-slate-700" autocomplete="email" required />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input id="password" type="password" v-model="form.password"
                            class="w-full p-2 rounded-lg dark:bg-slate-700" required />
                    </div>
                    <div>
                        <label for="passwordConfirmation">Password confirmation</label>
                        <input id="passwordConfirmation" type="password" v-model="form.passwordConfirmation"
                            class="w-full p-2 rounded-lg dark:bg-slate-700" required />
                    </div>
                    <div>
                        <button type="submit"
                            class="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                            <span
                                class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                                Register
                            </span>
                        </button>
                    </div>
                </form>
                <hr class="dark:border-slate-700" />
                <div class="flex flex-col space-y-4">
                    <a href="#"
                        class="text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700">
                        Register using Twitch
                    </a>
                    <a href="#"
                        class="text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700">
                        Register using Patreon
                    </a>
                </div>
                <div class="flex flex-col">
                    <NuxtLink to="/login"
                        class="text-slate-600 hover:text-slate-900 dark:hover:text-slate-200 dark:text-slate-300">
                        Already have an account?</NuxtLink>
                </div>

                <div class="flex items-center justify-center">
                    <span for="link-checkbox" class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">By signing up you agree to the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['guest']
})

const auth = useAuth()

useHead({
    title: 'Register'
})

const form = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    toc: false,
})

function register() {
    $fetch('/api/auth/register', {
        method: 'POST',
        body: form,
    }).then((res) => {
        if (res.status === 201) {
            auth.login(res.user)
            auth.token = res.token
    
            navigateTo('/dashboard')
        }
    })
}
</script>