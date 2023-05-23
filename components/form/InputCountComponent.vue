<template>
  <div>
    <input
        @input="handleEmitInputValue($event.target.value)"
        :maxLength="maxLength"
        type="text"
        placeholder="e.g. Amazing Course in Flutter!"
        class="input is-large"
    />
    <span class="icon is-small is-right">{{ inputCountLeft }}</span>
  </div>

</template>

<script>
export default {
  data() {
    return {
      inputLength: 0,
      maxLength: 50,
    }
  },
  computed: {
    inputCountLeft() {
      return this.maxLength - this.inputLength
    }
  },
  methods: {
    handleEmitInputValue(value) {
      this.$emit('input', value)
      this.inputLength = value.length
    }
  }
}
</script>