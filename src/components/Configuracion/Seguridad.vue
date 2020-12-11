<template>
  <div id="Seguridad">
    <div v-if="Cambiar_A_Seguridad.Mostrar">
      <b-jumbotron >
        <div class="modal-body modal-dialog form">
          <div class="container modal-content">
            <b-navbar class="mb-2" type="dark" variant="dark">
              <b-navbar-brand>Actualizar mi contraseña</b-navbar-brand>
              <b-navbar-nav class="ml-auto">
                <b-nav-item right>
                  <router-link v-b-popover.hover.top="'Volver'" to="/">
                    <b-icon font-scale="3" icon="arrow-left-circle"></b-icon>
                  </router-link>
                </b-nav-item>
              </b-navbar-nav>
            </b-navbar>

            <!--Aquí comienza el formulario de registro-->
            <b-form @submit.prevent="ActualizarContra">
              <label class="text-muted" for="input1">Contraseña actual</label>
              <b-input-group id="input1">
                <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  v-model="Seguridad.AntiguaContra"
                  required
                  placeholder="Ingrese su antigua contraseña"
                ></b-form-input>
              </b-input-group>
              <p>
                <small class="text-muted"
                  >Tu contraseña actual es la que utilizas para ingresar a la
                  plataforma.</small
                >
              </p>

              <label class="text-muted" for="input2">Nueva contraseña</label>
              <b-input-group id="input2">
                <b-input-group-prepend is-text>
                  <b-icon icon="key-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  v-model="Seguridad.NuevaContraseña"
                  required
                  v-on:keyup="ValidandoPassword"
                  @keyup="ValidandoConfirmacion"
                  placeholder="Ingrese su nueva contraseña"
                ></b-form-input>
              </b-input-group>
              <span v-if="Texto.show">
                <small :style="{ color: Texto.Color_Texto }">{{
                  Texto.Texto
                }}</small>
              </span>
              <p>
                <small class="text-muted"
                  >Tu nueva contraseña debe contener como mínimo 6
                  carácteres</small
                >
              </p>

              <label class="text-muted" for="input3"
                >Confirmar contraseña</label
              >
              <b-input-group class="mb-2" id="input3">
                <b-input-group-prepend is-text>
                  <b-icon icon="key-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  required
                  v-model="Seguridad.ConfirmarContraseña"
                  v-on:keyup="ValidandoConfirmacion"
                  placeholder="Confirme su nueva contraseña"
                ></b-form-input>
              </b-input-group>
              <span v-if="Texto2.show">
                <small :style="{ color: Texto2.Color_Texto }">{{
                  Texto2.Texto
                }}</small>
              </span>

              <b-button
                type="submit"
                class="mb-2"
                style="width: 100%"
                variant="outline-primary"
                >Actualizar contraseña</b-button
              >
            </b-form>
            <!--Aquí termina el formulario de registro-->
          </div>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Seguridad",
  data() {
    return {
      Usuario: [],
      Texto: {
        show: false,
        Color_Texto: "red",
        Texto: "",
      },
      Texto2: {
        show: false,
        Color_Texto: "red",
        Texto: "",
      },
      Seguridad: {
        AntiguaContra: "",
        NuevaContraseña: "",
        ConfirmarContraseña: "",
      },
      ValidarContra: {
        Nombre_Completo: "",
        Nombre_Usuario: "",
        Correo_Electrónico: "",
        Contraseña: "",
      },
    };
  },
  async mounted() {
    const respuesta = await axios.get("/api/usuario/" + this.$route.params.id);
    this.Usuario = respuesta.data;
  },
  methods: {
    ValidandoPassword() {
      if (this.Seguridad.NuevaContraseña.length < 6) {
        this.Texto.show = true;
        this.Texto.Color_Texto = "red";
        this.Texto.Texto =
          "Tu contraseña debe contener como mínimo 6 carácteres";
      } else if (this.Seguridad.NuevaContraseña.length <= 12) {
        this.Texto.show = true;
        this.Texto.Color_Texto = "#cca300";
        this.Texto.Texto = "Nivel de seguridad aceptable";
      } else {
        this.Texto.show = true;
        this.Texto.Color_Texto = "green";
        this.Texto.Texto = "Nivel de seguridad excelente";
      }
    },
    ValidandoConfirmacion() {
      if (
        this.Seguridad.NuevaContraseña != this.Seguridad.ConfirmarContraseña
      ) {
        this.Texto2.show = true;
        this.Texto2.Color_Texto = "red";
        this.Texto2.Texto = "Las contraseñas no coinciden";
      } else {
        this.Texto2.show = true;
        this.Texto2.Color_Texto = "green";
        this.Texto2.Texto = "Las contraseñas coinciden";
      }
    },
    async ActualizarContra() {
      const respuesta = await axios.post(
        "/api/usuario/comprobar_contra/" + this.$route.params.id,
        {
          AntiguaContra: this.Seguridad.AntiguaContra,
        }
      );
      if (respuesta.data == true) {
        if (this.Seguridad.NuevaContraseña.length < 6) {
          Swal.fire(
            "Nivel de seguridad bajo",
            "Por favor, escribe una contraseña que contenga como mínimo 6 caráteres",
            "warning"
          );
        } else {
          if (
            this.Seguridad.NuevaContraseña != this.Seguridad.ConfirmarContraseña
          ) {
            Swal.fire(
              "Las contraseñas no coinciden",
              "Las credenciales proporcionales no coinciden, por favor, digítalas nuevamente",
              "error"
            );
          } else {
            Swal.fire(
              "Contraseña correcta",
              "Su credencial es válida",
              "success"
            );

            await axios
              .put("/api/usuario/actualizar_contra/" + this.Usuario._id, {
                NuevaContraseña: this.Seguridad.NuevaContraseña,
              })
              .then(
                Swal.fire(
                  "Contraseña actualizada",
                  "Tu contraseña se ha actualizado con éxito",
                  "success"
                )
              );

            this.$router.push("/");
          }
        }
      } else {
        Swal.fire(
          "Contraseña incorrecta",
          "La contraseña proporcionada no coincide con la credencial del usuario",
          "error"
        );
      }
    },
    Cancelar_Actualizacion() {
      Swal.fire(
        "Actualización cancelada",
        "La actualización ha sido cancelada con éxito; ninguno de los datos han sido modificados",
        "warning"
      );
    },
  },
  props: {
    Cambiar_A_Seguridad: Object,
  },
};
</script>

<style scoped>
.jumbotron {
  height: 100vh;
  background-color: #2c3744;
}
.AjustarBotones {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>