import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/ApiManager'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token')
  },
  mutations: {},
  actions: {
    login(_, creds) {
      return new Promise((resolve, reject) => {
        Api.post('auth/login', {
          email: creds.email,
          password: creds.password
        })
          .then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.auth_token)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    logout() {
      return new Promise(resolve => {
        localStorage.removeItem('token')
        resolve()
      })
    }
  }
})
