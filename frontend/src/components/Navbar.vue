<template>
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div class="col-md-1 text-center">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <h3 class="text-center ps-3">Inventario</h3>
      </a>
    </div>    

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li class="nav-item">
            <router-link class="nav-link link-danger" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  link-dark" to="/dispositivos">Dispositivos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" to="/nuevo">Nuevo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" to="/mantenedores">Mantenedores</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-dark" to="/reportes">Reportes</router-link>
          </li>
    </ul>

    <div class="col-md-1 text-center">
      <button type="button" class="btn btn-danger btn-sm" @click="showLogoutModal">Salir</button>
    </div>
  </header>
  <ConfirmModal
      :isVisible="isLogoutModalVisible"
      title="Cerrar sesión"
      message="¿Estás seguro de que deseas cerrar sesión?"
      @confirm="logout"
      @cancel="isLogoutModalVisible = false"
    />
</template>

<script>
import ConfirmModal from './ConfirmModal.vue';

export default {
  components: {
    ConfirmModal
  },
  data() {
    return {
      isLogoutModalVisible: false
    };
  },
  methods: {
    showLogoutModal() {
      this.isLogoutModalVisible = true;
    },
    logout() {
      localStorage.removeItem('token');
      this.isLogoutModalVisible = false;
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* Añadir estilos si es necesario */
</style>
