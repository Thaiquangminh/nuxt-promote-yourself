<template>
  <div>
    <Header
        title="Manage your Blogs"
        exitLink="/"
    />
    <div class="instructor-blogs">
      <div class="container">
        <div class="section">
          <div class="header-block">
            <h2>Your Stories</h2>
            <div class="title-menu">
              <button @click="$router.push('/instructor/blog/create')" class="button">Write a story</button>
            </div>
          </div>
          <div class="tabs">
            <ul>
              <li><a>Drafts</a></li>
              <li><a>Published</a></li>
            </ul>
          </div>
          <div class="blogs-container">
            <template>
              <div>
                <div class="blog-card" v-for="blog in blogs" :key="blog._id"
                     :class="{featured: blog.featured}"
                >
                  <h2>{{ displayBlogTitle(blog) }}</h2>
                  <div class="blog-card-footer">
                    <span>
                      Last Edited: {{ blog.updatedAt | formatDate('LLL') }}
                    </span>
                    <dropdown :items="publicOptions(blog.featured)" @optionChanged="handleOption($event, blog)"/>
                    <!-- Dropdown with menu here -->
                  </div>
                </div>
                <div v-if="!haveBlog">You have no blog yet !!!</div>
              </div>
              <!-- In case of no drafts blogs  -->
              <!-- <div class="blog-error">
                No Drafts :(
              </div> -->
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/shared/Header.vue'
import {mapState} from "vuex";
import Dropdown from "@/components/shared/Dropdown.vue";
import {createPublishedOptions} from "@/components/instructor/options";

export default {
  data() {
    return {
      blogsData: [],
      haveBlog: false
    }
  },
  layout: 'instructor',
  components: {Dropdown, Header},
  created() {
    this.$store.dispatch('instructor/instructorBlog/fetchBlogs')
  },
  beforeMount() {
    this.$store.dispatch('instructor/instructorBlog/fetchBlogs')
  },
  computed: {
    ...mapState('instructor/instructorBlog', ['items']),
    blogs() {
      if (this.items.length === 0) {
        this.haveBlog = false
      } else {
        this.haveBlog = true
        return this.items
      }
    },

  },
  methods: {
    // handleNavigateBlog(id) {
    //   this.$router.push(`/instructor/blog/${id}`);
    // }
    handleOption(command, blog) {
      if (command === 'EDIT_BLOG') {
        this.$router.push(`/instructor/blog/${blog._id}`);
      }
      if (command === 'DELETE_BLOG') {
        this.confirmDelete(blog._id)
      }
      if (command === 'TOGGLE_FEATURE') {
        this.updateBlog(blog)
      }
    },
    updateBlog(blog) {
      this.$store.dispatch('instructor/blog/updatePublishedBlog')
      const featured = !blog.featured
      const featureStatus = featured ? 'Featured' : 'Un-Featured'
      this.$store.dispatch('instructor/instructorBlog/updateFeaturedBlog', {id: blog._id, featured: featured})
          .then(_ => this.$toasted.success(`Blog has been ${featureStatus}!`, {duration: 2000}))
    },
    confirmDelete(id) {
      const isConfirm = confirm('Are you sure you want to delete?')
      if (isConfirm) {
        this.$store.dispatch('instructor/instructorBlog/deleteBlog', id)
            .then(() => this.$store.dispatch('instructor/instructorBlog/fetchBlogs'))
      }
    },
    displayBlogTitle(blog) {
      return blog.title || blog.subtitle || 'Anonymous Blog'
    },
    publicOptions(isFeatured) {
      return createPublishedOptions(isFeatured)
    }
  }
}
</script>

<style scoped lang="scss">
.blog-error {
  font-size: 35px;
}

.blog-card {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;

  > h2 {
    font-size: 30px;
    font-weight: bold;
  }

  &-footer {
    color: rgba(0, 0, 0, 0.54);
  }

  &.featured {
    border-left: 5px solid #3cc314;
    padding-left: 10px;
    transition: border ease-out 0.2s;
  }
}

.header-block {
  display: flex;
  flex-direction: row;
  align-items: center;

  > h2 {
    font-size: 40px;
    font-weight: bold;
  }

  .title-menu {
    margin-left: auto;
  }
}
</style>