export const state = () => ({
    items: [],
})

export const actions = {
    fetchCourses({commit}) {
        return this.$axios.$get('/api/v1/products')
            .then(courses => {
                commit('setItems', {resource: 'course', items: courses}, {root: true})
            })
    },

    createCourses(_, payload) {
        return this.$axios.$post('/api/v1/products', payload)
    }
}
