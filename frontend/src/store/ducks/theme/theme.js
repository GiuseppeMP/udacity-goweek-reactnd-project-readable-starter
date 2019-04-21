import { createReducer, createActions, resettableReducer } from "reduxsauce";

/** Available themes */
import light from "./light";
import dark from "./dark";

/**
 * Initial State
 */
const INITIAL_STATE = { selected: light };

/**
 * Action for Reset state;
 */
const resettable = resettableReducer("RESET");
/**
 * Types and Actions
 */
export const { Types, Creators } = createActions({
  applyDark: [],
  applyLight: []
});

/** Actions handlers */
export const applyDark = (state = INITIAL_STATE, { payload }) => {
  return { selected: dark };
};

export const applyLight = (state = INITIAL_STATE, { payload }) => {
  return { selected: light };
};

/** Handlers */
export const HANDLERS = {
  [Types.APPLY_DARK]: applyDark,
  [Types.APPLY_LIGHT]: applyLight
};

/** Create and export reducer with reset */
export default resettable(createReducer(INITIAL_STATE, HANDLERS));
