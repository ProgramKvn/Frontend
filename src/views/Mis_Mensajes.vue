<template>
  <div id="Mis_Mensajes">
    <div class="custom-shape-divider-top-1606608666">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <b-navbar class="navbar" type="dark" variant="dark">
      <b-navbar-brand>Mis mensajes</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <router-link v-b-popover.hover.top="'Volver'" to="/">
            <b-icon font-scale="3" icon="arrow-left-circle"></b-icon>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <br />
    <div class="Alerta">
      <b-alert show v-if="MostrarAlerta" variant="danger">
        Bandeja de entrada vacía
      </b-alert>
    </div>
    <div v-for="Bandeja in Mensajes" :key="Bandeja._id">
      <div class="Centrar">
        <b-card
          text-variant="light"
          bg-variant="dark"
          class="card"
          :header="Bandeja.Asunto"
          footer-tag="footer"
        >
          <b-card-text>
            {{ Bandeja.Contenido }}
          </b-card-text>
          <template #footer>
            <div class="AjustarElementos">
              <span
                class="text-muted"
                v-b-popover.hover.bottom="'Nombre completo del autor'"
              >
                <b-avatar variant="danger"></b-avatar>
                {{ Bandeja.Nombre_Completo }}
              </span>
              <span>
                <b-badge
                  v-b-popover.hover.top="'Fecha de creación'"
                  variant="light"
                  >{{ Bandeja.Fecha }}</b-badge
                >
              </span>
            </div>
          </template>
        </b-card>
      </div>
      <br />
    </div>
    <div class="custom-shape-divider-bottom-1607651439">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Mis_Mensajes",
  data() {
    return {
      Mensajes: [],
    };
  },
  async mounted() {
    const respuesta = await axios.get(
      "/api/correo/" + this.$route.params.autor
    );
    this.Mensajes = respuesta.data;

    if (respuesta.data == "") {
      this.MostrarAlerta = true;
    } else {
      this.MostrarAlerta = false;
    }
  },
};
</script>

<style scoped>
@import url("../../public/css/fondo.css");
@import url("../../public/css/fondo2.css");
.Centrar {
  display: flex;
  justify-content: center;
}
.card {
  width: 75%;
}
.AjustarElementos {
  display: flex;
  justify-content: space-between;
}
.Alerta{
  margin: auto;
  padding: auto;
  width: 75%;
  text-align: center;
}
</style>