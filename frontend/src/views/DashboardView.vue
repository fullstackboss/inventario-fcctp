<script setup>
  import Navbar from '../components/Navbar.vue';
  import Dashboard from '../components/Dashboard.vue'
  import Headingsection from '../components/HeadingSection.vue'
</script>

<template>
  <Navbar></Navbar>
  <div class="container mt-5">
    <Headingsection v-bind:vtitulo="'Dashboard'" v-bind:vsubtitulo="'Bienvenidos al Módulo de inventario'"  />
    <Dashboard />
  </div>
</template>

