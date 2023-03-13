<script>
export default {
    props: ['product']
}
</script>

<template>
    <div class="product">
        <img src="https://loremflickr.com/360/360" alt="">
        <h3>{{ product.name }}</h3>
        &euro;{{ product.price }}
    </div>
</template>

<style scoped>
.product {
    width: 20%;
    padding: 1em;
    margin: 1rem;

    /* background-color: var(--kr-c-white); */
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transition: 0.2s;
}

.product:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.product h3 {
    /* font-weight: 500; */
}

.product img {
    width: 100%;
}
</style>