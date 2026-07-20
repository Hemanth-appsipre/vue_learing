<script setup>
import {ref} from 'vue'
const Username = ref("Hemanth")
const Age = ref(21)
const Course = ref("Full Stack developer")
const marks = ref(90)
const image = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO0wY2zmLQ-AFOwPUfj_GWNfC4AVxIUeIKEocoo0a9g&s=10")
const vue = ref("https://vuejs.org/")
const isDisabled = false
const ispassed = true
const showmessage = ref(true)
const name = ref("")
const  age = ref("")
const course = ref("")
const isPassed = ref(true)
const textColor = ref("green")
const fontsize = ref(30)
const username = ref("")
const password = ref("")
const message = ref("")
const likes = ref(0)
const role = ref("admin")
function addlikes(){
    likes.value++
}
function login(){
    if(username.value === '' || password.value === ''){
        message.value =  'Please fill all the fields.'
    }
    else {
        message.value = 'welcome  ${username.value}! Login Successful.'
    }
}
const students = [
  {
    id: 1,
    name: "Hemanth",
    age: 22
  },
  {
    id: 2,
    name: "Rahul",
    age: 21
  },
  {
    id: 3,
    name: "Sai",
    age: 23
  }
]
</script>
<template>
    <p><strong><mark>Interploation</mark></strong></p>
    <h2>Hello,{{ Username }}</h2>
    <p>Age:{{ Age + 1 }}</p>
    <p>course:{{ Course }}</p>
    <p>marks:{{ marks }}</p>
    <p>Result: {{ ispassed? "passed" : "Failed" }}</p>
    <p><strong><mark>v-bind</mark></strong></p>
    <img
    :src="image"
    :alt="`Profile of ${userName}`"
    >
    <br><br>
    <a :href="vue">
    Vue Website
    </a>
    <br><br>
    <button :disabled="isDisabled">
    Register
    </button>
    <br><br>
    <p><strong>v-on</strong></p>
    <button @click="addlikes">
        addlikes
    </button>
    <p>likes:{{ likes }}</p>
    <p><strong><mark>v-if</mark></strong></p>
    <p v-if="role==='admin'">
        Welcome Admin!
    </p>
    <p v-else-if="role==='manager'">
        Welcome manager!
    </p>
    <p v-else>
        Welcome User!
    </p>
    <div>
        <p><strong><mark>v-show</mark></strong></p>
        <h2>Student Portal</h2> 
        <p v-show="showmessage"> Welcome Hemanth </p> 
    </div>
    <p><strong><mark>Event modifiers</mark></strong></p>
    <div class="container">
    <h1>Student Login Form</h1>
    <form @submit.prevent="login">
        <label>Username</label>
        <input type="text" placeholder="Enter Your Name" required/>
        <br><br>
        <label>password</label>
        <input type="password" placeholder="Enter Your Password" required>
        <br><br>
        <button type="submit">login</button>
    </form>
    <p><strong><mark>v-model</mark></strong></p>
    <h2><strong><mark>Registration Form</mark></strong></h2>
    <input v-model="name" placeholder="Type Your Name"/>
    <p>Name : {{ name }}</p>
    <input v-model="age" type ="number" placeholder="Type Your Age"/>
    <p>Age:{{ age }}</p>
    <input v-model="course"  placeholder="course you have done"/>
    <p>Course:{{ course }}</p>
    <p><strong><mark>Dynamic</mark></strong></p>
    <h2>Student Result</h2>
    <p :class="{ success:isPassed, failed:!isPassed}"
       :style="{color : textColor, fontSize:fontsize+'px'}"
    >
    {{isPassed? "Congratulations! You Passed!" : "You failed Bot!"}}
    </p>
    <p><strong><mark>v-for</mark></strong></p>
    <h2>Students List</h2>
    <ul>
      <li
      v-for="student in students"
      :key="student.id"
      >
      <p><strong> {{student.name}}</strong></p>
      <p>Age: {{student.age}}</p>
      </li>
    </ul>
  </div>
</template>

<style>
.container{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-display: fallback;
  width:500px;
  margin:auto;
  padding:20px;
  border:2px solid gray;
  border-radius:10px;
}
.success{
  background-color: greenyellow;
  color: white;
  padding: 15px;
  border-radius:  8px;
}
.failed{
  background-color: red;
  color: white;
  padding: 15px;
  border-radius: 8px;
}
p{
  color: brown;
  font-size: medium;
}
</style>