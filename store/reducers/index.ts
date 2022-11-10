import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { userReducer } from "./userReducer";
import { towbarReducer } from "./towbarReducer";
import { cartReducer } from "store/reducers/cartReducer";
import { orderReducer } from "store/reducers/orderReducer";

export const store = combineReducers({
  car: carReducer,
  user: userReducer,
  towbar: towbarReducer,
  cart: cartReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof store>;
