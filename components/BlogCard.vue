<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ blog.title || "No title yet" }}</p>
          <p class="subtitle is-6"><i>{{ blog.subtitle || "No subtitle yet" }}</i></p>
        </div>
      </div>
      <div class="content">
        {{ blog.description }}
        <br>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="'#'" class="card-footer-item">Read More</nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>