import { OrderAction, OrderActionsTypes, OrderState } from "interfaces/order";

const initialState: OrderState = {
  orders: null,
  ordersByUser: null,
  order: null,
};

export const orderReducer = (
  state = initialState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case OrderActionsTypes.MAKE_ORDER:
      return {
        ...state,
      };
    case OrderActionsTypes.FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case OrderActionsTypes.FETCH_ORDERS_BY_USER:
      return {
        ...state,
        ordersByUser: action.payload,
      };
    case OrderActionsTypes.SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case OrderActionsTypes.FETCH_ORDER_BY_ID:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
