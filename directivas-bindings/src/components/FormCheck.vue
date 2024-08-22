<script>
export default {
  name: 'FormCheck',
  data() {
    return {
      lenguajes: []
    }
  }
}
</script>
<template>
  <form>
    <label for="">Lenguajes de programación que manejas</label>
    <ul>
      <label><input type="checkbox" v-model="lenguajes" value="html" />HTML</label>
      <label><input type="checkbox" v-model="lenguajes" value="CSS" />CSS</label>
      <label><input type="checkbox" v-model="lenguajes" value="JavaScript" />JavaScript</label>
      <label><input type="checkbox" v-model="lenguajes" value="Python" />Python</label>
      <label><input type="checkbox" v-model="lenguajes" value="Go" />Go</label>
      <label><input type="checkbox" v-model="lenguajes" value="Rust" />Rust</label>
    </ul>
  </form>

  <p>{{ lenguajes }}</p>
</template>
<style scoped></style>
