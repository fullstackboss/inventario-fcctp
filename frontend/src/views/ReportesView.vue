<script setup>
  import Reportes from '../components/Reportes.vue'
  import Navbar from '../components/Navbar.vue';
  import Headingsection from '../components/HeadingSection.vue'

</script>

<template>
    <Navbar />
    <div class="container mt-5">
        <Headingsection v-bind:vtitulo="'Reportes'" v-bind:vsubtitulo="'Generación de reportes'"  />
        <Reportes />
  </div>

</template>