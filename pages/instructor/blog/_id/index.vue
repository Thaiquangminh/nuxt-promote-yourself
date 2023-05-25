<template>
  <!-- Finish handling of URL -->
  <div>
    <Header
        title="Write your blog"
        exitLink="/instructor/blogs">
      <!-- TODO: Check if blog status is active -->
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <!-- TODO: Check blog validity before publishing -->
          <Modal
              openTitle="Publish"
              openBtnClass="button is-success is-medium is-inverted is-outlined"
              title="Review Details">
            <div>
              <div class="title">Once you publish blog you cannot change url to a blog.</div>
              <!-- Check for error -->
              <div>
                <div class="subtitle">Current Url is:</div>
                <article class="message is-success">
                  <div class="message-body">
                    <!-- Get here actual slug -->
                    <strong>some-slug</strong>
                  </div>
                </article>
              </div>
              <!-- <article class="message is-danger">
                <div class="message-body">
                  Display error here
                </div>
              </article> -->
            </div>
          </Modal>
        </div>
      </template>
      <!-- <template v-else #actionMenu>
        <div class="full-page-takeover-header-button">
          <Modal
            openTitle="Unpublish"
            openBtnClass="button is-success is-medium is-inverted is-outlined"
            title="Unpublish Blog">
            <div>
              <div class="title">Unpublish blog so it's no longer displayed in blogs page</div>
            </div>
          </Modal>
        </div>
      </template> -->
    </Header>
    <div class="blog-editor-container">
      <div class="container">
        <editor @editorMounted="initBlogContent" @editorUpdated="handleUpdateBlog"/>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from '~/components/editor'
import Header from '~/components/shared/Header'
import Modal from '~/components/shared/Modal'
import {mapState} from "vuex";

export default {
  layout: 'instructor',
  components: {
    Editor, Header, Modal
  },
  fetch({store, params}) {
    console.log('parent created !!!')
    console.log(this.blog)
    store.dispatch('instructor/instructorBlog/fetchBlogById', params.id)
  },
  computed: {
    ...mapState('instructor/instructorBlog', ['item']),
    blog() {
      return this.item
    }
  },
  methods: {
    initBlogContent(initContent) {
      if (this.blog && this.blog.content) {
        initContent(this.blog.content)
      }
    },
    handleUpdateBlog(blogData) {
      this.$store.dispatch('instructor/instructorBlog/updateBlog', {data: blogData, id: this.blog._id})
          .then(() => this.$toasted.success('Updated successfully', {duration: 2000}))
          .catch(() => this.$toasted.error('Update blog failed', {duration: 2000}))
    }
  }
}
</script>