<template>
  <div class="style">
    <h3>آدرس های کاربر</h3>
    <h1>{{ aaa }}</h1>
    <table style="width: 100%">
      <thead>
        <tr>
          <th>#</th>
          <th>استان</th>
          <th>شهر</th>
          <th>خیابان</th>
          <th>کوچه</th>
          <th>پلاک</th>
          <th>کد پستی</th>
        </tr>
      </thead>

      <tbody v-for="users in userInfo" :key="users">
        <tr v-for="user in users.addresses" :key="user">
          <td>{{ user.id + 1 }}</td>
          <td>{{ user.province }}</td>
          <td>{{ user.city }}</td>
          <td>{{ user.street }}</td>
          <td>{{ user.alley }}</td>
          <td>{{ user.plaque }}</td>
          <td>{{ user.plaque }}</td>
        </tr>
      </tbody>
    </table>

    <h3>نظرات کاربر</h3>
    <table style="width: 100%">
      <thead>
        <tr>
          <th>#</th>
          <th>نظر</th>
        </tr>
      </thead>

      <tbody v-for="users in userInfo" :key="users">
        <tr v-for="user in users.creats" :key="user">
          <td>{{ user.id + 1 }}</td>
          <td>{{ user.comment }}</td>
        </tr>
      </tbody>
    </table>

    <h3>سفارشات کاربر</h3>
    <table style="width: 100%">
      <thead>
        <tr>
          <th>#</th>
          <th>نظر</th>
        </tr>
      </thead>

      <tbody v-for="users in userInfo" :key="users">
        <tr v-for="user in users.creats" :key="user">
          <td>{{ user.id + 1 }}</td>
          <td>{{ user.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: Array,
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8001/user/info/" + this.$route.params.id)
      .then((response) => {
        this.userInfo = response.data;
        console.log(this.userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
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



