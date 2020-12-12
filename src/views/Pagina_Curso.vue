<template>
  <div id="Pagina_Curso">
    <div v-for="i in resultado" :key="i._id">
      {{ i.Tema }}
    </div>
    <b-container class="bv-example-row">
      <div class="container__main">
        <router-link to="/">
          <i :style="resultado.Color" :class="resultado.Logo"></i>
        </router-link>
        <b-col class="p-0"
          ><h1 class="d-flex justify-content-center">
            {{ resultado.NombreCurso }}
          </h1>
        </b-col>
      </div>
      <b-col class="d-flex justify-content-center">
        <h2 sm="12" class="text-center">CON ESTE CURSO APRENDERÁS</h2></b-col
      >
      <ul class="list__object">
        <li v-for="(image, index) in images" :key="index">
          <img :src="image.src" alt="" />
        </li>
      </ul>
      <b-col class="contenedor">
        <h3 class="mt-3">Módulos</h3>
        <b-list-group class="d-flex justify-content-center mb-3">
          <div class="list">
            <b-list-group-item class="list__topic">
              {{ resultado.Tema }}
            </b-list-group-item>
            <router-link :to="{ name: 'Tema', params: { id: resultado._id } }">
              <img
                class="list__topic--icon"
                src="../assets/play.svg"
                alt="play"
              />
            </router-link>
          </div>
        </b-list-group>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
// import Button from "@/components/Button";
export default {
  name: "Pagina_Curso",
  data() {
    return {
      width: "100px",
      images: [
        {
          src: "https://i.imgur.com/7mkgmSk.png",
        },
        { src: "https://i.imgur.com/IxydW7S.png" },
        { src: "https://i.imgur.com/rSRcMBm.png" },
      ],
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
img {
  width: 100px;
  padding: 0;
}
h1 {
  width: 90%;
  color: #1c447c;
}
h2 {
  /* 0E0BAD */

  padding: 10px;
  background: #1c447c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.container__main {
  display: flex;
}
.icon {
  border: none;
  padding: 0;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list__object {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: 20px;
}
.list__topic {
  background-color: #1c447c;
  color: white;
  font-weight: bold;
  font-size: 20px;
  width: 95%;
}
.list__topic--icon {
  border: none;
  margin-left: 5px;
  opacity: 0.3;
  cursor: pointer;
  width: 40%;
}
.list__topic--icon:hover {
  opacity: 1;
}
i {
  font-size: 100px;
  margin: 30px;
}
</style>