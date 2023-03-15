<script>
import { useCartStore } from '@/stores/CartStore';

export default {
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
    <table>
      <tr>
        <th>Reference</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="orderLine in cartStore.cart" :key="orderLine.product._id">
        <td>{{ orderLine.product.reference }}</td>
        <td>{{ orderLine.product.name }}</td>
        <td>{{ orderLine.product.price }}</td>
        <td>{{ orderLine.qty }}</td>
        <td>
          <button class="remove" @click="cartStore.removeOrderLine(orderLine)">
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
        <th>Total</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ cartStore.totalAmount }}</td>
      </tr>
    </table>
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

@media (min-width: 1024px) {
  .remove {
    height: 100%;
  }

  .remove > img {
    width: 80%;
  }
}
</style>