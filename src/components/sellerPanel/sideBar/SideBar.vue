<template>
  <div>
    <div v-if="SideBarStatus" class="sidebar">
      <!-- Products -->
      <DropDown
        v-bind:links="[
          { link: 'product/index', name: 'لیست محصولات' },
          { link: 'product/create', name: 'افزودن محصول' },
          { link: 'product/update', name: 'بروزرسانی محصول' },
        ]"
        v-bind:title="products"
      ></DropDown>

      <!-- Orders -->
      <DropDown
        v-bind:links="[{ link: 'order/index', name: 'لیست سفارشات' }]"
        v-bind:title="orders"
      ></DropDown>
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
import DropDown from "./../dropdown/DropDown.vue";
export default {
  computed: mapState(["SideBarStatus"]),
  components: { DropDown },
  data() {
    return {
   
      products: "محصولات",
      orders: "سفارشات",
    
    };
  },
};
</script>


<style scoped>
.sidebar {
  background: #fff; /* fallback for old browsers */

  height: 100vh;
  width: 30vw;
  z-index: 999;
  border-radius: 20px;
}

@media only screen and (min-width: 800px) {
  .sidebar {
    background: #fff; /* fallback for old browsers */

    height: 100vh;
    width: 20vw;
    z-index: 999;
  }
}
</style>