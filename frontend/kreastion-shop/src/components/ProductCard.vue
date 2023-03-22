<script>
export default {
  props: {
    editable: Boolean,
    product: Object
  },
  computed: {
    linkTo() {
      return this.editable ? '/product/edit/' : '/detail/';
    }
  }
}
</script>

<template>
  <div class="product">
    <RouterLink :to="`${linkTo}${product._id}`">
      <div class="image">
        <img v-if="product.image" :src="`http://localhost:3000/static/${product.image}`" alt="product image">
        <img v-else src="http://localhost:3000/static/placeholder.png" alt="no image available">
      </div>
      <h3>{{ product.name }}</h3>
      <h3 class="price">&euro; {{ product.price }}</h3>
    </RouterLink>
  </div>
</template>

<style scoped>
h3.price {
  color: var(--kr-c-grey);
}
.product {
  padding: 1em;
  margin: 1rem;
  
  /* background-color: var(--kr-c-white); */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.2s;
}

.product:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.image {
  width: 100%;
  margin-bottom: 0.5rem;
}

.image::after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.image img {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product > a {
  color: inherit;
  background-color: inherit;
}

@media (min-width: 1024px) {
  .product {
    width: 20%;
  }
}
</style>