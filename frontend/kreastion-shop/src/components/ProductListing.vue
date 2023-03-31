<script>
import ProductCard from '@/components/ProductCard.vue'

const API_URL = import.meta.env.VITE_API_URL;

export default {
  components: {
    ProductCard
  },
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.fetchProducts();
  },
  data() {
    return {
      products: [],
      filter: '',
      debounceTimer: null
    }
  },
  computed: {
    filteredProducts() {
      if (!this.filter) {
        return this.products;
      }
      else {
        return this.products.filter((item) => {
          return item.name.toLowerCase().includes(this.filter) ||
            item.composer.toLowerCase().includes(this.filter)
        });
      }
    }
  },
  methods: {
    fetchProducts() {
      fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data) => this.products = data);
    },
    // Debounced setFilter
    setFilter(event) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => this.filter = event.target.value.toLowerCase(), 600);
    }
  }
}
</script>

<template>
  <div class="search">
    <input type="search" name="searchtext" id="searchtext" placeholder="Search products by name or composer" @input="setFilter">
  </div>
  <div class="wrapper">
    <ProductCard v-for="product in filteredProducts" :key="product._id" :product="product" :editable="editable" />
  </div>
</template>

<style scoped>
.search > input {
  width: 50%;
  margin: 1em;
}

@media (min-width: 1024px) {
  .search {
    margin-bottom: 1rem;
  }

  .wrapper {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>