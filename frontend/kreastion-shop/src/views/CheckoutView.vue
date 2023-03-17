<script>
import { useCartStore } from '@/stores/CartStore';

export default {}
</script>

<template>
  <main>
    <h1>Checkout</h1>
    <h2>Billing details</h2>
    <div class="billing">
      <div class="line">
        <label for="firstname" class="required">First name</label>
        <input type="text" id="firstname" required>
        <label for="lastname" class="required">Last name</label>
        <input type="text" id="lastname" required>
      </div>
      <label for="companyname">Company name (optional)</label>
      <input type="text" id="companyname">
    </div>
    <h2>Shipping</h2>
    <h2>Your order</h2>
    <h2>Continue to payment</h2>
  </main>
</template>

<style scoped>
main, .billing {
  border: 1px solid;
}

.line {
  /* display: flex; */
}

label {
  display: block;
}

label.required::after {
  content: ' *';
  color: var(--kr-c-red);
}

input[type=text] {
  font-family: inherit;
  font-size: inherit;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid hsl(0, 0%, 70%);
  margin-right: 1rem;
  padding: 0.5rem;
}
</style>