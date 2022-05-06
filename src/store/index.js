import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: null,
    headerMessage: 'Welcome to Tomas Blog made in Vue',
    footerMessage: 'Here be the foot',
    mainMessage: 'Welcome to the Blog page',
    aboutMessage: 'So here is a section about me, my self, and everything in between'

  },
  mutations: {
    updateBlogs (state, data) {
      state.data = data
    }
  },
  getters: {
  },
  actions: {
    getBlogs ({ commit }) {
      axios.get('assets/blogs.json').then((response) => commit('updateBlogs', response.data)).catch(console.error)
    }
  }
})
