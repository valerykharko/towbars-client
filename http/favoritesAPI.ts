import { AxiosResponse } from "axios";
import { IFavorite } from "interfaces/favorite";
import $api from "./index";

export default class FavoritesService {
  static async getFavorites(): Promise<AxiosResponse<IFavorite[]>> {
    return $api.get<IFavorite[]>("/favorites");
  }

  static async makeFavorite(
    towbarId: number
  ): Promise<AxiosResponse<IFavorite[]>> {
    return $api.post<IFavorite[]>("/favorites/add", {
      towbarId,
    });
  }

  static async removeFavorite(
    towbarId: number
  ): Promise<AxiosResponse<IFavorite[]>> {
    return $api.delete<IFavorite[]>("/favorites/remove", {
      params: { towbarId },
    });
  }
}
