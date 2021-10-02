<template>
  <div class="style">
    <h3>لیست آدرس ها</h3>
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>استان</th>
        <th>شهر</th>
        <th>خیابان</th>
        <th>کوچه</th>
        <th>پلاک</th>
        <th>کد پستی</th>
        <th>توضیحات</th>
      </tr>

      <tr v-for="address in addresss" :key="address">
        <td>{{ address.id }}</td>
        <td>{{ address.province }}</td>
        <td>{{ address.city }}</td>
        <td>{{ address.street }}</td>
        <td>{{ address.alley }}</td>
        <td>{{ address.plaque }}</td>
        <td>{{ address.zip_code }}</td>
        <td>{{ address.description }}</td>

      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      addresss: Array,
    };
  },
  created() {
    axios
      .get("/user/address", {})
      .then((res) => {
         
        this.addresss = res.data;
       
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
