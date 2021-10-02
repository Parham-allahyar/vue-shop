<template>
  <div class="style">
    <h3>لیست سفارشات</h3>
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>کد محصول</th>
        <th>نام محصول</th>
        <th>موجودی</th>
        <th>نام فروشنده</th>
        <th>قیمت</th>
      </tr>

      <tr v-for="product in products" :key="product">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <!-- <td>
          <router-link
            tag="button"
            :style="{ cursor: 'pointer' }"
            :to="{ path: '/user/info/' + user.id }"
            >مشاهده اطلاعات کاربر</router-link
          >
        </td> -->
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: Array,
    };
  },
  created() {
    axios
      .get("/products")
      .then((res) => {
        this.products = res.data;
        console.log(this.products)
      })
      .catch((err) => console.log(err));
  },
};
</script>



<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}

table td {
  border: 1px solid #e7e7e7;
  padding: 20px;
}

.style {
  margin-left: 4rem;
}
th {
  margin-top: 3rem;
  background-color: #85b3be;
  padding: 10px;
}
tr:nth-of-type(odd) {
  background: #fafafa;
}
</style>




