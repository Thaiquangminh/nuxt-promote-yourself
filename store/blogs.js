export const state = () => {
    return {
        allBlogs: [],
        item: {}
    }
}

export const actions = {
    fetchAllBlogs({commit}) {
        this.$axios.$get('/api/v1/blogs')
            .then((blogs) => {
                commit('setAllBlogs', blogs)
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    fetchBlogBySlug({commit, state}, slug) {
        return this.$axios.$get(`/api/v1/blogs/s/${slug}`)
            .then(blog => {
                // commit
                commit('setBlog', blog)
                return state.item
            })
            .catch(error => Promise.reject(error))
    }
}

export const mutations = {
    setAllBlogs(state, blogs) {
        state.allBlogs = blogs
    },
    setBlog(state, blog) {
        state.item = blog
    }
}