<template>
  <div class="style">
    <section>
      <div class="right-side">
        <h2>ثبت نام فروشندگان</h2>
      </div>
      <div class="left-side">
        <form @submit.prevent="submit">
          <!-- Name -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <input
              v-model.trim="$v.name.$model"
              type="text"
              placeholder="نام"
              @change="setName($event.target.value)"
            />
            <span class="error" v-if="!$v.name.required"
              >این فیلد ضروری است</span
            >
          </div>
          <!-- Email -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.email.$error }"
          >
            <input
              v-model.trim="$v.email.$model"
              type="text"
              placeholder="ایمیل"
              @change="setEmail($event.target.value)"
            />
            <span class="error" v-if="!$v.email.required"
              >این فیلد ضروری است</span
            >
            <span class="error" v-if="!$v.email.email"
              >این فیلد به صورت ایمیل است</span
            >
          </div>
          <!-- Password -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.password.$error }"
          >
            <input
              v-model.trim="$v.password.$model"
              type="text"
              placeholder="کلمه عبور"
              @change="setPassword($event.target.value)"
            />

            <span class="error" v-if="!$v.password.minLength"
              >کلمه عبور باید حداقل ۸ کاراکتر باشد</span
            >
            <span class="error" v-if="!$v.password.required"
              >این فیلد ضروری است</span
            >
          </div>

          <button type="submit"><span>ثبت نام</span></button>
        </form>
      </div>
    </section>
  </div>
</template>





<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
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

    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      axios
        .post(
          "http://127.0.0.1:8000/register/seller",
          {
            name: this.name,
            email: this.email,
            password: this.password,
          },
          {}
        )
        .then((res) => localStorage.setItem("seller_token", res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>






  

<style scoped>
.style {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Button Style */

button {
  border-width: 1px;
  width: 10rem;
  height: 3rem;
  /*border-radius*/
  border-radius: 100px;
  background: #fff;
  margin-right: 1.5rem;
  border: 5px solid #6fb07f;
  font-size: 1.2rem;
}
button > span {
  color: #6fb07f;
}

/* error */
.form-group {
  display: inline-block;
}
.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}
.form-group--error .form__label,
.form-group--error .form__label--inline {
  color: #f04124;
}

.form-group--error + .error {
  display: block;
  color: #f57f6c;
}
.form-group__message,
.error {
  font-size: 0.75rem;
  line-height: 1;
  display: inline-block;
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



/* Form Styls */

form {
  grid-area: a;
  align-self: center;
  justify-self: center;
}

input {
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
  transition: border 0.1s ease;
  box-sizing: border-box;
  width: 15rem;
  margin-bottom: 1rem;
}

/* Mobile Styles */
@media only screen and (max-width: 800px) {
  section {
    display: grid;
    grid-template-rows: 1fr 2fr;
    height: 100%;
  }
  .left-side {
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    gap: 10px;
    grid-template-areas:
      ". a a ."
      ". a a .";
  }

  .right-side {
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
    height: 100%;
  }
}

/* DeskTop Styles */
@media only screen and (min-width: 800px) {
  section {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    height: 100%;
  }
  .left-side {
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    gap: 10px;
    grid-template-areas:
      ". a a ."
      ". a a .";
  }

  .right-side {
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  }
}
</style>




