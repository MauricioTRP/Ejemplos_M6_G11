<script>
export default {
  methods: {
    paginar(siguiente) {
      /** parametroEntrada */
      let entrada = Number(this.$route.params.entrada)
      if (siguiente) {
        return entrada < 10 ? `/blog/${entrada + 1}` : `/blog/${entrada}`
      } else {
        return entrada > 1 ? `/blog/${entrada - 1}` : `/blog/${entrada}`
      }
    },
    volverInicio() {
      return this.$router.push({ name: 'home' })
    }
  },
  // data() {
  //   return {
  //     posts: [
  //       { id: 1, titulo: 'Titulo 1' },
  //       { id: 2, titulo: 'Titulo 2' },
  //       { id: 3, titulo: 'Titulo 3' },
  //       { id: 4, titulo: 'Titulo 4' },
  //       { id: 5, titulo: 'Titulo 5' }
  //     ]
  //   }
  // },
  computed: {
    tituloEntrada() {
      return `Entrada de blog ${this.$route.params.entrada}`
    }
  }
}
</script>

<template>
  <div class="blog">
    <h1>{{ tituloEntrada }}</h1>

    <RouterLink :to="paginar(false)">Anterior</RouterLink>
    <RouterLink :to="paginar(true)">Siguiente</RouterLink>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name: 'blog', params: { entrada: post.id } }">
          Visita Post {{ post.titulo }}
        </RouterLink>
      </li>
    </ul> -->

    <button @click="volverInicio">Volver al home</button>
  </div>
</template>
