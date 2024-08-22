<script>
export default {
  name: 'FormDinamicoImg',
  data() {
    return {
      image: ''
    }
  }
}
</script>
<template>
  <form>
    <label>Animal: </label>
    <select v-model="image">
      <option value="tigre">Tigre</option>
      <option
        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjcIL3Bcxak5UscWPVA8OHvYf8RuiWoZrDw&s"
      >
        Oso
      </option>
      <option
        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-5Eqi3pEyTJliNa7kuLG1Zs81FZQDckdeQ&s"
      >
        Leon
      </option>
    </select>
    <div>
      <img :src="image" alt="imagen" />
    </div>
  </form>
</template>
