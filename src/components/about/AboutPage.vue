<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: 'AboutPage',
  data: function () {
    return {
      message: this.$store.state.aboutMessage
    }
  }
}
</script>

<style scoped>

</style>