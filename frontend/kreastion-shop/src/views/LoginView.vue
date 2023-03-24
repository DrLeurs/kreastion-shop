<script>
import { useUserStore } from '@/stores/UserStore'

export default {
  setup() {
    const userStore = useUserStore();

    return {
      userStore
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.userStore.login(this.username, this.password);
    }
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="username">
      <span class="required">Username</span>
      <input type="text" id="username" v-model="username">
    </label>
    <label for="password">
      <span class="required">Password</span>
      <input type="text" id="password" v-model="password">
    </label>
    <button @click="login">Login</button>
  </main>
</template>