<script setup>
  import Nuevo from '../components/Nuevo.vue'
  import Navbar from '../components/Navbar.vue';
  import Headingsection from '../components/HeadingSection.vue'

</script>

<template>
    <Navbar />
    <div class="container mt-5">
        <Headingsection v-bind:vtitulo="'Nuevo'" v-bind:vsubtitulo="'Agregar nuevo dispositivo'"  />
        <Nuevo />
  </div>

</template>