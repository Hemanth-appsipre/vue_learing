<script setup>
import {reactive} from "vue"
const survey = reactive({
  name:"",
  age:"",
  gender:"",
  skills:[],
  country:"",
  bio:"",
})
function submitForm(){
  alert("Survey Form Submited Successfully")
  console.log(survey)
}
</script>

<template>
  <div class="container">
    <h1>Survey Form</h1>
    <form @submit.prevent="submitForm">
    <label>Name</label>
    <input type="text" placeholder="Enter Your Name" v-model.trim="survey.name" required>
    <label>Age</label>
    <input type="number" placeholder="Enter Your Age" v-model.number="survey.age" required>
    <label>Gender</label>
    <div class="radio-group">
      <label>
        <input type="radio" value="Male" v-model="survey.gender">
        Male
      </label>
      <label>
        <input type="radio" value="Female" v-model="survey.gender">
        Female
      </label>
    </div>
    <label>Skills</label>
    <div class="checkbox-group">
      <label v-for="skill in ['vue','css','java','html']" :key="skill">
        <input type="checkbox" :value="skill" v-model="survey.skills">
        {{skill}}
      </label>
    </div>
    <label>Country</label>
    <select v-model.trim="survey.country">
      <option disabled value="select country">
        </option>
        <option>India</option>
        <option>Russian</option>
        <option>USA</option>
      </select>
      <br><br>
      <label>Bio </label>
      <textarea rows="5" placeholder="Give Feedback" v-model.lazy="survey.bio">
      </textarea>
      <br>
      <button type="submit">
        submit
      </button>
    </form>
    <hr>
    <h2>JSON LIVE</h2>
    <pre>{{survey}}</pre>
  </div>
</template>
<style scoped>

.container{

width:500px;

margin:30px auto;

padding:20px;

border-radius:10px;

box-shadow:0 0 10px gray;

font-family:Arial;

display:flex;

flex-direction:column;

gap:15px;

}

form{

display:flex;

flex-direction:column;

gap:15px;

}

input,
select,
textarea{

padding:10px;

font-size:16px;

}

.radio-group,
.checkbox-group{

display:flex;

gap:20px;

}

button{

padding:10px;

background:#42b883;

color:white;

border:none;

cursor:pointer;

font-size:16px;

border-radius:5px;

}

button:hover{

background:#2f9e6f;

}

pre{

background:#222;

color:#00ff00;

padding:15px;

border-radius:10px;

overflow:auto;

}

</style>