export const state = () => {
    return {
        items: [],
        item: {}
    }
}

export const actions = {
    fetchBlogs({commit}) {
        this.$axios.$get('/api/v1/blogs/me')
            .then((blogs) => {
                commit('setBlogs', blogs)
            })
            .catch(error =>
                Promise.reject(error)
            )
    },
    fetchBlogById({commit}, id) {
        this.$axios.$get(`/api/v1/blogs/${id}`)
            .then((blog) => {
                commit('setBlog', blog)
            })
            .catch(error => Promise.reject(error))
    },
    createBlog({commit}, blogData) {
        this.$axios.$post('/api/v1/blogs', blogData)
            .then((blogs) => commit('setBlogs', blogs))
            .catch(error =>
                Promise.reject(error)
            )
    },
    updateBlog({commit}, {blogData, id}) {
        this.$axios.$patch(`/api/v1/blogs/${id}`, blogData)
            .then(blog => commit("setBlog", blog))
            .catch(error =>
                Promise.reject(error)
            )
    }
}

export const mutations = {
    setBlog(state, blog) {
        state.item = blog;
    },
    setBlogs(state, blogs) {
        state.items = blogs;
    },

}