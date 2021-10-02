<template>
  <div class="style">
    <h3>لیست نقش ها</h3>

    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th> نام نقش</th>
        <th>توضیحات</th>
        <th>بروزرسانی نقش</th>
      </tr>

      <tr v-for="role in roles" :key="role">
        <td>{{ role.id }}</td>
        <td>{{ role.name }}</td>
         <td>{{ role.description }}</td>
        <td>
          <router-link
            tag="button"
            :style="{ cursor: 'pointer' }"
            :to="{ path: '/user/info/' + role.id }"
            >بروزرسانی</router-link
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
      roles: null,
    };
  },
  created() {
    axios
      .get("/roles")
      .then((response) => {
        this.roles = response.data;
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




