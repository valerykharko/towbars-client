import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { userReducer } from "./userReducer";
import { manufacturerReducer } from "./manufacturerReducer";
import { sortReducer } from "./sortReducer";
import { towbarReducer } from "./towbarReducer";
import { wiringKitReducer } from "./wiringKitReducer";
import { cartReducer } from "store/reducers/cartReducer";
import { orderReducer } from "store/reducers/orderReducer";
import { favoriteReducer } from "store/reducers/favoriteReducer";
import { ratingReducer } from "store/reducers/ratingReducer";
import { statisticsReducer } from "store/reducers/statisticsReducer";

export const store = combineReducers({
  car: carReducer,
  user: userReducer,
  manufacturer: manufacturerReducer,
  sort: sortReducer,
  towbar: towbarReducer,
  wiringKit: wiringKitReducer,
  cart: cartReducer,
  order: orderReducer,
  favorite: favoriteReducer,
  rating: ratingReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof store>;
