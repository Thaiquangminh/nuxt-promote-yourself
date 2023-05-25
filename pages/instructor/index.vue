<template>
  <div class="instructor-page">
    <Header
        title="Choose your admin page"
        exitLink="/"
    >
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <nuxt-link
              to="/instructor/create-course"
              class="button is-medium is-light">
            New Course
          </nuxt-link>
          <nuxt-link
              to="/"
              class="button is-danger is-medium is-inverted is-outlined">
            Student
          </nuxt-link>
        </div>
      </template>
    </Header>

    <div class="centered">
      <div class="columns">
        <!-- Go to /instructor/courses -->
        <div class="box" @click="handleNavigateCourses">
          <div>
            Courses
          </div>
        </div>
        <!-- Go to /instructor/blogs -->
        <div class="box" @click="handleNavigateBlogs">
          <div>
            Blogs
          </div>
        </div>
        <!-- Go to /instructor/heroes -->
        <div class="box" @click="() => {}">
          <div>
            Heroes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/shared/Header.vue";

export default {
  components: {Header},
  middleware: 'admin',
  methods: {
    handleNavigateCourses() {
      this.$router.push('/instructor/courses')
    },
    handleNavigateBlogs() {
      this.$router.push('/instructor/blogs')
    }
  },
  layout: 'instructor'
}
</script>
<style scoped lang="scss">
.instructor-page {
  .centered {
    margin-top: 100px;
    display: flex;
    flex-direction: row; /* make main axis horizontal (default setting) */
    justify-content: center; /* center items horizontally, in this case */
    align-items: center; /* center items vertically, in this case */
  }
}

.box {
  height: 300px;
  width: 300px;
  display: flex;
  margin: 5px;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #58529f;
    color: white;
    transition: background-color 0.3s ease-out;
  }

  > div {
    align-self: center;
    font-size: 50px;
    font-weight: bold;
  }
}
</style>