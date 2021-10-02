<template>
  <div class="style">
    <h3>لیست سفارشات</h3>
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th> نظر</th>
        <th>تاریخ ارسال نظر</th>
      </tr>

      <tr v-for="comment in comments" :key="comment">
        <td>{{ comment.id }}</td>
        <td>{{ comment.comment }}</td>
        <td>{{ comment.created_at }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      comments: Array,
    };
  },
  created() {
    axios
      .get("/comments/user", {})
      .then((res) => {
        this.comments = res.data;
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