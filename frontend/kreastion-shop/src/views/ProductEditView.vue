<script>
const API_URL = import.meta.env.VITE_API_URL;

export default {
  props: ['id'],
  mounted() {
    if (this.id != 0) {
      this.fetchProduct();
      window.scrollTo(0, 0);
    }
  },
  data() {
    return {
      product: {},
      saved: false,
      uploaded: false,
      debounceTimer: null
    }
  },
  methods: {
    showSaved() {
      this.saved = true;
      setTimeout(() => { this.saved = false }, 3000);
    },
    fetchProduct() {
      fetch(`${API_URL}/product/${this.id}`, {
        credentials: 'include'
      })
      .then((response) => response.json())
      .then((data) => this.product = data);
    },
    saveProduct() {
      let url = API_URL;
      let requestHeaders = {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(this.product)
      };
      
      if (this.product._id) {
        url += `/product/${this.product._id}`
        requestHeaders.method = 'PATCH';
      }
      else {
        url += '/products';
        requestHeaders.method = 'POST';
      }
      
      fetch(url, requestHeaders)
        .then((response) => response.json())
        .then((data) => this.showSaved());
    },
    uploadImage(event) {
      let formData = new FormData();
      formData.append('image', event.target.files[0]);

      fetch(`${API_URL}/upload`, {
        method: 'POST',
        credentials: 'include',
        // Don't set Content-Type, browser will do it for us!
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // },
        body: formData
      })
        .then((response) => { if (response.status == 200) { return response.json() } })
        .then((data) => {
          this.product.image = data.filename;
          this.uploaded = true;
        });
    },
    // debounced updateTags
    updateTags(event) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => this.product.tags = event.target.value.split(','), 600);
    }
  }
}
</script>

<template>
  <main>
    <h1 v-if="product.name">Editing {{ product.name }}</h1>
    <h1 v-else>Creating new product</h1>
    
    <div class="line">
      <label for="reference">
        <span class="required">Reference</span>
        <input type="text" id="reference" v-model="product.reference" required>
      </label>
      <label for="name">
        <span class="required">Name</span>
        <input type="text" id="name" v-model="product.name" required>
      </label>
      <label for="price">
        <span class="required">Price</span>
        <input type="text" id="price" v-model="product.price" required>
      </label>
    </div>
    <div class="line">
      <label for="composer">
        <span>Composer</span>
        <input type="text" id="composer" v-model="product.composer">
      </label>
      <label for="instrumentation">
        <span>Instrumentation</span>
        <input type="text" id="instrumentation" v-model="product.instrumentation">
      </label>
      <label for="format">
        <span>Format</span>
        <select id="format" v-model="product.format">
          <option>paperback</option>
          <option>digital</option>
          <option>audio CD</option>
        </select>
      </label>
    </div>
    <div class="line">
      <label for="description">
        <span>Description</span>
        <textarea id="description" v-model="product.description"></textarea>
      </label>
    </div>
    <div class="line">
      <label for="tags">
        <span>Tags</span>
        <input type="text" id="tags" :value="product.tags" @input="updateTags">
      </label>
    </div>
    <div class="line base">
      <label for="image">
        <span>Image {{ uploaded ? 'uploaded' : '' }}</span>
        <input type="file" name="imageFile" id="imageFile" @change="uploadImage($event)">
      </label>
    </div>
    <img v-if="product.image" :src="`http://localhost:3000/static/${product.image}`" alt="no image available">
    <img v-else src="http://localhost:3000/static/placeholder.png" alt="no image available">
    <button @click="saveProduct">Save</button>
    <span v-if="saved" class="saved">Saved!</span>
  </main>
</template>

<style scoped>
#name {
  width: 25em;
}

#reference {
  width: 7em;
}

#price {
  width: 7em;
}

#description {
  resize: none;
  width: 41em;
  height: 10em;
}

.saved {
  color: var(--kr-c-green);
  margin-left: 1rem;
}

@media (min-width: 1024px) {
  img {
    width: 240px;
    height: 240px;
    border: 1px solid;
    display: block;
    margin-bottom: 1rem;
  }
}
</style>