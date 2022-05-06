import { createRouter, createWebHashHistory } from 'vue-router'
import BlogList from '../components/blog/BlogList.vue'
import AboutPage from '../components/about/AboutPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: BlogList
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: AboutPage
    }
  }
  ]
})
