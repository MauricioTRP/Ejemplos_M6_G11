<script>
/**
 * route -> obtiene la ruta, parametros, queryString
 *
 * router -> enrutador: redireccionar
 */
export default {
  computed: {
    idProducto() {
      return this.$route.params.id
    }
  },
  methods: {
    volverAProductos() {
      return this.$router.push({ name: 'products' })
    }
  },
  // props: ['id', 'nombre', 'precio']
  props: {
    id: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
      required: true
    }
  }
}
</script>
<template>
  <h1>Producto N°{{ idProducto }}</h1>
  <p>{{ id }} - {{ nombre }} - $ {{ precio }}</p>

  <RouterLink :to="{ name: 'comentarios' }">Ver Comentarios</RouterLink>
  <RouterView />

  <button @click="volverAProductos">Volver a productos</button>
</template>
