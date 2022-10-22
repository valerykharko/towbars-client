import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { store, RootState } from "./reducers";

const makeStore = () =>
  createStore(store, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});
