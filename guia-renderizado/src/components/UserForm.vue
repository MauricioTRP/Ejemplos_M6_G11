<script>
export default {
  name: 'UserForm',
  data() {
    return {
      user: {
        name: '',
        picture: '',
        email: ''
      }
    }
  },
  methods: {
    cleanForm(event) {
      event.target.form.reset()
    },
    sendNewUser() {
      this.user.picture = 'https://robohash.org/' + this.user.picture
      this.$emit('new-user', this.user)
      this.user = {}
    }
  }
}
</script>
<template>
  <form @submit.prevent="sendNewUser">
    <div class="form-group">
      <label for="name">Nombre</label>
      <input id="name" placeholder="Nombre" type="text" v-model="user.name" />
    </div>
    <div class="form-group">
      <label for="picture">Foto</label>
      <input id="picture" placeholder="Foto" type="text" v-model="user.picture" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="text" v-model="user.email" />
    </div>
    <div class="form-group">
      <button type="submit">Agregar</button>
      <button @click.prevent.self="cleanForm">Limpiar</button>
    </div>
  </form>
</template>
<style>
form {
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-top: 1.5rem;
}
</style>
