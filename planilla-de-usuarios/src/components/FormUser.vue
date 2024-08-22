<script>
export default {
  name: 'FormUser',
  data() {
    return {
      user: {
        nombre: '',
        genero: '',
        nacionalidad: ''
      }
    }
  }
}
</script>
<template>
  <form>
    <div class="mt-2">
      <label for="user-name" class="form-label">Nombre</label>
      <input id="user-name" class="form-control" type="text" v-model="user.nombre" />
    </div>
    <div class="mt-2">
      <label for="nacionalidad" class="form-label">Nacionalidad</label>
      <select id="nacionalidad" v-model="user.nacionalidad">
        <option value="chile">Chile</option>
        <option value="extranjero">Extranjero</option>
      </select>
    </div>
    <div class="mt-2">
      <label for="genero" class="form-label">Género</label>

      <label for="femenino">Femenino</label>
      <input id="femenino" type="radio" v-model="user.genero" value="F" />
      <label for="masculino">Masculino</label>
      <input id="masculino" type="radio" v-model="user.genero" value="M" />
    </div>
  </form>

  <h2>Datos del usuario</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Nacionalidad</th>
        <th scope="col">Género</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{{ user.nombre }}</td>
        <td>{{ user.nacionalidad }}</td>
        <td>{{ user.genero }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped></style>
