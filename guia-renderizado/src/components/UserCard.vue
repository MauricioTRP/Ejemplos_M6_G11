<script>
export default {
  name: 'UserCard',
  props: ['name', 'picture', 'email', 'idx'],
  methods: {
    deleteUser() {
      this.$emit('delete-user', this.idx)
    },
    changeSelected() {
      this.$emit('change-selected', this.idx)
    }
  }
}
</script>
<template>
  <div :id="idx">
    <img @click="changeSelected" :src="picture" :alt="`Picture of ${name}`" />
    <h2>{{ name }}</h2>
    <p>{{ email }}</p>
    <button @click="deleteUser">Delete</button>
  </div>
</template>
<style scoped>
img {
  border-radius: 50%;
  height: 5rem;
}
</style>
