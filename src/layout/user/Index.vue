<template>
  <div>
    <Mobile v-if="window.width <= 850" />
    <Desktop v-if="window.width > 850" />
  </div>
</template>

<script>
import Mobile from "./MobileIndex.vue";
import Desktop from "./DesktopIndex.vue";
export default {
  components: {
    Mobile,
    Desktop,
  },

  data() {
    return {
      window: {
        width: 0,
      },
    };
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
};
</script>
