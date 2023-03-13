<script>
const API_URL = import.meta.env.VITE_API_URL;

export default {
    props: ['id'],
    mounted() {
        this.fetchProduct();
    },
    data() {
        return {
            product: []
        }
    },
    methods: {
        fetchProduct() {
            fetch(`${API_URL}/product/${this.id}`)
                .then((response) => response.json())
                .then((data) => this.product = data);
        }
    }
}
</script>

<template>
    <main>
        <h1>{{ product.name }}</h1>
    </main>
</template>