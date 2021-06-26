<template>
  <div>
    <tree :tree-data="tree"></tree>
  </div>
</template>

<script>
import Tree from "./../../../components/tree/Tree";
import axios from "axios";
export default {
  data() {
    return {
      tree: "",
    };
  },
  components: {
    Tree,
  },

  created() {
    axios.get("http://127.0.0.1:8000/categorys")
    .then((res) => {
      this.tree = res;
      console.log(this.tree);
    });
  },
};
