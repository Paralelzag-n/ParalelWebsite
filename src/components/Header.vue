<template>
  <nav class="bg-primary">
    <ul class="nav-list">
      <NavItem to="/" label="Home" />
      <NavItem to="/about" label="About Us" />
      <NavItem to="/contact" label="Contact Us" />
      <NavItem to="/team" label="Our Team" />
      <NavItem to="/portfolio" label="Portfolio" />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavItem from "./NavItem.vue"
</script>

<style scoped>
.nav-list {
  list-style-type: none;
  display: flex;
  gap: 1.5rem;
  padding: 0; /* Reset padding */
}

.bg-primary {
  background-color: black;
}

li {
  font-weight: normal;
  font-size: 1.2rem;
  padding: 1rem;
}



</style>
