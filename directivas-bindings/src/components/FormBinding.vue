<script>
export default {
  name: 'FormBinding',
  data() {
    return {
      nombreCurso: ''
    }
  }
}
</script>
<template>
  <div>
    <h1>
      Bienvenido al curso de <span>{{ nombreCurso }}</span>
    </h1>
    <input type="text" v-model.lazy="nombreCurso" />
  </div>
</template>
<style scoped>
input {
  border: 1px solid black;
}
span {
  color: #3fb27f;
}
</style>
