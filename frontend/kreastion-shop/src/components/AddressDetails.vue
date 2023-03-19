<script>
export default {
  // props: [ 'title' ]
}
</script>

<template>
  <div class="billing">    
    <div class="line">
      <label for="firstname">
        <span class="required">First name</span>
        <input type="text" id="firstname" required>
      </label>
      <label for="lastname">
        <span class="required">Last name</span>
        <input type="text" id="lastname" required>
      </label>
    </div>
    <div class="line">
      <label for="companyname">
        <span>Company name (optional)</span>
        <input type="text" id="companyname">
      </label>
    </div>
    <div class="line">
      <label for="country">
        <span class="required">Country</span>
        <select name="country" id="country" required>
          <option value="belgium">Belgium</option>
          <option value="germany">Germany</option>
          <option value="france">France</option>
        </select>
      </label>
    </div>
    <div class="line">
      <label for="address1">
        <span class="required">Street address</span>
        <input type="text" id="address1" required>
        <input type="text" id="address2">
      </label>
    </div>
    <div class="line">
      <label for="postcode">
        <span class="required">Postcode</span>
        <input type="text" id="postcode" required>
      </label>
      <label for="city">
        <span class="required">City</span>
        <input type="text" id="city" required>
      </label>
    </div>
    <div class="line">
      <label for="email">
        <span class="required">Email address</span>
        <input type="text" id="email" required>
      </label>
    </div>
  </div>
</template>

<style scoped>
/* h2 {
  margin-bottom: 1rem;
} */

.line {
  display: flex;
  margin-bottom: 1rem;
}

label > span {
  display: block;
  font-size: small;
}

.required::after {
  content: ' *';
  color: var(--kr-c-red);
}

#address1, #address2, #email {
  width: 20em;
}

#postcode {
  width: 6em;
}

input[type=text], select {
  font-family: inherit;
  font-size: inherit;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid hsl(0, 0%, 70%);
  border-bottom: 3px solid hsl(0, 0%, 70%);
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  display: block;
}

input[type=text]:focus {
  outline: none;
  border: 1px solid var(--kr-c-grey);
  border-bottom: 3px solid var(--kr-c-grey);
}

/* input[type=text]:valid {
  outline: none;
  border: 1px solid hsl(145, 39%, 44%);
  border-bottom: 3px solid hsl(145, 39%, 44%);
} */
</style>