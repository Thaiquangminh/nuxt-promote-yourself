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
          <InputCountComponent v-model="form.title" @input="handleEmitData"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"
import InputCountComponent from "@/components/form/InputCountComponent.vue";

export default {
  components: {InputCountComponent},
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
      return !this.$v.form.$invalid && this.form.title !== ''
    }
  },
  methods: {
    handleEmitData() {
      this.$emit('updateStepOneData', {title: this.form.title, isValid: this.isValid})
    }
  }
}
</script>