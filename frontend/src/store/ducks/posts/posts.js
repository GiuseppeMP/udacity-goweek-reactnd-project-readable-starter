import { createReducer, createActions, resettableReducer } from 'reduxsauce'

/**
 * Initial State
 */
const INITIAL_STATE = { list: [], categoryId: null, searchTerms: '' }

/**
 * Action for Reset state;
 */
const resettable = resettableReducer('RESET')

/**
 * Types and Actions
 */
export const { Types, Creators } = createActions({
  getPosts: ['category']
})

/** Actions handlers */
export const getPosts = (state = INITIAL_STATE, { payload }) => {
  return state
}

/** Handlers */
export const HANDLERS = {
  [Types.GET_POSTS]: getPosts
}

/** Create and export reducer with reset */
export default resettable(createReducer(INITIAL_STATE, HANDLERS))
