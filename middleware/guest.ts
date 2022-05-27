export default defineNuxtRouteMiddleware((to, from) => {
    const authenticated = useAuth()
    
    console.log('Guest middleware');
    

    if (authenticated.isAuthenticated) {
        return navigateTo('/dashboard')
    }
})