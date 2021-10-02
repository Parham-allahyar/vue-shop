<template>
  <div class="style">
    <h3>لیست  مجوزها</h3>

    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th> نام مجوز</th>
        <th>توضیحات</th>
        <th>بروزرسانی مجوز</th>
      </tr>

      <tr v-for="permission in permissions" :key="permission">
      <td>{{ permission.id }}</td>
        <td>{{ permission.name }}</td>
         <td>{{ permission.description }}</td> 
        <td>
          <!-- <router-link
            tag="button"
            :style="{ cursor: 'pointer' }"
            :to="{ path: '/user/info/' + role.id }"
            >بروزرسانی مجوز</router-link
          > -->
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
      permissions: null,
    };
  },
  created() {
    axios
      .get("permissions")
      .then((response) => {
        this.permissions = response.data;
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
