<template>
  <h3>{{blogMessage}}</h3>
  <div class='container'>
    <BlogEntry v-for="entry in availableBlogs" :key="entry.id" v-bind:entry="entry" />
  </div>
</template>

<script>
import BlogEntry from './BlogEntry.vue'

export default {
  name: 'BlogList',
  created() {
    this.$store.dispatch('getBlogs')
  },
  data: function () {
    return {
      blogMessage: this.$store.state.mainMessage
    }
  },
  components: { BlogEntry },
  computed: {
      availableBlogs() {
      return this.$store.state.data
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    color: white;
    width: 60%;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  @media (max-width: 640px) {
    .container {
      width: 80%;
      font-size: 13px;
    }
  }
</style>