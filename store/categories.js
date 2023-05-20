export const state = () => {
    return {
        items: []
    }
}

export const actions = {
    fetchCategories({commit}) {
        this.$axios.$get('/api/v1/categories')
            .then(response => commit('setCategories', response))
    }
}

export const mutations = {
    setCategories(state, payload) {
        state.items = payload
    }
}