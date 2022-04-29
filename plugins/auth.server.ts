export default defineNuxtPlugin(async (nuxtApp) => {
    const token = useCookie('api_token')
    const auth = useAuth(nuxtApp.$pinia)

    if (token.value) {
        auth.loggedIn = true
        auth.token = token.value
    }
})