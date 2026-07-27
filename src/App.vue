<script setup>

import TheHeader from './components/layout/TheHeader.vue';
import UserCard from './components/feature/profile/UserCard.vue';
</script>

<template>
  <TheHeader />
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