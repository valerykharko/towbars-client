import { ITowbar } from "interfaces/towbar";
import { IWiringKit } from "interfaces/wiringKit";

export interface CartState {
  items: object[];
  totalPrice: number;
  totalCount: number;
}

export enum CartActionsTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  CLEAR_CART = "CLEAR_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  PLUS_CART_ITEM = "PLUS_CART_ITEM",
  MINUS_CART_ITEM = "MINUS_CART_ITEM",
}

interface AddItemToCart {
  type: CartActionsTypes.ADD_ITEM_TO_CART;
  payload: ITowbar | null | IWiringKit;
}

interface ClearCart {
  type: CartActionsTypes.CLEAR_CART;
}

interface RemoveCartItem {
  type: CartActionsTypes.REMOVE_CART_ITEM;
  payload: number;
}

interface PlusCartItem {
  type: CartActionsTypes.PLUS_CART_ITEM;
  payload: number;
}

interface MinusCartItem {
  type: CartActionsTypes.MINUS_CART_ITEM;
  payload: number;
}

export type CartAction =
  | AddItemToCart
  | ClearCart
  | RemoveCartItem
  | PlusCartItem
  | MinusCartItem;
