<template>
  <nav class="navbar is-active" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" to="/">
        <h1 class="brand-title">Promo-Yourself</h1>
      </a>
      <!-- Adds click to open -->
      <!-- Adds active class -->
      <a @click="isActive = !isActive"
         role="button"
         class="navbar-burger burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Adds active class -->
    <div id="navbarBasicExample"
         class="navbar-menu"
         :class="{'is-active': isActive}">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>
        <nuxt-link to="/courses" class="navbar-item">
          Courses
        </nuxt-link>
        <nuxt-link to="/blogs" class="navbar-item">
          Blogs
        </nuxt-link>
        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
        <nuxt-link to="/cv" class="navbar-item">
          Cv
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isLoggedIn">
              <figure class="image avatar is-48x48 m-r-sm">
                <img class="is-rounded" :src="getUser.avatar">
              </figure>
              <div class="m-r-sm m-b-sm">
                Welcome {{ getUser.username }}
              </div>
              <!-- If Admin -->
              <button
                  v-if="isAdmin" class="button is-link is-outlined"
                  @click="handleNavigateInstructor">
                Instructor
              </button>
              <a class="button is-primary" @click="handleLogout">
                Logout
              </a>
            </template>
            <template v-else>
              <nuxt-link to="/register" class="button is-primary">
                Sign up
              </nuxt-link>
              <nuxt-link to="/login" class="button is-light">
                Log in
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters({
      'getUser': 'auth/getUser',
      'isLoggedIn': 'auth/isLoggedIn',
      'isAdmin': 'auth/isAdmin'
    })
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async handleLogout() {
      await this.logout();
      await this.$router.push('/login')
    },
    handleNavigateInstructor() {
      this.$router.push('/instructor')
    },
  }
}
</script>


<style lang="scss" scoped>
.brand-title {
  font-size: 35px;
  font-weight: bold;
}

.navbar-brand {
  padding-right: 30px;
  @media screen and (max-width: 1023px) {
    padding-right: 0px;
  }
}

.nuxt-link-exact-active {
  border-bottom: 4px solid #00D1B2FF;
  font-weight: bold;
}

.navbar-item {
  min-width: 100px;
  display: flex;
  justify-content: center;
}

.avatar {
  margin-right: 5px;
}
</style>
