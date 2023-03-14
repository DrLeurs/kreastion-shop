import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            totalQty: 0,     // dummy/test
            cart: []
        }
    },

    actions: {
        addProduct(product, qty) {
            // add order line to cart[]
            this.cart.push({
                product: product,
                qty: qty
            });
            // increase total quantity of products
            this.totalQty += qty;
        }
    },

    getters: {
        totalAmount: (state) => {
            let total = 0;
            for(const orderLine of state.cart) {
                total += orderLine.product.price * orderLine.qty;
            }

            return total;
        }
    }
})