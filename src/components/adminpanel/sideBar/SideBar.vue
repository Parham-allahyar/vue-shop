<template>
  <div>
    <div v-if="SideBarStatus" class="sidebar">
     
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["SideBarStatus"]),
};
</script>


<style scoped>
.sidebar {

background: #56CCF2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  height: 100vh;
  width: 30vw;
  z-index: 999;
}

@media only screen and (min-width: 800px) {
  .sidebar {
 
background: #56CCF2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    height: 100vh;
    width: 20vw;
    z-index: 999;
  }
}
</style>