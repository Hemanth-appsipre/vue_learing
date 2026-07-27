<!-- src/components/feature/profile/UserBadge.vue -->
<script setup>
defineProps({
  status: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="badge">
    Status: {{ status }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: #e7f5ff;
  color: #1864ab;
  font-size: 14px;
  font-weight: 600;
}
</style>