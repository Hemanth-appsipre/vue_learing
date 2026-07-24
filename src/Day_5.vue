<script setup>
import { ref, computed } from "vue"

const search = ref("")
const sortBy = ref("name")

const users = ref([
  { id: 1, name: "Hemanth", age: 21 },
  { id: 2, name: "Rahul", age: 22 },
  { id: 3, name: "Sai", age: 20 },
  { id: 4, name: "Ajay", age: 23 },
  { id: 5, name: "Kiran", age: 24 },
  { id: 6, name: "Hemanth", age: 20}
])

const visibleUsers = computed(() => {
  const filtered = users.value.filter(user =>
    user.name.toLowerCase().includes(search.value.toLowerCase())
  )

  if (sortBy.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    filtered.sort((a, b) => a.age - b.age)
  }

  return filtered
})

function addUser() {
  users.value.push({
    id: Date.now(),
    name: "New User",
    age: 20
  })
}

function removeUser(id) {
  users.value = users.value.filter(user => user.id !== id)
}
</script>

<template>
  <div class="container">

    <h2>User Directory</h2>

    <input
      v-model="search"
      placeholder="Search User"
    >

    <button @click="sortBy='name'">
      Sort Name
    </button>

    <button @click="sortBy='age'">
      Sort Age
    </button>

    <button @click="addUser">
      Add User
    </button>

    <TransitionGroup
      name="list"
      tag="div"
    >
      <div
        class="card"
        v-for="user in visibleUsers"
        :key="user.id"
      >
        <span>{{ user.name }} - {{ user.age }}</span>

        <button @click="removeUser(user.id)">
          Remove
        </button>
      </div>
    </TransitionGroup>

  </div>
</template>

<style scoped>
.container{
  width:400px;
  margin:auto;
}

input{
  width:100%;
  margin:10px 0;
}

button{
  margin:5px;
}

.card{
  display:flex;
  justify-content:space-between;
  padding:10px;
  border:1px solid gray;
  margin:8px 0;
}

.list-enter-active,
.list-leave-active,
.list-move{
  transition:0.4s;
}

.list-enter-from{
  opacity:0;
  transform:translateY(-20px);
}

.list-leave-to{
  opacity:0;
  transform:translateX(40px);
}
</style>