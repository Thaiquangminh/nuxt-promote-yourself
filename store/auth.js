export const state = () => ({
    user: null,
})

export const getters = {
    getUser(state) {
        console.log(state.user)
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
                console.log(response)
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
    }
}

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
}