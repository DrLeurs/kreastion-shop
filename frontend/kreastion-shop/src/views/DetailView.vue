<script>
const API_URL = import.meta.env.VITE_API_URL;

export default {
    props: ['id'],
    mounted() {
        this.fetchProduct();
        window.scrollTo(0, 0);
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
        <div class="details">
            <img src="https://loremflickr.com/360/360" alt="">

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
                </table>

                <div class="order">
                    <h2>&euro;{{ product.price }}</h2>
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
}

th {
    font-weight: 500;
    text-align: left;
    padding-right: 3em;
}

@media (min-width: 1024px) {
    img {
        width: 240px;
    }

    .details {
        display: flex;
        gap: 2rem;
    }

    .description {
        margin-top: 2em;
    }

    .order {
        margin-top: 1em;
    }
}
</style>