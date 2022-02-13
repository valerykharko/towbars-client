import { AxiosResponse } from "axios";
import $api from "http/index";
import { ITowbar } from "interfaces/towbar";

export default class TowbarService {
  static async getTowbars(
    carId: number,
    page: number,
    limit: number,
    options: object
  ): Promise<AxiosResponse<any>> {
    return $api.post<any>("/towbars/all", {
      carId,
      page,
      limit,
      options,
    });
  }

  static async getTowbarById(towbarId: number): Promise<AxiosResponse<any>> {
    return $api.get<any>("/towbars/" + towbarId);
  }

  static async getTowbarByCode(
    vendor_code: string
  ): Promise<AxiosResponse<ITowbar[]>> {
    return $api.get<ITowbar[]>("/towbars/get/byCode", {
      params: { vendor_code },
    });
  }
}
