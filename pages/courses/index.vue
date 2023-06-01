<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">All Courses</h1>
        <div class="columns is-multiline">
          <!-- iterate columns with v-for and don't forget :key -->
          <div
              v-for="course in items"
              :key="course._id"
              class="column is-one-quarter">
            <!-- pass a course as a prop to course-card -->
            <course-card :course="course"/>
          </div>
        </div>
      </div>
    </section>
    `
  </div>
</template>

<script>
import {mapState} from "vuex";
import CourseCard from "@/components/CourseCard.vue";

export default {
  components: {CourseCard},
  head() {
    return {
      title: "Amazing tech courses"
    }
  },
  created() {
    this.$store.dispatch('course/fetchCourses')
  },
  computed: {
    ...mapState('course', ['items'])
  }

}
</script>