<template>
  <div class="style">
    <h3>لیست فروشندگان</h3>
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
      </tr>

      <tr v-for="admin in admins" :key="admin">
        <td>{{ admin.id }}</td>
        <td>{{ admin.name }}</td>
        <td>{{ admin.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      admins: Array,
    };
  },
  created() {
    axios
      .get("/admins")
      .then((res) => {
        this.admins = res.data;
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




