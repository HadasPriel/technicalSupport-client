<template>
  <section class="user-msg">
    <p>
      Your request status is: <span class="bold">{{ msg }}</span>
    </p>

    <button class="btn" @click="$emit('hideMsg')">Back to form</button>
  </section>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style>
</style>