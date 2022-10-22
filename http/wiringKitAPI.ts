import { AxiosResponse } from "axios";
import $api from "http/index";
import { IWiringKit } from "interfaces/wiringKit";

export default class WiringKitService {
  static async getWiringKits(
    carId: number,
    page: number,
    limit: number,
    options: object
  ): Promise<AxiosResponse<any>> {
    return $api.post<any>("/wiring-kits/all", {
      carId,
      page,
      limit,
      options,
    });
  }

  static async getWiringKitById(towbarId: number): Promise<AxiosResponse<any>> {
    return $api.get<any>("/wiring-kits/" + towbarId);
  }

  static async getWiringKitByCode(
    vendor_code: string
  ): Promise<AxiosResponse<IWiringKit[]>> {
    return $api.get<IWiringKit[]>("/wiring-kits/byCode", {
      params: { vendor_code },
    });
  }
}
