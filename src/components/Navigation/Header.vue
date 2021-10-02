<template>
  <div>
    <div>
      <ul class="header">
        <li @mouseover="opensubcategory1" @mouseleave="closesubcategory1">
          دسته بندی ۱
          <div v-if="submenu1" class="sub-menu1">de</div>
        </li>

        <li @mouseover="opensubcategory2" @mouseleave="closesubcategory2">
          دسته بندی ۲
          <div v-if="submenu2" class="sub-menu2">de</div>
        </li>

        <li @mouseover="opensubcategory3" @mouseleave="closesubcategory3">
          دسته بندی ۳
          <div v-if="submenu3" class="sub-menu3">de</div>
        </li>

        <li @mouseover="opensubcategory4" @mouseleave="closesubcategory4">
          دسته بندی ۴
          <div v-if="submenu4" class="sub-menu4">de</div>
        </li>

        <li @mouseover="opensubcategory5" @mouseleave="closesubcategory5">
          دسته بندی ۵
          <div v-if="submenu5" class="sub-menu5">de</div>
        </li>

        <li @mouseover="opensubcategory6" @mouseleave="closesubcategory6">
          دسته بندی ۶
          <div v-if="submenu6" class="sub-menu6">de</div>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      submenu1: false,
      submenu2: false,
      submenu3: false,
      submenu4: false,
      submenu5: false,
      submenu6: false,
    };
  },
  methods: {
    opensubcategory1() {
      //Query
      console.log("wsws");
      this.submenu = true;
    },
    closesubcategory1() {
      this.submenu1 = false;
    },

    opensubcategory2() {
      //Query
      console.log("wsws");
      this.submenu = true;
    },
    closesubcategory2() {
      this.submenu1 = false;
    },

    opensubcategory3() {
      //Query
      console.log("wsws");
      this.submenu = true;
    },
    closesubcategory3() {
      this.submenu1 = false;
    },

    opensubcategory4() {
      //Query
      console.log("wsws");
      this.submenu = true;
    },
    closesubcategory4() {
      this.submenu1 = false;
    },

    opensubcategory5() {
      //Query
      console.log("wsws");
      this.submenu = true;
    },
    closesubcategory5() {
      this.submenu1 = false;
    },

    opensubcategory6() {
      //Query
      console.log("wsws");
      this.submenu = true;
    },
    closesubcategory6() {
      this.submenu1 = false;
    },
  },
};
</script>





<style  scoped>
.header {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: #fff;
}

ul > li {
  margin: 2rem;
  font-size: 0.8rem;
}

.sub-menu {
  margin-top: 3rem;
  position: absolute;
  width: 60vw;
  background: #fff;
  height: 80vh;
  z-index: 1000;
}
</style>