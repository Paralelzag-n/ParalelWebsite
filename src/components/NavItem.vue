<template>
    <li 
      @click="navigate" 
      class="relative transition-all cursor-pointer duration-100 "
      @mouseenter="isHovered = true" 
      @mouseleave="isHovered = false"
    >
      <router-link :to="to" class="full-link " :class="routeIsActive || isHovered ? 'text-[#23ED98]' : 'text-white'" >{{ label }}</router-link>
      <div 
        class="underline" 
        :class="{'active': routeIsActive || isHovered}"
      ></div>
    </li>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const props = defineProps<{
    to: string;
    label: string;
  }>();
  
  const router = useRouter();
  const route = useRoute();
  
  const routeIsActive = computed(() => route.path === props.to);
  const isHovered = ref(false);
  
  const navigate = () => {
    router.push(props.to);
  };
  </script>
  
  <style scoped>
  .full-link {
    text-decoration: none;
    display: block; 
    width: 100%; 
    height: 100%; 
  }
  
  .relative {
    position: relative;
  }
  
  .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: white;
    transform: scaleX(0); 
    transition: transform 0.3s ease;
  }
  
  .active {
    transform: scaleX(1); 
  }
  </style>
  