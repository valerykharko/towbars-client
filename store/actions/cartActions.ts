import { ITowbar } from "interfaces/towbar";
import { CartAction, CartActionsTypes } from "interfaces/cart";

export function addItemToCart(item: ITowbar | null): CartAction {
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

export function setAdminOrderItems(
  items: any,
  totalCount: number,
  totalPrice: number
): CartAction {
  return {
    type: CartActionsTypes.SET_ADMIN_ORDER_ITEMS,
    payload: { items, totalCount, totalPrice },
  };
}

export function removeAdminOrderItem(id: number): CartAction {
  return { type: CartActionsTypes.REMOVE_ADMIN_ORDER_ITEM, payload: id };
}

export function plusAdminOrderItem(id: number): CartAction {
  return { type: CartActionsTypes.PLUS_ADMIN_ORDER_ITEM, payload: id };
}

export function minusAdminOrderItem(id: number): CartAction {
  return { type: CartActionsTypes.MINUS_ADMIN_ORDER_ITEM, payload: id };
}

export function setNewPriceAdminOrderItem(
  id: number,
  price: number
): CartAction {
  return {
    type: CartActionsTypes.CHANGE_ADMIN_ORDER_ITEM_PRICE,
    payload: { id, price },
  };
}
