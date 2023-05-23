<template>
  <div class="group-input">
    <!-- Send a label through props -->
    <label class="label">{{ label }}</label>
    <!-- Iterate lines here -->
    <div class="multi-field field" v-for="(line, index) in lines" :key="index">
      <div class="control multi-control">
        <div class="multi-input-container">
          <input
              @input="updateLine($event.target.value, index)"
              :value="line.value"
              class="input is-medium multi-input"
              type="text"
              placeholder="Enter something here"
          >
        </div>
        <div class="btn-container">
          <!-- Delete the line -->
          <button
              @click.prevent="emitDeleteInput(index)"
              type="button"
              class="button is-danger multi-button">
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- Add the Line -->
    <button
        @click="emitAddInput"
        type="button"
        class="m-b-sm button is-medium is-link is-outlined">
      Add an answer
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    lines: {
      type: Array,
      required: true
    }
  },
  computed: {
    canDeleteLine() {
      return this.lines && this.lines.length > 1
    },
    // logic restrict add line : last line must have value
    canAddLine() {
      return (this.lines.length > 0 && this.lines[this.lines.length - 1].value !== '')
          || this.lines && this.lines.length === 0
    }
  },
  methods: {
    emitAddInput() {
      this.canAddLine && this.$emit('addInputClicked');
    },
    emitDeleteInput(index) {
      this.canDeleteLine && this.$emit('removeInputClicked', index);
    },
    updateLine(value, index) {
      this.$emit('updateLine', {value, index});
    }
  }
}
</script>

<style scoped lang="scss">
.group-input {
  margin-bottom: 20px;
}

.multi-input {
  float: left;
  width: 100%;
}

.multi-button {
  height: inherit;
}

.multi-input-container {
  display: flex;
  flex: 1;
}

.btn-container {
  display: flex;
  opacity: 0;
}

.multi-control {
  display: flex;

  &:hover > .btn-container {
    opacity: 1;
  }
}
</style>