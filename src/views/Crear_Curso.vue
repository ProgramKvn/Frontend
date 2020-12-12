<template>
  <div v-if="Mostrar" id="Crear_Curso">
    <div class="jumbotron">
      <div class="container modal-content">
        <b-navbar class="mb-2" type="dark" variant="dark">
          <b-navbar-brand>Crear un nuevo curso</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <router-link v-b-popover.hover.top="'Volver'" to="/">
                <b-icon font-scale="3" icon="arrow-left-circle"></b-icon>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
        <b-form @submit.prevent="CrearCurso">
          <label class="text-muted" for="input2">Título del curso</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="Curso.NombreCurso"
              placeholder="Ingrese el título de su curso"
            ></b-form-input>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Sus alumnos se guiarán por el tema del curso</small
            >
          </p>

          <label class="text-muted" for="input2">Descripción de su curso</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="Curso.DescripciónCurso"
              placeholder="Ingrese la descripción de su curso"
            ></b-form-input>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Cuando los usuarios quieran saber más de su curso, su descripción hablará por usted</small
            >
          </p>

          <label class="text-muted" for="input2">Logo del curso</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="Curso.Logo"
              placeholder="Ingrese el logo de su curso"
            ></b-form-input>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Tendrá que utilizar algún logo que proporciona la siguiente página: <a href="https://fontawesome.com/icons?d=gallery">https://fontawesome.com/icons?d=gallery</a></small
            >
          </p>

          <label class="text-muted" for="input2">Color del logo</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="Curso.Color"
              placeholder="Ingrese el color del logo"
            ></b-form-input>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Cuenta la opción de elegir el color de su logo. Ejemplo: color: yellow</small
            >
          </p>

          <label class="text-muted" for="input2">Tema a impartir</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="Curso.Tema"
              placeholder="Ingrese el tema a impartir"
            ></b-form-input>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Este será el primer tema que contendrá su curso</small
            >
          </p>

          <label class="text-muted" for="input2">Descripción del tema</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="Curso.DescripciónTema"
              placeholder="Ingrese la descripción de su tema"
            ></b-form-input>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Explique en pocas palabras de qué tratará el tema</small
            >
          </p>

          <label class="text-muted" for="input2">Contenido del tema</label>
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              <b-icon icon="credit-card2-back-fill"></b-icon>
            </b-input-group-prepend>
            <b-form-textarea
              v-model="Curso.Contenido"
              style="resize: none"
              rows="10"
              placeholder="Ingrese el contenido de su tema"
            ></b-form-textarea>
          </b-input-group>
          <p>
            <small class="text-muted"
              >Desarrolle lo mejor que pueda el contenido del curso</small
            >
          </p>

          <b-button type="submit" style="width: 100%" variant="outline-primary">
            Crear el curso
          </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Crear_Curso",
  data() {
    return {
      MostrarLinks: true,
      Usuario: [],
      NuevosDatos: {
        Nombre_Completo: "",
        Nombre_Usuario: "",
        Correo_Electrónico: "",
        Contraseña: "",
      },
      Curso: {
        NombreCurso: "",
        DescripciónCurso: "",
        Logo: "",
        Color: "color: ",
        Tema: "",
        DescripciónTema: "",
        Contenido: "",
      },
      Mostrar: null,
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let descifrar = VueJwtDecode.decode(token);
      this.Usuario = descifrar;
    },
    async CrearCurso() {
      await axios.post("/api/curso/", {
        NombreCurso: this.Curso.NombreCurso,
        DescripciónCurso: this.Curso.DescripciónCurso,
        Logo: this.Curso.Logo,
        Color: this.Curso.Color,
        Tema: this.Curso.Tema,
        DescripciónTema: this.Curso.DescripciónTema,
        Contenido: this.Curso.Contenido,
      });

      Swal.fire("Curso creado", "Su curso se ha creado con éxito", "success");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
  async mounted() {
    const respuesta = await axios.get("/api/usuario/" + this.Usuario._id);
    this.NuevosDatos = respuesta.data;
    if (this.NuevosDatos.Rol == "Alumno") {
      this.$router.push("/");
      this.Mostrar = false;
    } else if (this.NuevosDatos.Rol == "Maestro") {
      this.Mostrar = true;
      console.log("Bienvenido");
    }
  },
};
</script>

<style scoped>
.container {
  padding: 15px;
}
.jumbotron {
  height: 150vh;
  background-color: #2c3744;
}
</style>