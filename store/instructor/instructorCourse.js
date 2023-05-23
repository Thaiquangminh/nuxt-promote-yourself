export const state = () => ({
    items: [],
    item: {},
    canUpdateCourse: false,
})

export const getters = {
    getInstructorCourses(state) {
        return state.items
    },
    getCourseById(state) {
        return state.item
    }
}

export const actions = {
    fetchInstructionCourses({commit}) {
        this.$axios.$get('/api/v1/products/user-products')
            .then(response => {
                commit('setCourses', response)
            })
            .catch(err => Promise.reject(err))
    },
    fetchCourseById({commit}, courseId) {
        return this.$axios.$get(`/api/v1/products/${courseId}`)
            .then(response => {
                commit('setCourse', response)
            })
            .catch(err => Promise.reject(err))

    },
    updateInputLine({commit}, {field, index, value}) {
        commit('updateInputLine', {field, index, value})
        commit('setCanUpdateCourse', true)
    },
    updatePageInput({commit}, {field, value}) {
        commit('updatePageInput', {field, value})
        commit('setCanUpdateCourse', true)
    },
    updateCourse({commit, state}) {
        const course = state.item
        this.$axios.$patch(`/api/v1/products/${course._id}`, course)
            .then((response) => {
                commit('setCourse', response)
                commit('setCanUpdateCourse', false)

            })
            .catch(err => Promise.reject(err))
    }

}

export const mutations = {
    setCourses(state, courses) {
        state.items = courses
    },
    setCourse(state, course) {
        state.item = course
    },
    // logic target student
    addInputLine(state, field) {
        state.item[field].push({value: ''})
    },
    removeInputLine(state, {field, index}) {
        state.item[field].splice(index, 1)
    },
    updateInputLine(state, {field, index, value}) {
        state.item[field][index].value = value
    },

    // logic landing page + price + status
    updatePageInput(state, {field, value}) {
        state.item[field] = value
    },

    // update course
    setCanUpdateCourse(state, payload) {
        state.canUpdateCourse = payload
    }

}