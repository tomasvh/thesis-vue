<template>
  <div class="post-container">
    <p><strong>Id:</strong> {{blogEntry.id}}</p>
    <p><strong>Title:</strong> {{blogEntry.title}}</p>
    <p><strong>Date:</strong> {{new Date(blogEntry.date)}}</p>
    <img class="blog-image" :src="blogEntry.image" alt="{{blogEntry.title}}" />
    <BlogDescription v-bind:content="blogEntry.content" />
  </div>
</template>

<script>
import BlogDescription from './BlogDescription.vue'

export default {
  name: 'BlogEntry',
  props: ['entry'],
  components: { BlogDescription },
  data: function () {
    return {
      blogEntry: this.entry
    }
  }
  
}
</script>
<style scoped>
  .post-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 2vw;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0 0 3px 3px lightblue;
  }

  .blog-image {
    max-width: 80%;
    border-radius: 5px;
  }
</style>