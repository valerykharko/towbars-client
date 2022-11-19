import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { userReducer } from "./userReducer";
import { towbarReducer } from "./towbarReducer";
import { cartReducer } from "store/reducers/cartReducer";
import { orderReducer } from "store/reducers/orderReducer";
import { notificationReducer } from "store/reducers/notificationReducer";

export const store = combineReducers({
  car: carReducer,
  user: userReducer,
  towbar: towbarReducer,
  cart: cartReducer,
  order: orderReducer,
  notification: notificationReducer,
});

export type RootState = ReturnType<typeof store>;
