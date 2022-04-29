import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
    state: () => ({
        user: null,
        loggedIn: false,
        token: null,
    }),

    getters: {
        isAuthenticated: (state) => state.loggedIn,
        loggedInUser: (state) => state.user,
    },

    actions: {
        login(user) {
            this.user = user
            this.loggedIn = true
        }
    }
})