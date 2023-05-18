<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://via.placeholder.com/300">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                      class="input is-large"
                      v-model="form.username"
                      @blur="$v.form.username.$touch()"
                      type="text"
                      placeholder="Username">
                  <div class="form-error" v-if="$v.form.username.$error">
                    <span class="help is-danger" v-if="!$v.form.username.required">Username is required</span>
                    <span class="help is-danger" v-if="!$v.form.username.minLength">Username minimum length is 6</span>

                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                      class="input is-large"
                      v-model="form.name"
                      @blur="$v.form.name.$touch()"
                      type="text"
                      placeholder="Name">
                  <div class="form-error" v-if="$v.form.name.$error">
                    <span class="help is-danger" v-if="!$v.form.name.required">Name is required</span>
                    <span class="help is-danger" v-if="!$v.form.name.minLength">Name minimum length is 6</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                      class="input is-large"
                      v-model="form.email"
                      @blur="$v.form.email.$touch()"
                      type="email"
                      placeholder="Your Email">
                  <div class="form-error" v-if="$v.form.email.$error">
                    <span class="help is-danger" v-if="!$v.form.email.required">Email is required</span>
                    <span class="help is-danger" v-if="!$v.form.email.emailValidate">Email address is not valid</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                      class="input is-large"
                      v-model="form.avatar"
                      @blur="$v.form.avatar.$touch()"
                      type="text"
                      placeholder="Avatar"
                      autocomplete="">
                  <div class="form-error" v-if="$v.form.avatar.$error">
                    <span class="help is-danger" v-if="!$v.form.avatar.url">Url format is not valid!</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                      class="input is-large"
                      v-model="form.password"
                      @blur="$v.form.password.$touch()"
                      type="password"
                      placeholder="Your Password"
                      autocomplete="new-password">
                  <div class="form-error" v-if="$v.form.password.$error">
                    <span class="help is-danger" v-if="!$v.form.password.required">Password is required</span>
                    <span class="help is-danger"
                          v-if="!$v.form.password.minLength">Password minimum length is 6 letters</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                      class="input is-large"
                      v-model="form.passwordConfirmation"
                      @blur="$v.form.passwordConfirmation.$touch()"
                      type="password"
                      placeholder="Password Confirmation"
                      autocomplete="off">
                  <div class="form-error" v-if="$v.form.passwordConfirmation.$error">
                    <span class="help is-danger"
                          v-if="!$v.form.passwordConfirmation.required">Password is required</span>
                    <span class="help is-danger" v-if="!$v.form.passwordConfirmation.sameAsPassword">Password confirmation should be the same as password</span>
                  </div>
                </div>
              </div>
              <button
                  @click.prevent="handleRegister"
                  type="button"
                  class="button is-block is-info is-large is-fullwidth"
                  :disabled="$v.form.$invalid"
              >
                Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- VALIDATORS Assignment -->
<!-- username: required, minLength(6) -->
<!-- name: required, minLength(6) -->
<!-- email: required, email -->
<!-- avatar: url -->
<!-- password: required, minLength(6) -->
<!-- passwordConfirmation: required, sameAs('password') -->
<!-- create @blur validation -->
<!-- disable register button if form is $invalid -->
<script>
import {required, email, minLength, url, sameAs} from "vuelidate/lib/validators"

export default {
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6)
      },
      name: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        emailValidate: email
      },
      avatar: {
        url
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    handleRegister() {
      this.$v.form.$touch()
    }
  }
}
</script>

<style scoped>
.hero.is-success {
  background: #F2F6FA;
}

.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.box {
  margin-top: 5rem;
}

.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}

.avatar img {
  height: 128px;
  width: 128px;
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
}

p.subtitle {
  padding-top: 1rem;
}
</style>
