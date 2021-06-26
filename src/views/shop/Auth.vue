<template>
  <div class="style">
    <h1>{{aa}}</h1>
    <section class="main">
      <div class="nav">
        <router-link class="user" to="/user/login" tag="button"
          >عضویت یا ورود کاربران</router-link
        >
        <router-link class="admin-register" to="/admin/register" tag="button">
          عضویت کاربران
        </router-link>
        <router-link class="admin-login" to="/admin/login" tag="button"
          >ورود مدیران</router-link
        >
        <router-link class="seller-register" to="/seller/register" tag="button"
          >عضویت فروشندگان</router-link
        >
        <router-link class="seller-login" to="/seller/login" tag="button"
          >ورود فروشندگان</router-link
        >
      </div>
    </section>
  </div>
</template>





<style scoped>
.style {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
button {
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  height: 3rem;
  font-size: 1.2rem;
  font-family: "Vazir";
}

@media only screen and (max-width: 800px) {
  .nav {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    width: 40%;
    grid-template-areas:
      "user"
      "admin-register"
      "admin-login"
      "seller-register"
      "seller-login";
  }
  .user {
    grid-area: user;
    background-color: #eb4511;
    background-image: linear-gradient(315deg, #eb4511 0%, #b02e0c 74%);
  }
  .admin-register {
    grid-area: admin-register;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  }
  .admin-login {
    grid-area: admin-login;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  }
  .seller-register {
    grid-area: seller-register;
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  }
  .seller-login {
    grid-area: seller-login;
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  }
}

@media only screen and (min-width: 800px) {
  .nav {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    width: 30%;
    grid-template-areas:
      "user user"
      "admin-register  admin-login "
      "seller-register  seller-login";
  }
  .user {
    grid-area: user;
    background-color: #eb4511;
    background-image: linear-gradient(315deg, #eb4511 0%, #b02e0c 74%);
  }
  .admin-register {
    grid-area: admin-register;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  }
  .admin-login {
    grid-area: admin-login;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  }
  .seller-register {
    grid-area: seller-register;
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  }
  .seller-login {
    grid-area: seller-login;
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  }
}
</style>