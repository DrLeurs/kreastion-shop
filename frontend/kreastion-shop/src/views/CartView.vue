<script>
import CartListing from '@/components/CartListing.vue'
import GotoButton from '@/components/GotoButton.vue'
import { useCartStore } from '@/stores/CartStore'

export default {
  components: {
    CartListing,
    GotoButton
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
    <CartListing editable />
    <GotoButton v-if="! cartStore.isEmpty">Go to checkout &RightArrow;</GotoButton>
  </main>
</template>

<style scoped>
</style>