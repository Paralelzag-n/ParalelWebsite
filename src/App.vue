<template>
  <div class="flex flex-col h-screen overflow-hidden"> 
    <Header></Header>
    <div class="flex-grow bg-gray-200 overflow-auto"> 
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<style scoped>
</style>
