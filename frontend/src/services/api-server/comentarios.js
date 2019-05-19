import { api, ROTAS } from './axios'

const { comentarios: path } = ROTAS

const comentar = postagem => (
  id = Date.now(),
  data = Date.now(),
  conteudo,
  autor
) =>
  api.post(path, {
    id,
    timestamp: data,
    body: conteudo,
    author: autor,
    parentId: postagem
  })

const buscar = id => api.get(`${path}/${id}`)

const votar = id => (opcao = true) =>
  api.post(`${path}/${id}`, {
    option: opcao ? 'upVote' : 'downVote'
  })

const editar = (id, conteudo, data = Date.now()) =>
  api.put(`${path}/${id}`, { timestamp: data, body: conteudo })

const deletar = id => api.delete(`${path}/${id}`)

export { comentar, buscar, votar, editar, deletar }
