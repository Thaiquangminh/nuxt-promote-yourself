<template>
  <div>
    <Header title="Create your courses">
      <div class="full-page-takeover-header-button">
        <nuxt-link
            to="#"
            class="button is-medium is-light">
          New Course
        </nuxt-link>
        <nuxt-link
            to="/"
            class="button is-danger is-medium is-inverted is-outlined">
          Student
        </nuxt-link>
      </div>
    </Header>
    <div class="courses-page">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h1 class="courses-page-title">Your Courses</h1>
            <!-- Iterate Courses -->
            <div class="tile is-ancestor" v-for="course in instructorCourses" :key="course._id">
              <div class="tile is-parent is-12">
                <!-- Navigate to course manage page -->
                <nuxt-link :to="`/instructor/courses/${course._id}/manage`"
                           class="tile tile-overlay-container is-child box">
                  <div class="tile-overlay">
                    <span class="tile-overlay-text">
                      Update Course
                    </span>
                  </div>
                  <div class="columns">
                    <div class="column is-narrow">
                      <figure class="image is-4by2 is-128x128">
                        <img :src="course.image || 'https://via.placeholder.com/150'">
                      </figure>
                    </div>
                    <div class="column">
                      <p class="title">{{ course.title }}</p>
                      <p class="subtitle">{{ course.subtitle || 'No subtitle provided yet' }}</p>
                      <span class="tag"
                            :class="createStatusClass(course.status)">{{ course.status }}</span>
                    </div>
                    <div class="column is-narrow flex-centered">
                      <div class="price-title">
                        {{ course.price || 0 }} $
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/shared/Header.vue";

export default {
  beforeMount() {
    this.$store.dispatch('instructor/instructorCourse/fetchInstructionCourses')
  },
  fetch({store}) {
    store.dispatch('instructor/instructorCourse/fetchInstructionCourses')
  },
  layout: 'instructor',
  middleware: 'admin',
  components: {Header},
  computed: {
    instructorCourses() {
      return this.$store.getters["instructor/instructorCourse/getInstructorCourses"]
    },
  },
  methods: {
    createStatusClass(status) {
      if (!status) return ''
      if (status === 'published') return 'is-success'
      if (status === 'active') return 'is-primary'
      if (status === 'inactive') return 'is-warning'
      if (status === 'deleted') return 'is-danger'
    }
  }
}
</script>
<style scoped lang="scss">
.tile-image {
  float: left;
}

.price-title {
  font-size: 40px;
  font-weight: bold;
}

.flex-centered {
  align-items: center;
  justify-content: flex-end;
  display: flex;
}

.tile-overlay-container {
  position: relative;

  &:hover {
    box-shadow: none;
  }

  &:hover > .tile-overlay {
    background-color: rgba(255, 255, 255, .9);
  }

  &:hover .tile-overlay-text {
    visibility: visible;
  }

  .tile-overlay {
    position: absolute;
    display: block;
    height: auto;
    bottom: 0;
    width: auto;
    right: 0;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;

    &-text {
      color: #58529f;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 18px;
      white-space: pre-wrap;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
}

.courses-page {
  padding-top: 60px;

  &-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 20px;
  }
}
</style>