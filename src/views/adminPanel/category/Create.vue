<template>
  <div>
    <!-- Name -->
    <div>
      <div class="form-group">
        <label class="form__label">نام</label>
        <input class="form__input" v-model="form.name" />
      </div>
    </div>

    <!-- Description -->
    <div>
      <div class="form-group">
        <label class="form__label"> توضیحات</label>
        
      </div>
      <button v-on:click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        parent_id: "",
        guard: "admin",
        categorys: "",
      },
    };
  },


  created() {
    axios
      .get("/categorys")
      .then((response) => {
        this.categorys = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    submit() {
      axios
        .post("/category/create", this.form)
        // .then((response) => {})
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>







<style scoped>

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
  width: 20rem;
  transition: border 0.1s ease;
  box-sizing: border-box;
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
















