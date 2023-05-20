export const state = () => ({
    items: [],
})

export const getters = {
    getInstructorCourses(state) {
        return state.items
    }
}

export const actions = {
    fetchInstructionCourses({commit}) {
        this.$axios.$get('/api/v1/products/user-products')
            .then(response => {
                commit('setCourses', response)
            })
            .catch(err => Promise.reject(err))
    }
}

export const mutations = {
    setCourses(state, payload) {
        state.items = payload
    }
}