<template>
  <div class="style">
    <Header />
    <div class="box">
      <Sidebar />
      <router-view class="route" />
      <Footer class="route" />
    </div>
  </div>
</template>
<script>
import Header from "./../../components/adminpanel/nav/Header";
import Sidebar from "./../../components/adminpanel/sideBar/SideBar";
import Footer from "./../../components/adminpanel/nav/Footer";

export default {
  components: { Header, Sidebar, Footer },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("admin_token")) {
      next({ name: "adminLogin" });
    } else {
      next(true);
    }
  },
};
</script>

<style scoped>
.style {
  height: 100% !important;
  background-color: #f9fbfd;
}

.box {
  display: flex;
  justify-content: flex-start;
}

.route {
  width: 100%;
  margin-right: 3rem;
  margin-top: 2rem;
}
body,
html {
  height: 100%;
  width: 100%;
  margin: 0 auto 0;
  background-color: #f9fbfd;
}
</style>