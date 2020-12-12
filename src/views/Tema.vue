<template>
  <div id="Tema">
    <b-container>
      <b-row class="justify-content-center">
        <h1>{{resultado.NombreCurso}}</h1>
      </b-row>
      <b-row class="justify-content-between">
        <router-link :to="{name: 'Pagina_Curso', params: {id: resultado._id}}">
          <img class="icon" src="../assets/flecha-izquierda.svg" alt="play" />
        </router-link>
        <!-- <router-link to="/contenidohtml">
        <img class="icon" src="../assets/proximo.svg" alt="play" />
      </router-link> -->
      </b-row>
      <b-row class="container justify-content-center">
        <div class="main">
          <h2>{{ resultado.Tema }}</h2>
          <br />
          <p>{{ resultado.DescripciónTema }}</p>
          <br />
          <p>{{resultado.Contenido}}</p>
        </div>
      </b-row>
      <b-row class="justify-content-end mt-4">
        <router-link to="/test">
          <a href=""
            ><img
              class="siguiente"
              src="../assets/flecha-correcta.svg"
              alt="siguiente"
          /></a>
        </router-link>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Tema",
  data() {
    return {
      resultado: [],
    };
  },
  async mounted() {
    const respuesta = await axios.get("/api/curso/" + this.$route.params.id);
    this.resultado = respuesta.data;
  },
};
</script>


<style scoped>
h1 {
  color: #1c447c;
}
.main {
  background: white;
  border-radius: 10px;
  margin-top: 25px;
  padding: 20px;
}
.main p {
  font-size: 18px;
}

.icon {
  display: flex;
  justify-content: space-between;
  opacity: 0.3;
  cursor: pointer;
  width: 30%;
}
.icon:hover {
  opacity: 1;
}
.siguiente {
  width: 50%;
}
.main__img {
  width: 50%;
  margin-bottom: 10px;
}
.list {
  list-style: none;
}
ul {
  padding: 0px;
}

a {
  opacity: 0.8;
  transform: rotateX(10deg);
  animation: one 2s infinite;
  animation-direction: alternate;
}
a:hover {
  transform: rotateX(0deg);
  transform: rotateY(0deg);
  animation: one;
  opacity: 1;
}

@keyframes one {
  0% {
    transform: rotateY(10deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(30deg);
    opacity: 0.5;
  }
}
</style>
