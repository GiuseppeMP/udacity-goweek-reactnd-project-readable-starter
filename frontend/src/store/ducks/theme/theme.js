import { createReducer, createActions, resettableReducer } from 'reduxsauce'

/**
 * Initial State
 */
const INITIAL_STATE = { theme: 1 }

/**
 * Action for Reset state;
 */
const resettable = resettableReducer('RESET')
/**
 * Types and Actions
 */
export const { Types, Creators } = createActions({
  applyDark: [],
  applyLight: []
})

/** Actions handlers */
export const applyDark = (state = INITIAL_STATE, { payload }) => {
  return state
}

export const applyLight = (state = INITIAL_STATE, { payload }) => {
  return state
}

/** Handlers */
export const HANDLERS = {
  [Types.APPLY_DARK]: applyDark,
  [Types.APPLY_LIGHT]: applyLight
}

/** Create and export reducer with reset */
export default resettable(createReducer(INITIAL_STATE, HANDLERS))
