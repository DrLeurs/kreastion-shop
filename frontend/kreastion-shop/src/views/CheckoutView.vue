<script>
import { useCartStore } from '@/stores/CartStore';
import AddressDetails from '@/components/AddressDetails.vue';

export default {
  components: {
    AddressDetails
  },
  data() {
    return {
      separateShipping: false
    }
  }
}
</script>

<template>
  <main>
    <h1>Checkout</h1>

    <div class="wrapper">
      <div class="billing">
        <h2>Billing details</h2>
        <AddressDetails />
      </div>
      <div class="shipping">
        <h2>Shipping</h2>
        <input type="checkbox" v-model="separateShipping"  name="shipping" id="shipping">
        <label for="shipping">Ship to a different address?</label>
        <AddressDetails v-if="separateShipping" />
      </div>
    </div>

    <h2>Your order</h2>
    <h2>Continue to payment</h2>
  </main>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

#shipping {
  margin-right: .5rem;
}

.wrapper {
  display: flex;
  gap: 10rem;
}

#shipping {
  margin-bottom: 1rem;
}
</style>