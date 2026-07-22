<script setup>
import {reactive,watch,computed} from "vue"
const cart = reactive({
    product : "laptop",
    price : 60000,
    quantity : 1
})
const subtotal = computed(()=>{
    return cart.price + cart.quantity
})
const itemcount = computed(() => {
    return cart.quantityq
})
const tax = computed(() => {
    return subtotal.value + (subtotal.value * 5 / 100)
})
const total = computed(() => {
    return tax.value
})
function increase(){
    cart.quantity++
}
function Decrease(){
    if(cart.quantity > 1){
        cart.quantity--
    }
}
watch(cart,(newCart)=>{
    console.log("Cart Updated!")
    console.log("Product:", newCart.product)
    console.log("Price:", newCart.price)
    console.log("Quantity:", newCart.quantity)
    console.log("Subtotal:", subtotal.value)
    console.log("Total:", total.value)
})
</script>

<template>
    <div>
        <h1>shopping cart</h1>
        <h2>{{ cart.product }}</h2>
        <h2>$price : {{ cart.price }}</h2>
        <button @click="Decrease">
            -
        </button>
        <span>{{ cart.quantity }}</span>
        <button @click="increase">
            +
        </button>
        <hr>
        <p>subtotal: {{ subtotal }}</p>
        <p>Item_count : {{ itemcount }}</p>
        <p>tax(5%) : {{ tax }}</p>
        <p>Total_payment : {{ total }}</p>
    </div>
</template>
<style scoped>
.container {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
}

button {
  padding: 8px 15px;
  margin: 10px;
  cursor: pointer;
}

span {
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
}
</style>