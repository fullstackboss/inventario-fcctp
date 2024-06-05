<script setup>
  import Mantenedores from '../components/Mantenedores.vue'
  import Navbar from '../components/Navbar.vue';
  import Headingsection from '../components/HeadingSection.vue'

</script>

<template>
    <Navbar />
    <div class="container mt-5">
        <Headingsection v-bind:vtitulo="'Mantenedores'" v-bind:vsubtitulo="'Lista de Mantenedores'"  />
        <Mantenedores />
  </div>

</template>
