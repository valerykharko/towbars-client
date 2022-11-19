import { ITowbar } from "interfaces/towbar";

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
  SET_ADMIN_ORDER_ITEMS = "SET_ADMIN_ORDER_ITEMS",
  REMOVE_ADMIN_ORDER_ITEM = "REMOVE_ADMIN_ORDER_ITEM",
  PLUS_ADMIN_ORDER_ITEM = "PLUS_ADMIN_ORDER_ITEM",
  MINUS_ADMIN_ORDER_ITEM = "MINUS_ADMIN_ORDER_ITEM",
  CHANGE_ADMIN_ORDER_ITEM_PRICE = "CHANGE_ADMIN_ORDER_ITEM_PRICE",
}

interface AddItemToCart {
  type: CartActionsTypes.ADD_ITEM_TO_CART;
  payload: ITowbar | null;
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

interface SetAdminOrderItems {
  type: CartActionsTypes.SET_ADMIN_ORDER_ITEMS;
  payload: any;
}

interface RemoveAdminOrderItem {
  type: CartActionsTypes.REMOVE_ADMIN_ORDER_ITEM;
  payload: number;
}

interface PlusAdminOrderItem {
  type: CartActionsTypes.PLUS_ADMIN_ORDER_ITEM;
  payload: number;
}

interface MinusAdminOrderItem {
  type: CartActionsTypes.MINUS_ADMIN_ORDER_ITEM;
  payload: number;
}

interface ChangeAdminOrderItemPrice {
  type: CartActionsTypes.CHANGE_ADMIN_ORDER_ITEM_PRICE;
  payload: { id: number; price: number };
}

export type CartAction =
  | AddItemToCart
  | ClearCart
  | RemoveCartItem
  | PlusCartItem
  | MinusCartItem
  | SetAdminOrderItems
  | RemoveAdminOrderItem
  | PlusAdminOrderItem
  | MinusAdminOrderItem
  | ChangeAdminOrderItemPrice;
