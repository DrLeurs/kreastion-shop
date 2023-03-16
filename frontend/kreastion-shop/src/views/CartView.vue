<script>
import { useCartStore } from '@/stores/CartStore';

export default {
  setup() {
    const cartStore = useCartStore();

    return {
      cartStore
    }
  },
  mounted() {
    console.log(this.cartStore.isEmpty)
  }
}
</script>

<template>
  <main>
    <h1>Cart</h1>
    <p v-if="cartStore.isEmpty">
      Your cart is empty ;)
    </p>
    <table v-else>
      <tr>
        <th>Reference</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="({product, qty}, index) in cartStore.cart" :key="index">
        <td>{{ product.reference }}</td>
        <td>{{ product.name }}</td>
        <td>&euro; {{ product.price }}</td>
        <td>{{ qty }}</td>
        <td>
          <button class="remove" @click="cartStore.removeOrderLine(index)">
            <!-- <img src="@/assets/bin.svg" alt="remove orderline"> -->
            remove
          </button>
        </td>
      </tr>
      <tr class="spacer">
        <td class="spacer"></td>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>TOTAL</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="total-amount">&euro; {{ cartStore.totalAmount }}</td>
      </tr>
    </table>
    <RouterLink to="/checkout" v-if="! cartStore.isEmpty">
      <button class="checkout">Go to checkout &RightArrow;</button>
    </RouterLink>
  </main>
</template>

<style scoped>
th {
    font-weight: 500;
    text-align: left;
    padding-right: 3em;
}

td {
  padding-right: 3em;
}

td.spacer {
  padding-top: 1em;
}

td.total-amount {
  font-size: 1.5em;
  font-weight: 500;
}

button.checkout {
  background-color: var(--kr-c-red);
  border: none;
  padding: 1rem;
  font-size: 1.5em;
  color: var(--kr-c-white-soft);
  font-variant-caps: all-small-caps;
  /* width: 50%; */
}

@media (min-width: 1024px) {
  .remove {
    height: 100%;
  }

  .remove > img {
    width: 80%;
  }
}
</style>