export const state = () => ({
    user: null,
})

export const getters = {
    getUser(state) {
        return state.user
    },
    isLoggedIn(state) {
        return !!state.user
    },
    isAdmin(state) {
        return state.user && state.user.role && state.user.role === "admin"
    }
}

export const actions = {
    async login({commit}, payload) {
        await this.$axios.$post('/api/v1/users/login', payload)
            .then((response) => {
                commit('setUser', response)
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    async logout({commit}) {
        await this.$axios.$post('/api/v1/users/logout', null)
            .then(() => {
                commit('setUser', null)
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    async register({commit}, payload) {
        await this.$axios.$post('/api/v1/users/register', payload)
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    getAuthUser({commit, getters, state}) {
        const authUser = getters.user

        if (authUser) {
            return Promise.resolve(authUser)
        }

        return this.$axios.$get('/api/v1/users/me')
            .then((user) => {
                commit('setUser', user)
                return state.user
            })
            .catch((error) => {
                commit('setUser', null)
                return Promise.reject(error)
            })
    }
}

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    },
}