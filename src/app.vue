<template>
  <div id="app">
    <app-header />
    <user-msg v-if="msg" :msg="msg" @hideMsg="setMsg" />
    <tackle-edit v-else @showMsg="setMsg" />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header";
import tackleEdit from "./cmps/tackle-edit";
import userMsg from "./cmps/user-msg";

export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    setMsg(msg) {
      this.msg = msg;
    },
  },
  components: {
    appHeader,
    tackleEdit,
    userMsg,
  },
};
</script>

<style>
</style>