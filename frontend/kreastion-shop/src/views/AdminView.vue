<script>
import ProductListing from '@/components/ProductListing.vue'
import GotoButton from '@/components/GotoButton.vue'

export default {
  components: {
    ProductListing,
    GotoButton
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<template>
  <main>
    <h1>Admin</h1>
    <GotoButton to="/product/edit/0">&plus; Add</GotoButton>
    <ProductListing />
  </main>
</template>

<style scoped>
button.add {
  background-color: hsl(197, 100%, 44%);
  color: white;
  padding: 0.5em;
  font-size: large;
  border: none;
}

button.add:hover {
  background-color: hsl(197, 100%, 50%);
}
</style>