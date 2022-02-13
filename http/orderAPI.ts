import { AxiosResponse } from "axios";
import $api from "http/index";
import IOrder from "interfaces/order";

export default class OrderService {
  static async makeOrder(
    firstName: string,
    secondName: string,
    phoneNumber: string,
    items: any,
    totalPrice: number,
    totalCount: number
  ): Promise<AxiosResponse<IOrder[]>> {
    return $api.post<IOrder[]>("/orders", {
      firstName,
      secondName,
      phoneNumber,
      items,
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

  static async getOrdersByUser(): Promise<AxiosResponse<IOrder[]>> {
    return $api.get<IOrder[]>("/orders/byUser");
  }
}
