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
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.userStore.login(this.email, this.password);
    }
  }
}
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">
      <span class="required">Email</span>
      <input type="text" id="email" v-model="email">
    </label>
    <label for="password">
      <span class="required">Password</span>
      <input type="text" id="password" v-model="password">
    </label>
    <button @click="login">Login</button>
  </main>
</template>

<style scoped>
#email {
  width: 18em;
}
</style>