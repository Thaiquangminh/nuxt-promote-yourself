<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Target your Students</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multiple-input-component
            @addInputClicked="handleAddInput('wsl')"
            @removeInputClicked="handleRemoveInput($event,'wsl')"
            @updateLine="handleUpdateCourse($event, 'wsl')"
            :lines="course && course.wsl"
            label="What will students learn in your course ?"/>
        <multiple-input-component
            @addInputClicked="handleAddInput('requirements')"
            @removeInputClicked="handleRemoveInput($event,'requirements')"
            @updateLine="handleUpdateCourse($event, 'requirements')"
            :lines="course && course.requirements"
            label="What are the requirements for the course ?"/>
      </form>
    </div>
  </div>
</template>
<script>
import MultipleInputComponent from "@/components/form/MultipleInputComponent.vue";

export default {
  components: {MultipleInputComponent},
  props: {
    course: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleAddInput(field) {
      this.$store.commit('instructor/instructorCourse/addInputLine', field)
    },
    handleRemoveInput(index, field) {
      this.$store.commit('instructor/instructorCourse/removeInputLine', {field, index})
    },
    handleUpdateCourse({value, index}, field) {
      this.$store.dispatch('instructor/instructorCourse/updateInputLine', {value, index, field})
    }
  }
}
</script>