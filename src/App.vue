<script setup>
import { useTheme } from './composables/useTheme'
import { useStudentSearch } from './composables/useStudentSearch'

const { theme, toggleTheme } = useTheme()

const {
  query,
  students,
  error,
  isLoading
} = useStudentSearch()
</script>

<template>
  <div class="container" :class="theme">

    <h1>Student Directory</h1>

    <button @click="toggleTheme">
      Toggle Theme
    </button>

    <br><br>

    <input
      v-model="query"
      placeholder="Search Student..."
    />

    <br><br>

    <p v-if="isLoading">
      Loading...
    </p>

    <p v-else-if="error">
      {{ error.message }}
    </p>

    <div
      v-else-if="students"
      class="card"
    >
      <div
        v-for="student in students.users"
        :key="student.id"
      >
        <h3>{{ student.firstName }} {{ student.lastName }}</h3>

        <p>Email : {{ student.email }}</p>

        <p>Phone : {{ student.phone }}</p>

        <hr>
      </div>
    </div>

  </div>
</template>

<style>
.container{
  min-height:100vh;
  padding:30px;
  transition:.3s;
}

.light{
  background:white;
  color:black;
}

.dark{
  background:#1e1e1e;
  color:white;
}

input{
  padding:10px;
  width:250px;
}

button{
  padding:10px 20px;
  cursor:pointer;
}

.card{
  margin-top:20px;
  border:1px solid gray;
  padding:15px;
  border-radius:10px;
}
</style>