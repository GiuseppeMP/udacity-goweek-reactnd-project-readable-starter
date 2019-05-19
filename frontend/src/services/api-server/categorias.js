import { api, ROTAS } from './axios'

const { categorias: path } = ROTAS

const listar = () => api.get(path)

const postagens = categoria => api.get(`${path}/${categoria}/posts`)

export { listar, postagens }
