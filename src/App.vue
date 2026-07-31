<script setup>
import {ref} from 'vue'
import Day12 from './Day_12.vue';
import OptionApi from './OptionApi.vue';
import TheHeader from './components/layout/TheHeader.vue';
import UserCard from './components/feature/profile/UserCard.vue';
import ExposeDay12 from './ExposeDay12.vue';
import StudentInput from './practice/StudentInput.vue';
const studentName = ref("")
const timer = ref(null)
function start(){
  timer.value?.start()
}
function stop(){
  timer.value?.stop()
}
function reset(){
  timer.value?.reset()
}
</script>

<template>
  <Day12 />
  <OptionApi />
  <TheHeader />
  <h1>Day_8</h1>
  <main class="page">
    <UserCard
    name="Sai"
    role="Vue Developer"
    location="Hyd"
    status="Active"
    />
    <UserCard
    name="Hemanth"
    role="Full Stack Developer"
    location="Bangalur"
    status="InActive"
    />
  </main>
  <hr>
  <h1>Parent component</h1>
  <ExposeDay12 ref="timer"/>
  <br />
  <button @click="start">
    Start
  </button>
  <button @click="stop">
    stop    
  </button>
  <button @click="reset">
    Reset 
  </button> 
  <br><br>
  <StudentInput v-model="studentName"/>
</template>

<style scoped>

.page {
  min-height: 100vh;
  padding: 32px;
  display: flex;
  gap: 20px;
  background: #f4f4f4;
}

</style>