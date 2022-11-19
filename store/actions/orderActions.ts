import { Dispatch } from "redux";
import IOrder, { OrderAction, OrderActionsTypes } from "interfaces/order";
import OrderService from "http/orderAPI";
import { setAdminOrderItems } from "store/actions/cartActions";
import { CartAction } from "interfaces/cart";

export function setOrder(data: IOrder): OrderAction {
  return { type: OrderActionsTypes.SET_ORDER, payload: data };
}

export const makeUserOrder = (
  items: any,
  userData: any,
  totalPrice: number,
  totalCount: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await OrderService.makeOrder(
        items,
        userData,
        totalPrice,
        totalCount
      );
      dispatch(setOrder(data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const fetchOrdersByUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await OrderService.getOrdersByUser();
      dispatch({
        type: OrderActionsTypes.FETCH_ORDERS_BY_USER,
        payload: data,
      });
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const fetchAllOrders = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await OrderService.getOrders();
      dispatch({
        type: OrderActionsTypes.FETCH_ORDERS,
        payload: data,
      });
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const fetchOrderById = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await OrderService.getOrderById(id);
      dispatch({
        type: OrderActionsTypes.SET_ORDER,
        payload: data,
      });
      const items: any = {};
      data.items.map(
        (elem: any) => (items[elem.items[0].id as keyof typeof items] = elem)
      );
      dispatch(setAdminOrderItems(items, data.totalCount, data.totalPrice));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const editOrder = (orderId: number, payload: any) => {
  return async (dispatch: Dispatch<OrderAction>) => {
    const { data } = await OrderService.editBrand(orderId, payload);
    dispatch({
      type: OrderActionsTypes.SET_ORDER,
      payload: data,
    });
  };
};
