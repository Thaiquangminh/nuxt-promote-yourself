<template>
  <div>
    <div>Something test</div>
    <div>{{ blog.title }}</div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  head() {
    return {
      title: this.blog.title,
      meta: [
        {hid: 'description', name: 'description', content: this.blog.description}
      ]
    }
  },

  computed: {
    ...mapState('blogs', ['blog']),
  },
  async fetch({store, params}) {
    store.dispatch('blogs/fetchBlogBySlug', params.slug);
  }
}
</script>
<style scoped lang="scss">
.blog-content, .blog-section-user {
  max-width: 800px;
  margin: 10px auto;
}
</style>