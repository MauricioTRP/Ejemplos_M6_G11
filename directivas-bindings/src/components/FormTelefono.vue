<script>
export default {
  name: 'FormTelefono',
  data() {
    return {
      numeroTelefono: ''
    }
  }
}
</script>
<template>
  <p>Para más información contactarse al número {{ numeroTelefono }}</p>
  <input type="text" v-model="numeroTelefono" />
</template>
<style scoped>
input {
  border: 1px solid black;
}
</style>
