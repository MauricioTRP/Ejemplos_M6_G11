<script>
export default {
  name: 'FormRange',
  data() {
    return {
      calificacion: ''
    }
  }
}
</script>
<template>
  <form>
    <label>¿Como calificas el servicio?</label>
    <ul>
      <li><input type="radio" v-model="calificacion" value="1" />Muy Malo</li>
      <li><input type="radio" v-model="calificacion" value="2" />Malo</li>
      <li><input type="radio" v-model="calificacion" value="3" />Ni chicha ni limoná</li>
      <li><input type="radio" v-model="calificacion" value="4" />Hueno</li>
      <li><input type="radio" v-model="calificacion" value="5" />Pulento</li>
    </ul>
  </form>
</template>

<style></style>
