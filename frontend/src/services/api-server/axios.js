import axios from 'axios'

const ROTAS = {
  categorias: '/categories',
  postagens: '/posts',
  comentarios: '/comments'
}

/**
 * Constante que armazena uma instancia do AXIOS,
 * customizada para realizar as chamadas para o BSS
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 60000
})

/**
 * Método responsável por criar os headers que forem
 * necessários para o funcionamento da webapp.
 */
const mountHeaders = () => ({
  'Content-Type': 'application/json',
  Autorization: Date.now()
})

/**
 * Interceptor que adicionar os headers
 */
api.interceptors.request.use(
  function(config) {
    config.headers = mountHeaders()
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export { api, ROTAS }
