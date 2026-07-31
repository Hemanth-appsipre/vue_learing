<script setup>
import {ref,computed} from 'vue'
const student = ref('unknown')
const firstname = ref("sai")
const lastname = ref("hemanth")
const count = ref(0)
const marks = ref([])
const newMarks = ref('')
function updateStudent(){
    student.value="Hemanth"
}
const fullname = computed(() =>{
    return firstname.value + ' ' + lastname.value
})
function Increase(){
    count.value++
}
function addmarks(){
    if(newMarks.value >= 0 && newMarks.value <= 99){
        marks.value.push(Number(newMarks.value))
        newMarks.value=''
    }else{
        alert("enter only upto 2-digit number(0-99)")
    }
}
const totalMarks = computed(() =>{
    return marks.value.reduce((total,mark)=> total+mark,0)
})
const avgMarks = computed(()=>{
    if(marks.value.length === 0){
        return 0
    }
    return totalMarks.value / marks.value.length
})
</script>

<template>
    <h1>StudentProfile</h1>
    <div class="card">
        <h2>Student Name : {{ student }}</h2>
        <h2>fullname : {{ fullname }}</h2>
        <h2>count:{{ count }}</h2>
        <button @click="Increase">increase</button>
        <br>
        <input v-model="newMarks" type="number" min="0" max="100" placeholder="Enter the Numbers" style="width: 150px;">
        <p>Marks : {{ marks.join(',') }}</p>
        <p>Total : {{ totalMarks }}</p>
        <p>Avgerage : {{ avgMarks }}</p>
        <button @click="updateStudent">
            updateStudent
        </button>
        <button @click="addmarks">
            Add Marks
        </button>
    </div>
</template>
<style scoped>
.card{
    margin: 20px;
    padding: 20px;
    width: 350px;
    border: 2px solid #ccc;
    border-radius: 10px;
    text-align: center;
}
button {
  margin: 10px;
  padding: 10px 15px;
  cursor: pointer;
}
</style>