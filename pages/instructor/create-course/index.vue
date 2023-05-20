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
          <!--          <CreateStepOne v-show="currentStep === 1"/>-->
          <!--          <CreateStepTwo v-show="currentStep === 2"/>-->
          <keep-alive>
            <component
                :is="componentStep"
                @updateStepOneData="handleUpdateFormData"
                @updateStepTwoData="handleUpdateFormData"/>
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
import CreateStepOne from "@/components/instructor/CreateStepOne.vue";
import CreateStepTwo from "@/components/instructor/CreateStepTwo.vue";

export default {
  layout: 'instructor',
  components: {CreateStepTwo, CreateStepOne, Header},
  fetch({store}) {
    store.dispatch('categories/fetchCategories')
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
    },
    previousStep() {
      this.currentStep--
    },
    handleCreateCourse() {
      console.log(this.formData)
    },
    handleUpdateFormData(step) {
      this.formData = {...this.formData, title: step.data, category: step.data}
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