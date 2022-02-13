import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import thunk, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { store, RootState } from "./reducers";

const makeStore = (context: Context) =>
  createStore(store, composeWithDevTools(applyMiddleware(thunk)));

// @ts-ignore
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
