<script setup>
import {ref , reactive} from 'vue'
const initial_Attendance = 80
const initial_Theme = true
const Attendance = ref(initial_Attendance)
const isDark = ref(initial_Theme)
const initialStudent ={
  name : 'Hemanth',
  age : 21,
  course : 'Full Stack Developer',
  salary : 10000
}
const student = reactive({ ...initialStudent })
function Increase(){
  student.age++
}
function increaseSalary(){
  student.salary++
}
function DecreaseSalary(){
  if(student.salary > 0){
  student.salary--
  }
}

function toggleTheme(){
  isDark.value = !isDark.value
}
function studentAttendance(){
  Attendance.value++
}
function DecreaseAttendance(){
  if(student.Attendance > 0){
  Attendance.value--
  }
}
function changeName(){
  student.name='sai'
}
function changeCourse(){
  student.course='Vue developer'
}
function Decrease(){
  if(student.age > 0){
    student.age--
  }
}
function reset(){
  Object.assign(student,initialStudent)
  Attendance.value = initial_Attendance
  isDark.value = initial_Theme
}

</script>
<template>
  <div class="container" :class="{ dark:isDark }">
  <button @click="toggleTheme">
    {{ isDark? "Light mode" : "Dark mode"}}
  </button>
  <h2>Student Name : {{student.name}}</h2>
  <h3>Age : {{student.age}}</h3>
  <h4>Course : {{student.course}}</h4>
  <p><strong> Student Attendance </strong></p>
  <h5>Total Attendance : {{Attendance}}</h5>
  <h5>Salary : {{ student.salary}}</h5>
  <div class="button">
  <button @click="Increase">
    Increase Age
  </button>
  <br><br>
  <button @click="Decrease">
    DecreaseAge
  </button>
  <br><br>
  <button @click="changeCourse">
    changeCourse
  </button>
  <br><br>
  <button @click="changeName">
    Change Name
  </button>
  <br><br>
  <button @click="studentAttendance">
    Increase Attendance
  </button>
  <br><br>
  <button @click="DecreaseAttendance">
    Decrease Attendance
  </button>
  <br><br>
  <button @click="increaseSalary">
    IncreaseSalary
  </button>
  <br><br>
  <button @click="DecreaseSalary">
    DecreaseSalary
  </button>
  <br><br>
  <button @click="reset">
    Reset
  </button>
  </div>
  </div>
</template>
<style>
*{
  box-sizing:border-box;
  font-family:Arial, Helvetica, sans-serif;
}

.container{
  width:700px;

  margin:40px auto;

  padding:30px;

  background:white;

  border-radius:10px;

  box-shadow:0 0 15px rgba(0,0,0,.2);

  transition:.4s;

}
.dark{
  background:#222;
  color:yellowgreen;
}
.button{
  color: black;
  box-shadow: #222;
}
</style>
