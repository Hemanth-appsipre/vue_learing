<script setup>
const name = defineModel()
function Reset(){
    name.value = ""
}
</script>
<template>
    <input v-model="name" type="text" placeholder="Enter name">
    <button @click="Reset">Clear</button>
</template>
