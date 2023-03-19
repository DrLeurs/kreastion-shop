<script>
import CartListing from '@/components/CartListing.vue';
import { useCartStore } from '@/stores/CartStore';

export default {
  components: {
    CartListing
  },
  setup() {
    const cartStore = useCartStore();
    
    return {
      cartStore
    }
  }
}
</script>

<template>
  <main>
    <h1>Cart</h1>
    <CartListing />
    <RouterLink to="/checkout" v-if="! cartStore.isEmpty">
      <button class="checkout">Go to checkout &RightArrow;</button>
    </RouterLink>
  </main>
</template>

<style scoped>
button.checkout {
  background-color: var(--kr-c-red-dark);
  border: none;
  padding: 0.8rem;
  font-size: 1.5em;
  color: var(--kr-c-white-soft);
  font-variant-caps: all-small-caps;
  /* width: 50%; */
}

button.checkout:hover {
  background-color: var(--kr-c-red);
}

button.checkout:active {
  background-color: var(--kr-c-red-dark);
}
</style>