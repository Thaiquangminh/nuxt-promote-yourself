import Vue from "vue";

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
    },
    deleteBlog({commit}, blogId) {
        this.$axios.$delete(`/api/v1/blogs/${blogId}`)
            .then(() => commit('deleteBlog', blogId))
            .catch(error =>
                Promise.reject(error)
            )
    },
    updateFeaturedBlog({commit, state}, {id, featured}) {
        return this.$axios.$patch(`/api/v1/blogs/${id}`, {featured})
            .then(blog => {
                const index = state.items.findIndex(b => b._id === id)
                commit('setFeaturedBlog', {index, blog})
                return blog
            })
            .catch(error => Promise.reject(error))
    },
}

export const mutations = {
    setBlog(state, blog) {
        state.item = blog;
        state.items.push(blog);
    },
    setBlogs(state, blogs) {
        state.items = blogs;
    },
    deleteBlog(state, blogId) {
        state.items.filter(item => {
            return item.id !== blogId;
        })
    },
    setFeaturedBlog(state, {index, blog}) {
        Vue.set(state.items, index, blog)
    },

}