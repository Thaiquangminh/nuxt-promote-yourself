<template>
  <div>
    <hero/>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns">
          <div class="column is-one-third" v-for="course in courses" :key="course._id">
            <!-- CARD-ITEM -->
            <course-card :course="course"/>
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns is-multiline">
          <div v-for="blog in blogs" class="column is-one-quarter">
            <blog-card
                :key="blog._id"
                :blog="blog"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import CourseCard from "~/components/CourseCard.vue";
import Hero from "~/components/shared/Hero.vue";
import BlogCard from "~/components/BlogCard.vue";
import {mapState} from 'vuex'

export default {
  components: {BlogCard, Hero, CourseCard},
  computed: {
    ...mapState({
      courses: state => state.course.items,
      blogs: state => state.blogs.featuredBlogs
    })
  },
  async fetch({store}) {
    await store.dispatch('course/fetchCourses')
    await store.dispatch('blogs/fetchFeaturedBlogs')
  }

}
</script>

<style scoped lang="scss">
// Home page
.links {
  padding-top: 15px;
}
</style>