import { AxiosResponse } from "axios";
import {
  IIsUserRating,
  IRating,
  ITowbarRating,
  IUserRating, IUserRatingData,
} from "interfaces/rating";
import $api from "./index";

export default class RatingsService {
  static async getRatingsByTowbar(
    towbarId: number,
    page: number,
    limit = 3
  ): Promise<AxiosResponse<ITowbarRating>> {
    return $api.post<ITowbarRating>("/ratings/byTowbar", {
      towbarId,
      page,
      limit,
    });
  }

  static async getIsUserRating(
    towbarId: number
  ): Promise<AxiosResponse<IIsUserRating>> {
    return $api.get<IIsUserRating>("/ratings/byUser", { params: { towbarId } });
  }

  static async getRatingsByUser(
    page: number,
    limit = 1
  ): Promise<AxiosResponse<IUserRatingData>> {
    return $api.post<IUserRatingData>("/ratings/byUser", {
      page,
      limit,
    });
  }

  static async makeRating(formData: any): Promise<AxiosResponse<IRating[]>> {
    return $api.post<IRating[]>("/ratings", formData);
  }

  static async editRating(towbarId: number): Promise<AxiosResponse<IRating[]>> {
    return $api.patch<IRating[]>("/ratings", {
      towbarId,
    });
  }

  static async removeRating(
    towbarId: number
  ): Promise<AxiosResponse<IRating[]>> {
    return $api.delete<IRating[]>("/ratings", {
      params: { towbarId },
    });
  }
}
