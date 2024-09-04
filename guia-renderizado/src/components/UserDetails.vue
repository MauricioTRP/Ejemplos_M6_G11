<script>
export default {
  name: 'UserDetails',
  props: ['name', 'picture', 'email', 'idx']
}
</script>
<template>
  <div>
    <img :src="picture" :alt="`${name} profile picture`" />
    <h2>{{ name }}</h2>
    <p>{{ email }}</p>
  </div>
</template>

<style>
div {
  flex-flow: column;
  align-items: center;
}
img {
  border-radius: 50%;
}
</style>
