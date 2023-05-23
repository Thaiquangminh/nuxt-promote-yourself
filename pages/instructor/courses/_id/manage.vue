<template>
  <div class="manage-page">
    <Header
        title="Some very nice course name"
        exitLink="/instructor/courses">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
              :disabled="!canUpdateCourse"
              @click="handleUpdateCourse"
              class="button is-primary is-inverted is-medium is-outlined">
            Save
          </button>
        </div>
      </template>
    </Header>
    <div class="course-manage">
      <div class="container">
        <div class="columns">
          <div class="column is-3 p-lg">
            <!-- <aside class="menu is-hidden-mobile"> -->
            <aside class="menu">
              <p class="menu-label">
                Course Editing
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display TargetStudents -->
                  <a @click.prevent="navigateToStep(1)"
                     :class="activeClass(1)">Target Your Students
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a @click.prevent="navigateToStep(2)"
                     :class="activeClass(2)">
                    Course Landing Page
                  </a>
                </li>
              </ul>
              <p class="menu-label">
                Course Managment
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display Price -->
                  <a @click.prevent="navigateToStep(3)"
                     :class="activeClass(3)">
                    Price
                  </a>
                </li>
                <li>
                  <!-- display Status -->
                  <a @click.prevent="navigateToStep(4)"
                     :class="activeClass(4)">
                    Status
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <keep-alive>
              <component :is="activeComponent" :course="course"/>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Status from "@/components/instructor/update-course/Status.vue";
import TargetStudent from "@/components/instructor/update-course/TargetStudent.vue";
import LandingPage from "@/components/instructor/update-course/LandingPage.vue";
import Price from "@/components/instructor/update-course/Price.vue";
import Header from "@/components/shared/Header.vue";
import {mapState} from "vuex";

export default {
  components: {Header},
  created() {
    console.log(this.course)
    this.$store.dispatch("instructor/instructorCourse/fetchCourseById", this.$route.params.id)
    this.$store.dispatch('categories/fetchCategories')
  },
  // fetch({store, params}) {
  //   store.dispatch("instructor/instructorCourse/fetchCourseById", params.id)
  // },
  data() {
    return {
      steps: [TargetStudent, LandingPage, Price, Status],
      activeStep: 1,
    }
  },
  computed: {
    ...mapState('instructor/instructorCourse', ['canUpdateCourse']),
    activeComponent() {
      return this.steps[this.activeStep - 1]
    },
    course() {
      return this.$store.getters['instructor/instructorCourse/getCourseById']
    }
  },
  methods: {
    navigateToStep(step) {
      this.activeStep = step
    },
    activeClass(step) {
      return this.activeStep === step ? 'is-active' : ''
    },
    handleUpdateCourse() {
      this.$store.dispatch('instructor/instructorCourse/updateCourse')
          .then(() => this.$toasted.success('Update course successfully', {duration: 3000}))
          .then(() => this.$router.push('/instructor/courses'))
          .catch(() => this.$toasted.error('Update course failed', {duration: 3000}))
    }
  },
  layout: 'instructor'
}

</script>

<style lang="scss">
.manage-page {
  .label-info {
    font-size: 13px;
    color: gray;
    font-style: italic;
  }

  .course-manage {
    padding-top: 40px;

    .menu {
      padding-top: 30px;

      &-label {
        font-size: 20px;
        color: black;
      }

      &-list {
        > li {
          font-size: 18px;
          margin-top: 10px;

          > a {
            &.is-active {
              border-left: 3px solid #58529f;
              background-color: transparent;
              color: inherit;
            }
          }
        }
      }
    }

    .card {
      &-section {
        padding: 40px;
      }

      &-header {
        &-title {
          padding: 0;
          color: #8F99A3;
          font-weight: 400;
          font-size: 25px;
        }
      }
    }
  }
}
</style>