<script>
import { useCartStore } from '@/stores/CartStore'
import GotoButton from '@/components/GotoButton.vue'

const API_URL = import.meta.env.VITE_API_URL;

export default {
  setup() {
    const cartStore = useCartStore();
    
    return {
      cartStore
    }
  },
  components: {
    GotoButton
  },
  props: ['id'],
  mounted() {
    this.fetchProduct();
    window.scrollTo(0, 0);
  },
  data() {
    return {
      product: {},
      orderQuantity: 1
    }
  },
  methods: {
    fetchProduct() {
      fetch(`${API_URL}/product/${this.id}`)
      .then((response) => response.json())
      .then((data) => this.product = data);
    },
    addToCart() {
      if (this.orderQuantity > 0) {
        this.cartStore.addProduct(this.product, this.orderQuantity);
      }
    }
  }
}
</script>

<template>
  <main>
    <!-- <GotoButton>&leftarrow; Back</GotoButton> -->
    <h1>{{ product.name }}</h1>
    
    <div class="details">
      <img v-if="product.image" :src="`http://localhost:3000/static/${product.image}`" alt="">
      <img v-else src="http://localhost:3000/static/placeholder.png" alt="no image available">
      
      <div>
        <table>
          <tr>
            <th>Composer</th>
            <td>{{ product.composer }}</td>
          </tr>
          <tr>
            <th>Instrumentation</th>
            <td>{{ product.instrumentation }}</td>
          </tr>
          <tr>
            <th>Format</th>
            <td>{{ product.format }}</td>
          </tr>
          <tr>
            <th>Reference</th>
            <td>{{ product.reference }}</td>
          </tr>
        </table>
        
        <div class="order">
          <h2>&euro; {{ product.price }}</h2>
          Qty: <input type="number" size="4" v-model.number="orderQuantity" min="1">
          <button @click="addToCart">
            <!-- <img alt="Kreastion logo" class="cart-logo" src="@/assets/cart.svg" /> -->
            Add to cart
          </button>
        </div>
        
        <p class="description">
          {{ product.description }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  font-weight: 500;
  margin-bottom: 0.5em;
}

th {
  font-weight: 500;
  text-align: left;
  padding-right: 3em;
}

@media (min-width: 1024px) {
  img {
    width: 240px;
    height: 240px;
  }
  
  .details {
    display: flex;
    gap: 2rem;
  }
  
  .description {
    margin-top: 2em;
  }
  
  .order {
    margin-top: 2em;
  }
  
  .order > button {
    margin-left: 1em;
  }
  
  .cart-logo {
    margin-right: 1em;
    vertical-align: bottom;
    height: 2em;
    width: auto;
  }
}
</style>