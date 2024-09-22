<template>
    <div class="flex flex-col p-6 overflow-hidden">
      <div class="transition-all duration-1000" :class="isRendered[0] ? 'translate-x-[0]' : 'translate-x-[2000px]'">
        <h1 class="text-4xl font-bold text-black mb-4">
          WE ARE THE PARALEL TEAM AND WE'RE READY TO TAKE ON ANY CHALLENGE!
        </h1>
      </div>
      <div class="transition-all duration-1000 " :class="isRendered[1] ? 'translate-x-[0]' : 'translate-x-[2000px]'">
        <h2 class="text-2xl font-semibold text-[#23ED98] mb-3 pulsate underline cursor-pointer" @click="router.push('/team')">
          INTRODUCING OUR TEAM:
        </h2>
        <h3 class="text-xl text-black mb-2">At Paralel, we are a passionate team of software engineers, designers, and innovators dedicated to transforming ideas into impactful digital solutions.</h3>
        <h3 class="text-xl text-black mb-2">Founded in 2021, our mission is to leverage technology to solve complex problems and drive business growth for our clients.</h3>
        <h3 class="text-xl text-black mb-2">We specialize in custom software development, web and mobile app development, cloud solutions, and consulting services.</h3>
        <h3 class="text-xl text-black mb-2">Our approach combines agile methodologies with a customer-first mindset, ensuring we deliver solutions that truly add value.</h3>
        <h3 class="text-xl text-black mb-2">Join us on our journey to create something extraordinary!</h3>
        <h3 class="text-xl text-black mb-2">
          We believe in a future where technology enhances everyday life. Our vision is to empower businesses with cutting-edge software solutions that streamline processes and foster innovation.
        </h3>
        <h3 class="text-xl text-black mb-2">
          We are committed to continuous learning and improvement, staying ahead of industry trends to deliver the best possible outcomes for our clients.
        </h3>
        <h3 class="text-xl text-black mb-2">
          Join us on our journey to create something extraordinary! Let’s work together to turn your vision into reality.
        </h3>
      </div>
      <div class="transition-all duration-1000" :class="isRendered[2] ? 'translate-x-[0]' : 'translate-x-[2000px]'">
        <h2 class="text-2xl font-semibold text-[#23ED98] mb-3 cursor-pointer underline pulsate" @click="router.push('/contact')">
          LET'S GET IN TOUCH!
        </h2>
        <h3 class="text-xl text-black mb-2">
          Ready to take the next step? Contact us today to discuss how we can help your business thrive.
        </h3>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';


    const router = useRouter();
    const isRendered = ref<boolean[]>([false,false,false])

    onMounted(() => {
    isRendered.value.forEach((_, index) => {
        setTimeout(() => {
            isRendered.value[index] = true;
        }, (index + 1) * 500); 
    });
});
  </script>
  
  <style scoped>
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.p-6 {
  padding: 1.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-black {
  color: black;
}

.text-4xl {
  font-size: 2.25rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.text-xl {
  font-size: 1.25rem;
}

.font-bold {
  font-weight: bold;
}

.font-semibold {
  font-weight: 600;
}


@keyframes pulsate {
  0% {
    color: #23ed98;
  }
  50% {
    color: #126d43; 
  }
  100% {
    color: #23ed98;
  }
}

.pulsate {
  animation: pulsate 2s ease-in-out infinite;
}
</style>
  