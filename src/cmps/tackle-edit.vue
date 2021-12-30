<template>
  <section class="tackle-edit flex justify-center">
    <form @submit.prevent="addTackle" class="flex col">
      <p class="title">Please fill in the following fields:</p>
      <label>
        User ID:
        <input
          type="number"
          v-model="tackle.userId"
          placeholder="Insert youre ID"
          required
        />
      </label>
      <label>
        <p class="inner-title">Problem description:</p>
        <textarea
          type="text"
          v-model="tackle.description"
          placeholder="Insert problem description"
          maxlength="300"
        />
      </label>
      <label>
        Serial number:
        <input
          type="text"
          v-model="tackle.serialNum"
          placeholder="Insert device serial number"
          required
        />
      </label>
      <div>
        <p class="inner-title">First indicator status:</p>
        <label>
          <input type="radio" value="on" v-model="tackle.indicatorStatus1" />
          on
        </label>
        <label>
          <input type="radio" value="off" v-model="tackle.indicatorStatus1" />
          off
        </label>
        <label>
          <input
            type="radio"
            value="blinking"
            v-model="tackle.indicatorStatus1"
          />
          blinking
        </label>
      </div>
      <div>
        <p class="inner-title">Second indicator status:</p>
        <label>
          <input type="radio" value="on" v-model="tackle.indicatorStatus2" />
          on
        </label>
        <label>
          <input type="radio" value="off" v-model="tackle.indicatorStatus2" />
          off
        </label>
        <label>
          <input
            type="radio"
            value="blinking"
            v-model="tackle.indicatorStatus2"
          />
          blinking
        </label>
      </div>
      <div>
        <p class="inner-title">Third indicator status:</p>
        <label>
          <input type="radio" value="on" v-model="tackle.indicatorStatus3" />
          on
        </label>
        <label>
          <input type="radio" value="off" v-model="tackle.indicatorStatus3" />
          off
        </label>
        <label>
          <input
            type="radio"
            value="blinking"
            v-model="tackle.indicatorStatus3"
          />
          blinking
        </label>
      </div>
      <button class="btn">SUBMIT</button>
    </form>
  </section>
</template>

<script>
import { tackleService } from "../services/tackle.service.js";

export default {
  data() {
    return {
      tackle: {
        userId: null,
        description: "",
        serialNum: null,
        indicatorStatus1: "",
        indicatorStatus2: "",
        indicatorStatus3: "",
      },
    };
  },

  methods: {
    async addTackle() {
      const msg = await tackleService.add(this.tackle);
      this.$emit("showMsg", msg);
    },
  },
};
</script>

<style>
</style>