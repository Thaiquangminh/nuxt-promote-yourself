<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img
            src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1694&q=80"
            alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ course.title | shortenText(45) }}</p>
          <p class="subtitle is-6"><i>{{ course.author.name | shortenText(45) }}</i></p>
        </div>
      </div>
      <div class="content">
        {{ course.subtitle | shortenText(200) }}
        <br>
      </div>
      <div class="price-box">
        <span class="price">150$</span>
        <span class="disc-price">9.99$</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a target="_" :href="'#'" class="card-footer-item">Enroll</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {
      },

    }
  },
}
</script>

<style lang="scss" scoped>
// card item
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}

.price-box {
  text-align: right;

  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }

  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}

// card item end
</style>