<template>
  <div>
    <div class="desktop">
      <button v-on:click="SidebarChenge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>

    <div class="mobile">
      <button v-on:click="SidebarChenge">
        <img src="./../../../assets/list.svg" alt="*" />
      </button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    SidebarChenge() {
      this.$store.commit("SidebarChenge");
      //this.$store.state.SideBarStatus = !this.$store.state.SideBarStatus
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 800px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: flex !important;
    background-color: #ffffff;
    height: 50px;
  }
}

.mobile {
  background: #ffffff;
  min-height: 10vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  
}

button {
  background-color: #ffffff;
  border: none;
  margin-right: 20px;
}

.layout {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 900;
}
</style>