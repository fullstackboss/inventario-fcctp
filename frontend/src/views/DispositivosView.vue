<script setup>
  import Dispositivos from '../components/Dispositivos.vue'
  import Navbar from '../components/Navbar.vue';
  import Headingsection from '../components/HeadingSection.vue'

</script>

<template>
    <Navbar />
    <div class="container mt-5">
        <Headingsection v-bind:vtitulo="'Dispositivos'" v-bind:vsubtitulo="'Lista de Dispositivos registrados'"  />
        <Dispositivos />
  </div>

</template>
