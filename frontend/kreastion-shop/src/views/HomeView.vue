<script>
import ProductListing from '@/components/ProductListing.vue'

export default {
  components: {
    ProductListing
  }
}
</script>

<template>
  <div class="banner">
    <h1>Kreastion webshop</h1>
  </div>

  <main>
    <h1>Kreastion Shop</h1>
    <ProductListing />
  </main>
</template>

<style scoped>
.banner {
  background-image: url(http://localhost:3000/static/banner1.jpg);
  background-size: cover;
  /* background-attachment: fixed; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  margin-top: 1rem;
}

.banner > h1 {
  color: var(--kr-c-white);
  text-shadow: 2px 2px 5px black;
}

.banner > h1::after {
  content: '';
}

@media (min-width: 1024px) {
  .banner > h1 {
    font-size: 5em;
  }
}
</style>
