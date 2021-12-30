
<template>
  <header :class="['app-header', 'flex justify-center', navClass]">
    <div class="header-container flex space-between align-center main-layout">
      <h1>Technical Support</h1>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
  computed: {
    navClass() {
      if (this.isNavOpen) return "open";
    },
  },
};
</script>

