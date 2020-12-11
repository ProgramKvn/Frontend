<template>
  <div id="Contacto">
    <div class="jumbotron">
      <div class="modal-body modal-dialog form">
        <div class="container modal-content">
          <b-navbar class="mb-2" type="dark" variant="dark">
            <b-navbar-brand>Enviar correo electrónico</b-navbar-brand>

            <b-navbar-nav class="ml-auto">
              <b-nav-item right>
                <router-link v-b-popover.hover.top="'Volver'" to="/">
                  <b-icon font-scale="3" icon="arrow-left-circle"></b-icon>
                </router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
          <b-form id="Formulario" @submit.prevent="Enviar_Correo">
            <label class="form-text text-muted" for="input2"
              >Nombre completo</label
            >
            <b-input-group class="mb-2" id="input2">
              <b-input-group-prepend is-text>
                <b-icon icon="person-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                name="nombre"
                v-model="nombre"
              ></b-form-input>
            </b-input-group>

            <label class="form-text text-muted" for="input3"
              >Correo electrónico</label
            >
            <b-input-group class="mb-2" id="input3">
              <b-input-group-prepend is-text>
                <b-icon icon="envelope-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="email"
                name="correo"
                v-model="correo"
              ></b-form-input>
            </b-input-group>

            <label class="text-muted" for="input3">Asunto</label>
            <b-input-group>
              <b-input-group-prepend is-text>
                <b-icon icon="card-text"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                placeholder="Ingrese el asunto del mensaje"
                required
                v-model="asunto"
                name="asunto"
              ></b-form-input>
            </b-input-group>
            <p>
              <small class="text-muted"
                >El asunto ayudará a diferenciar tus mensajes del resto</small
              >
            </p>

            <label class="text-muted" for="input3">Contenido</label>
            <b-input-group>
              <b-input-group-prepend is-text>
                <b-icon icon="chat-square-text-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-textarea
                rows="10"
                placeholder="Ingrese el cuerpo del mensaje"
                name="contenido"
                v-model="contenido"
                required
                style="resize: none"
              ></b-form-textarea>
            </b-input-group>
            <p>
              <small class="text-muted"
                >Este cuadro contendrá el mensaje que enviará a los
                administradores</small
              >
            </p>
              <b-button
                style="width: 100%"
                type="submit"
                variant="outline-primary"
                class="mb-2"
                >Enviar correo</b-button
              >
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Importando la funcionalidad del servicio de correo
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "Contacto",
  data() {
    return {
      Usuario: [],
      nombre: "",
      correo: "",
      asunto: "",
      contenido: "",
    };
  },
  async mounted() {
    const respuesta = await axios.get("/api/usuario/" + this.$route.params.id);
    this.Usuario = respuesta.data;

    this.nombre = await this.Usuario.Nombre_Completo;
    this.correo = await this.Usuario.Correo_Electrónico;
  },
  methods: {
    //El siguiente correo llama las configuraciones realizadas en la plantillas y el servicio electrónico, enviando los datos necesarios para crear una conexión con Gmail (en este caso) y así poder concretar el envío del mensaje
    async Enviar_Correo(e) {
      await axios.post("/api/correo/", {
        Asunto: this.asunto,
        Contenido: this.contenido,
        Autor: this.Usuario.Nombre_Usuario,
        Nombre_Completo: this.nombre,
        Correo_Autor: this.correo,
      });
      emailjs
        .sendForm(
          "contact_service",
          "template_4tbsdzq",
          e.target,
          "user_c4mzUEJurrcJfYovWtgqF"
        )
        .then(
          (result) => {
            console.log("Correo enviado con éxito", result.status, result.text);
            Swal.fire(
              "¡Correo enviado con éxito!",
              "Te contactaremos pronto",
              "success"
            );
            this.$router.push("/");
          },
          (error) => {
            console.log(
              "Ha ocurrido un problema con el envío del correo",
              error
            );
          }
        );
    },
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: #2c3744;
}
.AjustarBotones {
  display: flex;
  justify-content: space-between;
}
</style>