<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </ul>
  </div>
</template>

<script>
import NodeTree from "./TreeNode.vue";

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
ul {
    list-style-type: none;
}
</style>