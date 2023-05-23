<template>
  <div class="full-page-takeover-window">
    <div class="full-page-takeover-page">
      <Header
          :title="`Step 1 of 2`"
          exitLink="/instructor/courses"/>
      <div class="full-page-takeover-header-bottom-progress">
        <div :style="{width: progress}"
             class="full-page-takeover-header-bottom-progress-highlight">
        </div>
      </div>
      <div class="course-create full-page-takeover-container">
        <div class="container">
          <keep-alive>
            <component
                :is="componentStep"
                ref="componentStep"
                @updateStepOneData="handleUpdateStepOneData"
                @updateStepTwoData="handleUpdateStepTwoData"/>
          </keep-alive>
        </div>
        <div class="full-page-footer-row">
          <div class="container">
            <div class="full-page-footer-col">
              <div v-if="!isFirstStep">
                <a @click.prevent="previousStep" class="button is-large">Previous</a>
              </div>
              <div v-else class="empty-container">
              </div>
            </div>
            <div class="full-page-footer-col">
              <div>
                <button
                    v-if="!isLastStep"
                    :disabled="!canGoNextStep"
                    @click.prevent="nextStep"
                    class="button is-large float-right">
                  Continue
                </button>
                <button
                    :disabled="!canGoNextStep"
                    v-if="isLastStep"
                    @click="handleCreateCourse"
                    class="button is-success is-large float-right">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue'
import CreateStepOne from "@/components/instructor/create-course/CreateStepOne.vue";
import CreateStepTwo from "@/components/instructor/create-course/CreateStepTwo.vue";

export default {
  layout: 'instructor',
  components: {CreateStepTwo, CreateStepOne, Header},
  created() {
    this.$store.dispatch('categories/fetchCategories')
  },

  data() {
    return {
      currentStep: 1,
      steps: ['CreateStepOne', 'CreateStepTwo'],
      canGoNextStep: false,
      formData: {
        title: '',
        category: ''
      }
    }
  },
  computed: {
    stepLength() {
      return this.steps.length
    },
    isFirstStep() {
      return this.currentStep === 1
    },
    isLastStep() {
      return this.currentStep === this.stepLength
    },
    progress() {
      return this.isLastStep ? '100%' : '50%'
    },
    componentStep() {
      return this.steps[this.currentStep - 1]
    }
  },
  methods: {
    nextStep() {
      this.currentStep++
      console.log(this.$refs.componentStep)
      this.$nextTick(() => {
        this.canGoNextStep = this.$refs.componentStep.isValid
      })
    },
    previousStep() {
      this.currentStep--
      console.log(this.$refs.componentStep)
      this.canGoNextStep = true
    },
    async handleCreateCourse() {
      await this.$store.dispatch('course/createCourses', this.formData)
      await this.$router.push('/instructor/courses')
    },
    handleUpdateStepOneData(step) {
      this.formData = {...this.formData, title: step.title}
      this.canGoNextStep = step.isValid
    },
    handleUpdateStepTwoData(step) {
      this.formData = {...this.formData, category: step.category}
      this.canGoNextStep = step.isValid
    }
  }
}
</script>

<style lang="scss">
.float-right {
  float: right;
}

.empty-container {
  width: 1px;
  height: 1px;
}

.course-create {
  &-wrapper {
    margin-top: 60px;
    text-align: center;
  }

  &-headerText {
    font-weight: 500;
    line-height: 1.1;
    margin-top: 21px;
    margin-bottom: 10.5px;
    font-size: 36px;
    font-weight: 300;
  }

  &-subtitle {
    font-size: 24px;
    font-weight: 300;
    margin-top: 21px;
    margin-bottom: 10.5px;
  }

  &-form {
    margin-top: 60px;

    &-group {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-field {
      min-width: 552px;
    }

    .select {
      width: 100%;

      > select {
        width: 100%;
      }
    }
  }
}
</style>