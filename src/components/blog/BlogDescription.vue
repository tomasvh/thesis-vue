<template>
  <div v-for="item in textContent" v-bind:key="item" >
    {{item}}
  </div>
</template>

<script>
export default {
  name: 'BlogDescription',
  props: ['content'],
  data: function () {
    return {
      textContent: this.content,
    }
  },
  methods: {
  }

}
</script>
<style scoped>

</style>