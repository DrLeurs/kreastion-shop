<script>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/CartStore'
import { useUserStore } from '@/stores/UserStore'

export default {
  setup() {
    const cartStore = useCartStore();
    const userStore = useUserStore();

    return {
      cartStore,
      userStore
    }
  }
}
</script>

<template>
  <header>
    <img alt="Kreastion logo" class="logo" src="@/assets/logo.svg" width="65" height="65" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cart" class="cart">Cart ({{ cartStore.totalQty }})</RouterLink>
        <RouterLink v-if="!userStore.isAuthenticated" to="/login">Login</RouterLink>
        <RouterLink v-if="userStore.isAuthenticated" to="/admin">Admin</RouterLink>
        <a v-if="userStore.isAuthenticated" @click="userStore.logout()">Logout {{ userStore.user.name.first }}</a>
      </nav>
      <!-- <button class="cart">Cart (0)</button> -->
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="address">
      <h3>Kreastion vzw</h3>
      <p>
        Boekweitstraat 12<br>
        2900 Schoten<br>
        Belgium
      </p>
    </div>
    <div class="vat">
      <h3>VAT</h3>
      <p>
        BE 0818.416.021
      </p>
    </div>
    <div class="bank">
      <h3>Financial</h3>
      <p>
        BE69 0000 0000 0000<br>
        BIC: ??
      </p>
    </div>
    <!-- &copy; 2023 Kreastion vzw -->
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  cursor: pointer;
}

nav a:first-of-type {
  border: 0;
}

footer {
  font-size: small;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--kr-c-grey);
}

footer h3 {
  font-variant-caps: all-small-caps;
  font-weight: 500;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    width: 1280px;
    margin-top: 1rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    align-items: baseline;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .cart {
    white-space: nowrap;
  }
}
</style>
