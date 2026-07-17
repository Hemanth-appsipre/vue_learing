<script setup>
const developer = "Hemanth Reddy";
const role = "Future Vue.js Engineer";
const location = "Hyderabad";
const github = "https://github.com/Saihemanth56";

const date = new Date().toLocaleDateString();
</script>

<template>
  <div class="page">
    <main class="container">
      <h1>Welcome, {{ developer }}</h1>

      <p>Today I begin my journey as a {{ role }}.</p>

      <p>Currently based in {{ location }}.</p>

      <p>
        Check out my GitHub profile:
        <a :href="github" target="_blank">GitHub</a>
      </p>
    </main>

    <footer class="footer">
      <p>Today's Date: {{ date }}</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  font-family: system-ui, sans-serif;
  text-align: center;
  padding: 4rem;
  background-color: rgb(14, 220, 86);
}

.footer {
  padding: 15px;
  text-align: center;
  background-color: black;
  color: white;
}

.footer p {
  color: white;
  margin: 0;
}

h1 {
  color: #111925;
}

a {
  color: #0c1813;
  text-decoration: none;
}

p {
  color: #0c1813;
}
</style>