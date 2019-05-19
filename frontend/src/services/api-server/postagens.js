import { api, ROTAS } from './axios'

const { postagens: path } = ROTAS

const listar = api.get(path)

const buscar = id => api.get(`${path}/${id}`)

const enviar = (
  id = Date.now(),
  data = Date.now(),
  titulo,
  conteudo,
  autor,
  categoria
) =>
  api.post(path, {
    id,
    timestamp: data,
    title: titulo,
    body: conteudo,
    author: autor,
    category: categoria
  })

const editar = (id, titulo, conteudo) =>
  api.put(`${path}/${id}`, {
    title: titulo,
    body: conteudo
  })

const votar = id => (opcao = true) =>
  api.post(`${path}/${id}`, {
    option: opcao ? 'upVote' : 'downVote'
  })

const deletar = id => api.delete(`${path}/${id}`)

const comentarios = id => api.get(`${path}/${id}/comments`)

export { listar, enviar, buscar, votar, editar, deletar, comentarios }
