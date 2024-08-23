<script>
export default {
  name: 'FormCheckMusic',
  data() {
    return {
      generos: []
    }
  }
}
</script>
<template>
  <form>
    <label for="">¿Qué géneros te gustan?</label>
    <ul>
      <label><input type="checkbox" v-model="generos" value="rock" />Rock</label>
      <label><input type="checkbox" v-model="generos" value="reggaeton" />Reggaetón</label>
      <label><input type="checkbox" v-model="generos" value="rap" />Rap</label>
      <label><input type="checkbox" v-model="generos" value="k-pop" />K-pop</label>
      <label><input type="checkbox" v-model="generos" value="jazz" />Jazz</label>
      <label><input type="checkbox" v-model="generos" value="folclore" />Folk</label>
      <label
        ><input type="checkbox" v-model="generos" value="mekano-music" />Música de Mekano</label
      >
      <label><input type="checkbox" v-model="generos" value="yingo-music" />Música de Yingo</label>
    </ul>
  </form>

  <p>Géneros que te gustan:</p>
  <p>{{ generos }}</p>
</template>
