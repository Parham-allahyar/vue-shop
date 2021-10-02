<template>
  <div class="style">
    <h3>لیست کاربران</h3>

    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>نام</th>
        <th>نام خانوادگی</th>
        <th>شماره موبایل</th>
        <th>ایمیل</th>
        <th>مشاهده اطلاعات کاربر</th>
      </tr>

      <tr v-for="user in users" :key="user">
        <td>{{ user.id }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.phone_number }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link
            tag="button"
            :style="{ cursor: 'pointer' }"
            :to="{ path: '/user/info/' + user.id }"
            >مشاهده اطلاعات کاربر</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: null,
    };
  },
  created() {
    axios
      .get("/users")
      .then((response) => {
        this.users = response.data;
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

button {
  border: none;
  background-color: #24a0ed;
  padding: 0.5rem;
  color: #fff;
  border-radius: 10px;
  font-size: 1rem;
}
</style>




