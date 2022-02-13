import { Dispatch } from "redux";
import IOrder, { OrderAction, OrderActionsTypes } from "interfaces/order";
import OrderService from "http/orderAPI";

export function setOrder(data: IOrder): OrderAction {
  return { type: OrderActionsTypes.SET_ORDER, payload: data };
}

export const makeUserOrder = (
  firstName: string,
  secondName: string,
  phoneNumber: string,
  items: any,
  totalPrice: number,
  totalCount: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await OrderService.makeOrder(
        firstName,
        secondName,
        phoneNumber,
        items,
        totalPrice,
        totalCount
      );
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
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};
