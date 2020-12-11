<template>
  <div id="Sidebar">
    <div class="sidebar">
      <br />
      <b-button variant="outline-light" @click="Cambiar_Interfaz1">Mis datos</b-button>
      <hr />
      <b-button variant="outline-light" @click="Cambiar_Interfaz2">Seguridad</b-button>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    Cambiar_Interfaz1: {
      type: Function,
    },
    Cambiar_Interfaz2: {
      type: Function,
    },
  },
};
</script>

<style scoped>
button{
  width: 100%;
}
.sidebar {
  background-color: #2c3744;
  height: 100vh;
}
</style>