<template>
  <div>
    <Header
        title="Write your Blogs"
        exitLink="/instructor/blogs"
    />
    <div class="blog-editor-container">
      <div class="container">
        <editor @editorUpdated="saveBlog"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/shared/Header'
import Editor from '~/components/editor'
import {mapActions} from "vuex";

export default {
  layout: 'instructor',
  components: {
    Header, Editor
  },
  methods: {
    ...mapActions('instructor/instructorBlog', ['createBlog']),
    saveBlog(blogData) {
      this.createBlog(blogData)
          .then(() => this.$router.push('/instructor/blogs'))

    }
  }
}
</script>
<style lang="scss">
.blog-editor-container {
  padding-top: 60px;
}
</style>