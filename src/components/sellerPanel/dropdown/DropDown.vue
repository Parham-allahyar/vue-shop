<template>
  <div>
    <button class="button" v-on:click="show()">{{ title }}</button>
    <ul v-if="dropdownStatus" class="list">
      <router-link
        v-for="link in links"
        tag="li"
        :key="link"
        :style="{ cursor: 'pointer' }"
        :to="{ path: '/sellerpanel/' + link.link }"
        >{{ link.name }}</router-link
      >
    </ul>
  </div>
</template>



<script>
export default {
  props: {
    title: String,
    links: [],
  },

  data() {
    return {
      dropdownStatus: false,
      isActive: false,
    };
  },
  methods: {
    show() {
      this.dropdownStatus = !this.dropdownStatus;
    },
  },
};
</script>



<style>
.button {
  border: none;
  width: 90%;
  height: 40px;
  background-color: #fff;
  margin-top: 1rem;
  margin-right: 0.5rem;
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
  text-align: right;
  font-family: "Vazir", sans-serif;
  border: none;
}

.list {
  margin-top: 0;
  padding-top: 0;
  list-style-type: none;
  margin-left: 5%;
    
}

.list > li {
  margin-top: 0.5rem;
}
</style>
