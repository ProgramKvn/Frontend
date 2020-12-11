<template>
  <header>
    <a href=""><img src="@/assets/logo3.png" class="logo" /></a>
    <i class="fas fa-bars" @click="menuToggle"></i>
    <ul class="nav">
        <li><router-link to='/'>Inicio</router-link></li>
      <b-nav-item>
        <li><a href="#Cursos">Cursos</a></li></b-nav-item
      >
      <b-nav-item>
        <li>
          <router-link :to="{ name: 'Contacto', params: { id: Usuario._id } }">
            Contáctanos
          </router-link>
        </li>
      </b-nav-item>
      <li>
        <b-nav-item-dropdown variant="dark">
          <template #button-content>
            <a href="">Mi Usuario</a>
          </template>

          <b-dropdown-item @click="Enviar_Datos2">
            <span><b-icon icon="inbox-fill"></b-icon> Mis mensajes </span>
          </b-dropdown-item>
          <b-dropdown-item @click="Enviar_Datos">
            <span><b-icon icon="gear"></b-icon> Configuración </span>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="CerrarSesion">
            <b-icon variant="danger" icon="power"></b-icon> Cerrar sesión
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </li>
    </ul>
  </header>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  data() {
    return {
      MostrarLinks: true,
      Usuario: [],
    };
  },
  methods: {
    menuToggle() {
      const toggleMenu = document.querySelector(".fa-bars");
      const toggleNav = document.querySelector(".nav");
      toggleMenu.classList.toggle("fa-times");
      toggleNav.classList.toggle("active");
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let descifrar = VueJwtDecode.decode(token);
      this.Usuario = descifrar;
    },
    CerrarSesion() {
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    },
    Enviar_Datos() {
      this.$router.push("/configuracion/" + this.Usuario._id);
    },
    Enviar_Datos2() {
      this.$router.push("/mis_mensajes/" + this.Usuario.Nombre_Usuario);
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped lang="css" src="../../../public/css/Globales/navbar.css">
.NP {
  color: black;
}
</style>