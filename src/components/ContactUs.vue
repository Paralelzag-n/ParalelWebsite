<template>
    <div class="form-container p-6 max-w-xl mx-auto">
      <div class="text-center mb-8">
        <h3 class="text-lg text-gray-500 font-semibold">CONNECT WITH US</h3>
        <h1 class="text-4xl font-bold">Let's Make Things Happen</h1>
      </div>
  
      <form @submit.prevent="submitForm" class="space-y-6">
  
        <!-- Full Name and Business Email -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="fullName" class="block text-gray-700">Full Name</label>
            <input v-model="form.fullName" id="fullName" type="text"
                   class="w-full border-gray-300 border focus:border-[#23ED98] focus:ring-2 focus:ring-[#23ED98] outline-none p-2" 
                   placeholder="Full Name" required />
          </div>
          <div>
            <label for="businessEmail" class="block text-gray-700">Business Email</label>
            <input v-model="form.businessEmail" id="businessEmail" type="email"
                   class="w-full border-gray-300 border focus:border-[#23ED98] focus:ring-2 outline-none focus:ring-[#23ED98] p-2" 
                   placeholder="Business Email" required />
          </div>
        </div>
  
        <!-- Company Name and How did you hear about us? -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="companyName" class="block text-gray-700">Company Name</label>
            <input v-model="form.companyName" id="companyName" type="text"
                   class="w-full border-gray-300 border focus:border-[#23ED98] focus:ring-2 outline-none focus:ring-[#23ED98] p-2"
                   placeholder="Company Name" />
          </div>
          <div>
            <label for="heardAbout" class="block text-gray-700">How Did You Hear About Us?</label>
            <select v-model="form.heardAbout" id="heardAbout"
                    class="w-full border-gray-300 border focus:border-[#23ED98] focus:ring-2 focus:ring-[#23ED98] p-2">
              <option disabled value="">Select an option</option>
              <option>Social Media</option>
              <option>Friend or Colleague</option>
              <option>Online Search</option>
              <option>Other</option>
            </select>
          </div>
        </div>
  
        <!-- How Can We Help You Succeed? and Budget -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="helpYou" class="block text-gray-700">How Can We Help You Succeed?</label>
            <select v-model="form.helpYou" id="helpYou"
                    class="w-full border-gray-300 border focus:border-[#23ED98] focus:ring-2 focus:ring-[#23ED98] p-2">
              <option disabled value="">Select an option</option>
              <option>Custom Software Development</option>
              <option>Mobile App Development</option>
              <option>Web Development</option>
              <option>Cloud Solutions</option>
              <option>Consulting</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700">What Is Your Budget?</label>
            <div class="space-y-2 grid grid-cols-2">
              <label class="inline-flex items-center">
                <input v-model="form.budget" type="radio" value="Up to $25,000" />
                <span class="ml-2">$25,000</span>
              </label>
              <label class="inline-flex items-center">
                <input v-model="form.budget" type="radio" value="$25,000 - $50,000" />
                <span class="ml-2">$25,000 - $50,000</span>
              </label>
              <label class="inline-flex items-center">
                <input v-model="form.budget" type="radio" value="$50,000 - $100,000" />
                <span class="ml-2">$50,000 - $100,000</span>
              </label>
              <label class="inline-flex items-center">
                <input v-model="form.budget" type="radio" value="$100,000 - $250,000" />
                <span class="ml-2">$100,000 - $250,000</span>
              </label>
              <label class="inline-flex items-center">
                <input v-model="form.budget" type="radio" value="Over $250,000" />
                <span class="ml-2">Over $250,000</span>
              </label>
              <label class="inline-flex items-center">
                <input v-model="form.budget" type="radio" value="Can't disclose" />
                <span class="ml-2">Can't disclose</span>
              </label>
            </div>
          </div>
        </div>
  
        <!-- Project Details -->
        <div>
          <label for="projectDetails" class="block text-gray-700">Tell Us About Your Project</label>
          <textarea v-model="form.projectDetails" id="projectDetails"
                    class="w-full border-gray-300 border focus:border-[#23ED98] outline-none focus:ring-2 focus:ring-[#23ED98] p-2 resize-none"
                    rows="4" placeholder="Tell us more about your project..."></textarea>
        </div>
  
        <!-- Submit Button -->
        <div class="text-center">
          <button type="submit" class="px-6 py-3 bg-[#23ED98] text-white font-semibold rounded">Submit</button>
        </div>
  
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue';

// Define form data structure
const form = ref({
  fullName: '',
  businessEmail: '',
  companyName: '',
  heardAbout: '',
  helpYou: '',
  budget: '',
  projectDetails: ''
});

// Handle form submission
const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:5000/send-email', { // Backend API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value), // Send the form data to the backend
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Email sent successfully:', data.message);
      alert('Form submitted and email sent!');
    } else {
      console.error('Error sending email:', data.message);
      alert('Failed to send email.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while sending the form.');
  }
};
</script>
  
  <style scoped>
  .form-container {
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  input[type="text"],
  input[type="email"],
  select,
  textarea {
    border-radius: 0.25rem;
  }
  
  button {
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #1bb370;
  }
  </style>
  