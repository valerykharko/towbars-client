export default interface IOrder {
  id: number;
  items: any;
  date: string;
  status: string;
  userData: {
    surname: string;
    name: string;
    patronymic: string;
    country: string;
    city: string;
    telNumber: string;
  };
  shipment_date: string;
  totalPrice: number;
  totalCount: number;
  user: {
    firstName: string;
    secondName: string;
    patronymic: string;
    country: string;
    city: string;
    phoneNumber: string;
    email: string;
  };
}

export interface OrderState {
  orders: Array<IOrder> | null;
  ordersByUser: Array<IOrder> | null;
  order: IOrder | null;
}

export enum OrderActionsTypes {
  MAKE_ORDER = "MAKE_ORDER",
  SET_ORDER = "SET_ORDER",
  FETCH_ORDERS = "FETCH_ORDERS",
  FETCH_ORDERS_BY_USER = "FETCH_ORDERS_BY_USER",
  FETCH_ORDER_BY_ID = "FETCH_ORDER_BY_ID",
}

interface MakeOrder {
  type: OrderActionsTypes.MAKE_ORDER;
}

interface SetOrder {
  type: OrderActionsTypes.SET_ORDER;
  payload: IOrder;
}

interface FetchOrders {
  type: OrderActionsTypes.FETCH_ORDERS;
  payload: Array<IOrder>;
}

interface FetchOrdersByUser {
  type: OrderActionsTypes.FETCH_ORDERS_BY_USER;
  payload: Array<IOrder>;
}

interface FetchOrderById {
  type: OrderActionsTypes.FETCH_ORDER_BY_ID;
  payload: IOrder;
}

export type OrderAction =
  | MakeOrder
  | SetOrder
  | FetchOrders
  | FetchOrdersByUser
  | FetchOrderById;
