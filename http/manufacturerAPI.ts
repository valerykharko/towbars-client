import { AxiosResponse } from "axios";
import { IManufacturer } from "interfaces/manufacturer";
import $api from "http/index";

export default class ManufacturerService {
  static async getManufacturers(): Promise<AxiosResponse<IManufacturer[]>> {
    return $api.get<IManufacturer[]>("/manufacturers");
  }

  static async getManufacturerById(
    id: number
  ): Promise<AxiosResponse<IManufacturer>> {
    return $api.get<IManufacturer>("/manufacturers/" + id);
  }
}
