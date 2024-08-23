<script>
export default {
  name: 'FormTextArea',
  data() {
    return {
      form: {
        comentario: '',
        rows: '7',
        cols: '10'
      }
    }
  }
}
</script>
<template>
  <form>
    <label>Cuentanos sobre tu experiencia:</label>
    <textarea :rows="form.rows" :cols="form.cols" v-model.lazy="form.comentario"></textarea>
  </form>

  {{ form }}
</template>
<style scoped></style>
