import { createStore, combineReducers, applyMiddleware } from 'redux'
import { all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import postsReducer from './ducks/posts'

/** Criar Redux Saga Middleware */
const sagaMiddleware = createSagaMiddleware()

/** Combinar os reducers */
const reducers = combineReducers({
  posts: postsReducer
})

/** Criar store melhorada com os middlewares e devtools */
const storeEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

/** Por fim, instanciando a store */
export const store = createStore(reducers, storeEnhancer)

/** Criar Redux Saga yields entrypoints. */
function* watchAll() {
  yield all([])
}

/**  Por ultimo, Run Redux Saga middleware. */
sagaMiddleware.run(watchAll)
