export const state = () => {
    return {
        allBlogs: [],
        item: {},
        featuredBlogs: []
    }
}

export const actions = {
    fetchAllBlogs({commit}) {
        this.$axios.$get('/api/v1/blogs')
            .then((data) => {
                const {blogs} = data;
                commit('setAllBlogs', blogs)
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    fetchFeaturedBlogs({commit}) {
        this.$axios.$get('/api/v1/blogs?filter[featured]=true')
            .then((data) => {
                const {blogs} = data
                commit('setFeaturedBlogs', blogs)
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
    },
    setFeaturedBlogs(state, blogs) {
        state.featuredBlogs = blogs
    }
}