<template>
  <div id="Actualizar_Cuenta">
    <div v-if="Cambiar_A_MiCuenta.Mostrar">
      <div class="jumbotron">
        <div class="modal-body modal-dialog form">
          <div class="container modal-content">
            <b-navbar class="mb-2" type="dark" variant="dark">
              <b-navbar-brand>Actualizar mi usuario</b-navbar-brand>

              <b-navbar-nav class="ml-auto">
                <b-nav-item right>
                  <router-link v-b-popover.hover.top="'Volver'" to="/">
                    <b-icon font-scale="3" icon="arrow-left-circle"></b-icon>
                  </router-link>
                </b-nav-item>
              </b-navbar-nav>
            </b-navbar>

            <!--Aquí comienza el formulario de registro-->
            <b-form @submit.prevent="ActualizarUsuario">
              <label class="form-tetx text-muted" for="input1"
                >Editar nombre completo</label
              >
              <b-input-group id="input1">
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  v-model="Usuario.Nombre_Completo"
                  required
                  placeholder="Ingrese su nombre completo"
                ></b-form-input>
              </b-input-group>
              <p>
                <small class="form-tetx text-muted"
                  >Ingresa tu nombre completo, tal y como aparece en tu
                  DUI.</small
                >
              </p>

              <label class="form-tetx text-muted" for="input2"
                >Editar el correo electrónico</label
              >
              <b-input-group id="input2">
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="email"
                  v-model="Usuario.Correo_Electrónico"
                  required
                  placeholder="Ingrese su correo electrónico"
                ></b-form-input>
              </b-input-group>
              <p>
                <small class="form-tetx text-muted"
                  >Correo electrónico de ejemplo: example@gmail.com</small
                >
              </p>
                <b-button
                  type="submit"
                  class="mb-2"
                  style="width: 100%"
                  variant="outline-primary"
                  >Actualizar usuario</b-button
                >
            </b-form>
            <!--Aquí termina el formulario de registro-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Actualizar_Cuenta",
  data() {
    return {
      Usuario: [],
    };
  },
  props: {
    Cambiar_A_MiCuenta: Object,
  },
  async mounted() {
    const respuesta = await axios.get("/api/usuario/" + this.$route.params.id);
    this.Usuario = respuesta.data;
  },
  methods: {
    async ActualizarUsuario() {
      await axios
        .put("/api/usuario/" + this.Usuario._id, {
          Nombre_Completo: this.Usuario.Nombre_Completo,
          Correo_Electrónico: this.Usuario.Correo_Electrónico,
        })
        .then(
          Swal.fire(
            "Datos actualizados",
            "Tu usuario se ha actualizado con éxito",
            "success"
          )
        );

      this.$router.push("/");
    },
    Cancelar_Actualizacion() {
      Swal.fire(
        "Actualización cancelada",
        "La actualización ha sido cancelada con éxito; ninguno de los datos han sido modificados",
        "warning"
      );
    },
  },
};
</script>

<style scoped>
.jumbotron {
  height: 100vh;
  background-color: #2c3744;
}
.AjustarBotones {
  display: flex;
  justify-content: space-between;
}
</style>