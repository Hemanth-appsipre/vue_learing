<script setup>
import UserBadge from './UserBadge.vue'
defineProps({
    name : String,
    role : String,
    location : String,
    status : String
})
</script>

<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <p>{{ role }}</p>
        <small>{{ location }}</small>
        <div class="badge-row">
      <UserBadge :status="status" />
    </div>
    </div>
</template>

<style scoped>
.card{
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 300px;
    background: white;
}
.card h2{
    margin-bottom: 8px;
}
.card p {
  color: #555;
}
.badge-row {
  margin-top: 12px;
}
</style>