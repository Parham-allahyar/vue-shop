<template>
  <div>
    <section class="cotainer style">
      <div class="image-items">
        <p class="info">ورود یا عضویت کاربران</p>
      </div>
      <div class="input-items in">
        <!-- Email -->
        <div >
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.email.$error }"
          >
            <label class="form__label">email</label>
            <input
              class="form__input"
              :value="email"
              @change="setEmail($event.target.value)"
            />
          </div>
          <div class="error" v-if="!$v.email.between">
            Must be between {{ $v.email.$params.between.min }} and
            {{ $v.email.$params.between.max }}
          </div>
        </div>
        <!-- Password -->
        <div >
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.password.$error }"
          >
            <label class="form__label"> password</label>
            <input
              class="form__input"
              :value="password"
              @change="setPassword($event.target.value)"
            />
          </div>
          <div class="error" v-if="!$v.password.between">
            Must be between {{ $v.password.$params.between.min }} and
            {{ $v.password.$params.between.max }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import { between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      between: between(20, 30),
    },
    password: {
      between: between(20, 30),
    },
  },

  methods: {
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
  },
};
</script>



<style scoped>
.style {
  overflow-y: hidden;
}
@media only screen and (min-width: 800px) {
  .cotainer {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas: "input-items image-items";
    height: 100vh;
  }

  .image-items {
    background-color: #fff;
    grid-area: input-items;

    background: #74ebd5; 
    background: -webkit-linear-gradient(
      to top,
      #acb6e5,
      #74ebd5
    ); 
    background: linear-gradient(
      to top,
      #acb6e5,
      #74ebd5
    ); 
    align-items: center;
  }

  .input-items {
    grid-area: image-items;
  }
  .info {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  .in {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-size: 2rem; */
  }
}
@media only screen and (max-width: 800px) {
  .cotainer {
    display: grid;

    grid-template-rows: 1fr 3fr;
    height: 100vh;
    grid-template-areas:
      "image-items"
      "input-items";
  }
  .input-items {
    background-color: #fff;
    grid-area: input-items;
  }

  .image-items {
    background: #74ebd5; 
    background: -webkit-linear-gradient(
      to top,
      #acb6e5,
      #74ebd5
    ); 
    background: linear-gradient(
      to top,
      #acb6e5,
      #74ebd5
    ); 

    grid-area: image-items;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.form-group {
  display: inline-block;
  /* height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; */
}
.form__input,
.form__textarea {
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  color: #374853;
  line-height: 2.375rem;
  min-height: 2.375rem;
  position: relative;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background: #fff;
  padding: 0 0.8125rem;
  width: 100%;
  transition: border 0.1s ease;
  box-sizing: border-box;
  width: 100%;
}
.form__input,
.form__textarea {
  position: relative;
  margin-bottom: 2rem;
}
.form__label,
.form__label--inline {
  font-size: 0.8125rem;
  color: #4b6372;
  margin-bottom: 0.3125rem;
  margin-left: 0.875rem;
  display: block;
  font-family: "Lato", sans-serif;
}
.form-group--error .form__label,
.form-group--error .form__label--inline {
  color: #f04124;
}
.form-group--error + .form-group__message,
.form-group--error + .error {
  display: block;
  color: #f57f6c;
}

.form-group__message,
.error {
  font-size: 0.75rem;
  line-height: 1;
  display: none;
  margin-left: 14px;
  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem;
}

.form-group--error input,
.form-group--error textarea,
.form-group--error input:focus,
.form-group--error input:hover {
  border-color: #f79483;
}
.form-group--alert,
.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}

input {

  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
</style>