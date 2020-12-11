<template>
  <div id="Configuracion">
    <b-container fluid>
      <b-row>
        <b-col cols="3" class="p-2">
          <Sidebar :Cambiar_Interfaz1="Cambiar_Interfaz1" :Cambiar_Interfaz2="Cambiar_Interfaz2" />
        </b-col>
        <b-col cols="9" class="p-2">
          <Actualizar_Cuenta :Cambiar_A_MiCuenta="Cambiar_A_MiCuenta" />
          <Seguridad :Cambiar_A_Seguridad="Cambiar_A_Seguridad" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from "@/components/Configuracion/Sidebar.vue";
import Actualizar_Cuenta from "@/components/Configuracion/Actualizar_Cuenta.vue";
import Seguridad from '@/components/Configuracion/Seguridad.vue';

export default {
  name: "Configuracion",
  components: {
    Sidebar,
    Actualizar_Cuenta,
    Seguridad
  },
  data() {
    return {
      Cambiar_A_MiCuenta: {
        Mostrar: true,
      },
      Cambiar_A_Seguridad: {
        Mostrar: false,
      },
      Usuario: [],
    };
  },
  methods: {
    Cambiar_Interfaz1() {
      this.Cambiar_A_MiCuenta.Mostrar = true;
      this.Cambiar_A_Seguridad.Mostrar = false;
    },
    Cambiar_Interfaz2() {
      this.Cambiar_A_MiCuenta.Mostrar = false;
      this.Cambiar_A_Seguridad.Mostrar = true;
    },
  },
};
</script>

<style>
</style>