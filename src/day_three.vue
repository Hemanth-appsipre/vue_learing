<script setup>
import { ref,reactive } from 'vue';
const isDark = ref(false)
const products = reactive([
  {
    id : 1,
    name : "Laptop",
    price : 200,
    location : "hyd"
  },
  {
    id : 2,
    name : "SmartPhone",
    price : 120,
    location : "ongole"
  },
  {
    id : 3,
    name : "Keyboard",
    price : 30,
    location : "bengl"
  }
])
const cart = ref([])
const search = ref("")
const total = ref(0)
const showcart = ref(true)
function togglecart(){
  showcart.value = !showcart.value
}
function toggleTheme(){
  isDark.value = !isDark.value
}
function addToCart(product){
  cart.value.push(product)
  total.value += product.price
  
}
</script>
<template>
  <div class="container" :class="{dark : isDark}">
    <h1>Shopping Cart</h1>
    <button @click="toggleTheme">
      {{ isDark ? "Light mode" : "Dark mode"}}
    </button>
    <hr>
    <input type="text" placeholder="search for product" v-model="search">
    <div class="product">
      <div class="card"
      v-for="product in products" :key="product.id"
      v-show="product.name.toLowerCase().includes(search.toLowerCase())">
      <h2>{{product.name}}</h2>
      <p>
        ${{product.price}}
      </p>
      <p>
        loc: {{ product.location }}
      </p>
      <button @click="addToCart(product)">
        Add To Cart
      </button>
      </div>
    </div>
    <hr>
    <button @click="togglecart">
      {{showcart? "Hide" : "show"}}
    </button>
    <div v-show="showcart">
      <h2>my cart
        {{ cart.length }}
      </h2>
      <p 
      v-if="cart.length==0">
      Your cart Empty
      </p>
      <ul
      v-else
      >
      <li
      v-for="item in cart" :key="item.id">
      {{ item.name }}

      ${{ item.price }}
      </li>
      </ul>
      <h2>
        $ {{ total }}
      </h2>
    </div>
  </div>
</template>
<style>
*{
  margin:0;
  padding:0;
  font-family:Arial, sans-serif;
}

body{
  background-color:#f2f2f2;
}

.container{
  width:700px;
  margin:30px auto;
  padding:20px;
  background:white;
  border:1px solid gray;
}

.dark{
  background:black;
  color:white;
}

h1{
  text-align:center;
  margin-bottom:20px;
}

input{
  width:100%;
  padding:8px;
  margin:15px 0;
}

.product{
  display:flex;
  gap:15px;
}

.card{
  border:1px solid black;
  padding:15px;
  width:180px;
  text-align:center;
}

button{
  padding:8px 15px;
  margin-top:10px;
  cursor:pointer;
}

</style>
