<script>
export default {
  name: 'ImgForm',
  data() {
    return {
      url: ''
    }
  }
}
</script>
<template>
  <form>
    <label>Banner URL</label>
    <input class="border border-1" type="text" v-model="url" />
  </form>

  <img :src="url" alt="" />
</template>
<style scoped></style>
