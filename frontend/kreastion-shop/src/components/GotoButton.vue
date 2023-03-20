<script>
export default {
  props: ['to']
}
</script>

<template>
  <RouterLink :to="to">
    <button class="checkout">
      <slot />
    </button>
  </RouterLink>
</template>

<style scoped>
button.checkout {
  background-color: var(--kr-c-red-dark);
  border: none;
  padding: 0.5rem;
  font-size: 1.5em;
  color: var(--kr-c-white-soft);
  font-variant-caps: all-small-caps;
  /* width: 50%; */
}

button.checkout:hover {
  background-color: var(--kr-c-red);
}

button.checkout:active {
  background-color: var(--kr-c-red-dark);
}
</style>