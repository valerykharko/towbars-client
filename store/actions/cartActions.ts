import { ITowbar } from "interfaces/towbar";
import { CartAction, CartActionsTypes } from "interfaces/cart";
import { IWiringKit } from "interfaces/wiringKit";

export function addItemToCart(item: ITowbar | null | IWiringKit): CartAction {
  return { type: CartActionsTypes.ADD_ITEM_TO_CART, payload: item };
}

export function clearCart(): CartAction {
  return { type: CartActionsTypes.CLEAR_CART };
}

export function removeCartItem(id: number): CartAction {
  return { type: CartActionsTypes.REMOVE_CART_ITEM, payload: id };
}

export function plusCartItem(id: number): CartAction {
  return { type: CartActionsTypes.PLUS_CART_ITEM, payload: id };
}

export function minusCartItem(id: number): CartAction {
  return { type: CartActionsTypes.MINUS_CART_ITEM, payload: id };
}
