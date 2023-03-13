<script>
import ProductCard from '../components/ProductCard.vue'

const API_URL = import.meta.env.VITE_API_URL;

export default {
  components: {
    ProductCard
  },
  mounted() {
    this.fetchProducts();
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts() {
      fetch(`${API_URL}/products`)
        .then((response) => response.json())
        .then((data) => this.products = data);
    }
  }
}
</script>

<template>
  <main>
    <h1>Kreastion Shop</h1>
    <div class="wrapper">
      <ProductCard v-for="product in products" :key="product._id" :product="product" />
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: row wrap;
}

@media (min-width: 1024px) {
  h1 {
    color: var(--color-title);
    margin-bottom: 1rem;
  }
}
</style>
