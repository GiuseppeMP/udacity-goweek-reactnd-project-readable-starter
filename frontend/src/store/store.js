import { createStore, combineReducers, applyMiddleware } from "redux";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import themeReducer from "./ducks/theme";

/** Create Redux Saga Middlewar */
const sagaMiddleware = createSagaMiddleware();

/** Combine reducers */
const reducers = combineReducers({
  theme: themeReducer
});

/** Create store Enhacer with middlewares and devtools */
const storeEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

/** Finally create store */
export const store = createStore(reducers, storeEnhancer);

/** Create Redux Saga yields entrypoints. */
function* watchAll() {
  yield all([]);
}

/**  Run Redux Saga middleware. */
sagaMiddleware.run(watchAll);
