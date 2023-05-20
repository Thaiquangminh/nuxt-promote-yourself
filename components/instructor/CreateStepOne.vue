<template>
  <div class="course-create-wrapper">
    <div class="course-create-headerText">
      Please choose title of your Course.
    </div>
    <h2 class="course-create-subtitle">
      No worries, you can change title later.
    </h2>
    <form class="course-create-form">
      <div class="course-create-form-group">
        <div class="field course-create-form-field control has-icons-right">
          <input
              @input="handleEmitData"
              v-model="form.title"
              :maxLength="50"
              type="text"
              placeholder="e.g. Amazing Course in Flutter!"
              class="input is-large">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"

export default {
  data() {
    return {
      form: {
        title: ''
      },
    }
  },
  validations: {
    form: {
      title: required
    }
  },
  computed: {
    isValid() {
      return !this.$v.form.$invalid
    }
  },
  methods: {
    handleEmitData() {
      this.$emit('updateStepOneData', {data: this.form.title, isValid: this.isValid})
    }
  }
}
</script>