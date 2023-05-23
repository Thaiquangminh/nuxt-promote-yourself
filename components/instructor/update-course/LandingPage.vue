<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Course Landing Page</p>
    </header>
    <div class="card-content card-section">
      <form>
        <div class="field">
          <label class="label">Course title</label>
          <div class="control">
            <input
                @input="handleUpdatePage($event.target.value, 'slug')"
                :value="course.title"
                class="input is-medium"
                type="text"
                placeholder="Dart and Flutter From Zero to Hero ">
          </div>
        </div>
        <div class="field">
          <label class="label">Course subtitle</label>
          <div class="control">
            <input
                @input="handleUpdatePage($event.target.value, 'subtitle')"
                :value="course.subtitle"
                class="input is-medium"
                type="text"
                placeholder="Build real mobile Application for Android and iOS.">
          </div>
        </div>
        <div class="field">
          <label class="label">Course description</label>
          <div class="control">
                      <textarea
                          @input="handleUpdatePage($event.target.value, 'description')"
                          :value="course.description"
                          class="textarea is-medium"
                          type="text"
                          placeholder="Write something catchy about the course">
                      </textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select :value="course.category" @change="handleUpdatePage($event.target.value, 'category')">
              <option v-for="category in categories" :key="category._id" :value="category">{{
                  category.name
                }}
              </option>
              <!-- <option> </option> -->
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Course Image</label>
          <div class="columns">
            <div class="column">
              <figure class="image is-4by2">
                <img
                    :src="course.image">
              </figure>
            </div>
            <div class="column centered">
              <div class="control">
                <input
                    @input="handleUpdatePage($event.target.value, 'image')"
                    :value="course.image"
                    class="input is-medium"
                    type="text"
                    placeholder="https://images.unsplash.com/photo-1498837167922-ddd27525d352">
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Course Link</label>
          <div class="control">
            <input
                @input="handleUpdatePage($event.target.value, 'productLink')"
                :value="course.productLink"
                class="input is-medium"
                type="text"
                placeholder="https://www.udemy.com/vue-js-2-the-full-guide-by-real-apps-vuex-router-node">
          </div>
        </div>
        <div class="field">
          <label class="label">Course Video Link</label>
          <div class="control">
            <input
                @input="handleUpdatePage($event.target.value, 'promoVideoLink')"
                :value="course.promoVideoLink"
                class="input is-medium"
                type="text"
                placeholder="https://www.youtube.com/watch?v=WQ9sCAhRh1M">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MultiComponentMixin from "@/mixins/MultiComponentMixin";
import {mapState} from "vuex";

export default {
  created() {
    console.log(this.categories)
  },
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('categories', ['items']),
    categories() {
      return this.items
    }
  },
  mixins: [MultiComponentMixin],
}
</script>