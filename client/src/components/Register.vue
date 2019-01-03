<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email" name="email" placeholder="Email" v-model="email" id="email">
    <input type="password" name="password" id="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "register",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<style scoped>
</style>
