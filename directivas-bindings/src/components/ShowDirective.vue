<script>
export default {
  name: 'ShowDirective',
  data() {
    return { isVisible: true }
  }
}
</script>
<template>
  <h1 v-show="isVisible">El componente es visible</h1>
</template>
<style></style>
