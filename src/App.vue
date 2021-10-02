<template>
  <div id="app" >
    <!-- <Header/> -->
    <router-view />
    <Footer />
  </div>
</template>




<script>
// import Footer from './components/Navigation/Footer.vue'
// import Header from './components/Navigation/Header.vue'
export default {
// components:{Footer,Header}
}
</script>


<style scoped>
#app {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  font-family: 'Vazir', sans-serif;
}


</style>
