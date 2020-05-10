import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";
import logger from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(reducer, applyMiddleware(...middlewares));

export default { store };