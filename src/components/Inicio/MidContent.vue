<template>
  <div class="main-content">
    <div class="title">
      <h1>Cursos recomendados para iniciar</h1>
    </div>
    <div id="Cursos">
      <div class="card-container">
        <div class="card">
          <div class="box">
            <div class="box-content">
              <h3 class="html">HTML</h3>
              <i class="fab fa-html5"></i>
              <p>
                HTML es un lenguaje de marcado que se utiliza para el desarrollo
                de páginas de Internet.
              </p>
              <router-link to="/header">Ver mas</router-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="box-content">
              <h3 class="css">CSS</h3>
              <i class="fab fa-css3-alt"></i>
              <p>
                Es un lenguaje de hojas de estilos creado para controlar el
                aspecto o presentación de los documentos electrónicos definidos
                con HTML y XHTML.
              </p>
              <router-link to="/topicscss">Ver mas</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-1">
      <h1>¡Únete a nuestro equipo de docentes y comparte tu conocimiento!</h1>

      <div class="album">
        <img src="../../assets/profe1.jpg" alt="" />
        <img src="../../assets/profe2.jpg" alt="" />
        <img src="../../assets/profe3.jpg" alt="" />
        <img src="../../assets/profe4.jpg" alt="" />
      </div>
    </div>
    <div class="content-3">
      <div class="text-info">
        <i class="far fa-clock"></i>
        <p>
          Adapta los cursos a tu tiempo. Puedes elegir el tiempo en que tomas
          tus clases, un método eficiciente para adecuarlos a tu gusto, además
          que puedes llevar más de un curso a la vez y completarlos
          simultáneamente.
        </p>
      </div>
      <div class="text-info">
        <i class="fas fa-tasks"></i>
        <p>
          Facilidad a la hora de buscar temas especificos, además de un
          contenido organizado para la comodidad de los usuarios. Lleva el
          control de tus cursos y enterate del progreso que que llevas
          diariamente.
        </p>
      </div>

      <div class="text-info">
        <i class="fas fa-laptop-house"></i>
        <p>
          Trabaja sin salir de tu casa. Solo necesitas un dispositivo con
          conexión a internet y puedes recibir las clases con total normalidad,
          además que puedes descargar el contenido para estudiarlo sin necesidad
          de conexión a internet.
        </p>
      </div>
    </div>
    <div class="content-2">
      <p>"Nunca pares de aprender, porque la vida nunca deja de enseñar"</p>
      <span><h3>- Kevin Garcia</h3></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="css" src="../../../public/css/Inicio/Cards.css">
</style>