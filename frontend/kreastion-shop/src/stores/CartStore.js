import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
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
    },
    removeOrderLine(index) {
      this.cart.splice(index, 1);
    }
  },
  
  getters: {
    totalAmount: (state) => {
      let total = 0;
      for(const orderLine of state.cart) {
        total += orderLine.product.price * orderLine.qty;
      }
      
      return total;
    },
    totalQty: (state) => {
      let total = 0;
      for(const orderLine of state.cart) {
        total += orderLine.qty;
      }
      
      return total;
    }
  }
})