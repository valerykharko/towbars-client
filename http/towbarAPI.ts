import { AxiosResponse } from "axios";
import $api from "http/index";
import { ITowbar } from "interfaces/towbar";

export default class TowbarService {
  static async getTowbars(carId: number): Promise<AxiosResponse<any>> {
    return $api.post<any>("/towbars/all", {
      carId,
    });
  }

  static async getTowbarById(towbarId: number): Promise<AxiosResponse<any>> {
    return $api.get<any>("/towbars/" + towbarId);
  }

  static async editTowbar(
    towbarId: number,
    payload: any
  ): Promise<AxiosResponse<ITowbar>> {
    return $api.patch<ITowbar>("/towbars/" + towbarId, {
      payload,
    });
  }

  static async editAllTowbarsPrice(
    payload: any
  ): Promise<AxiosResponse<ITowbar[]>> {
    return $api.patch<ITowbar[]>("/towbars", {
      payload,
    });
  }

  static async getTowbarByCode(
    vendor_code: string
  ): Promise<AxiosResponse<ITowbar[]>> {
    return $api.get<ITowbar[]>("/towbars/get/byCode", {
      params: { vendor_code },
    });
  }
}
