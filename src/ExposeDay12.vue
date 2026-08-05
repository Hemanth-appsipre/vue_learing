<script setup>
import {ref} from 'vue'
const Seconds = ref(0)
let timer = null
function start(){
    if(timer !== null)return
    timer = setInterval(() => {
        Seconds.value++
    },1000)
}
function stop(){
    clearInterval(timer)
    timer=null
}
function reset(){
    stop()
    Seconds.value=0
}
defineExpose({
    start,
    stop,
    reset
})
</script>

<template>
    <div class="card">
        <h2>Timer : {{ Seconds }} sec</h2>
    </div>
</template>
<style scoped>
.card{
    width:250px;
    padding: 30px;
    border: 2px solid #ccc;
    border-radius: 10px;
    text-align: center;
}
</style>