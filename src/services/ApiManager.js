import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.VUE_APP_BASE_URL !== undefined
      ? process.env.VUE_APP_BASE_URL
      : 'http://localhost:3000/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no',
    'X-Key-Inflection': 'camel'
  }
})

/*
 * The interceptor here ensures that we check for the token in local storage every time an api request is made
 */
api.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },

  error => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    return response
  },

  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      location.reload()
    }
    return Promise.reject(error)
  }
)

api.interceptors.response.use(response => {
  return response
})

export default api
