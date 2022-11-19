import { AxiosResponse } from "axios";
import $api from "http/index";
import IOrder from "interfaces/order";

export default class OrderService {
  static async makeOrder(
    items: any,
    userData: any,
    totalPrice: number,
    totalCount: number
  ): Promise<AxiosResponse<IOrder>> {
    return $api.post<IOrder>("/orders", {
      items,
      userData,
      totalPrice,
      totalCount,
    });
  }

  static async getOrders(): Promise<AxiosResponse<IOrder[]>> {
    return $api.get<IOrder[]>("/orders/all");
  }

  static async getOrderById(orderId: number): Promise<AxiosResponse<IOrder>> {
    return $api.get<IOrder>("/orders/" + orderId);
  }

  static async editBrand(
    orderId: number,
    payload: any
  ): Promise<AxiosResponse<IOrder>> {
    return $api.patch<IOrder>("/orders/" + orderId, {
      payload,
    });
  }

  static async getOrdersByUser(): Promise<AxiosResponse<IOrder[]>> {
    return $api.get<IOrder[]>("/orders/byUser");
  }
}
