import { rootreducer } from "../reducer/Combiner";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const storeforCredentials = createStore(
  rootreducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);
