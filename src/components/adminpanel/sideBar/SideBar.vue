<template>
  <div>
    <div v-if="SideBarStatus" class="sidebar">
      <!-- Users -->
      <DropDown
        v-bind:links="[{ link: 'user/index', name: 'لیست کاربران' }]"
        v-bind:title="users"
      ></DropDown>
      <!-- Roles -->
      <DropDown
        v-bind:links="[
          { link: 'role/index', name: 'لیست نقشها' },
          { link: 'role/create', name: 'افزودن نقش' },
        ]"
        v-bind:title="roles"
      ></DropDown>
      <!-- Permissions -->
      <DropDown
        v-bind:links="[
          { link: 'permission/index', name: 'لیست مجوزهای دسترسی' },
          { link: 'permission/create', name: 'افزودن مجوز دسترسی' },
          { link: 'permission/update', name: 'بروزرسانی مجوز' },
        ]"
        v-bind:title="permissions"
      ></DropDown>
      <!-- Sellers -->
      <DropDown
        v-bind:links="[
          { link: 'seller/index', name: 'لیست فروشندگان' },
         
        ]"
        v-bind:title="sellers"
      ></DropDown>
      <!-- Admins -->
      <DropDown
        v-bind:links="[
          { link: 'admin/index', name: 'لیست مدیران' },
          { link: 'admin/create', name: ' افزودن مدیر' },
        ]"
        v-bind:title="admins"
      ></DropDown>
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
      users: "کاربران",
      sellers: "فروشندگان",
      admins: "مدیران",
      products: "محصولات",
      orders: "سفارشات",
      roles: "نقشها",
      permissions: "مجوز دسترسی",
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