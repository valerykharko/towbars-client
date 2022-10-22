import { Dispatch } from "redux";
import { FavoriteAction, FavoriteActionsTypes } from "interfaces/favorite";
import FavoritesService from "http/favoritesAPI";

export function fetchFavorites() {
  return async (dispatch: Dispatch<FavoriteAction>) => {
    const { data } = await FavoritesService.getFavorites();
    dispatch({
      type: FavoriteActionsTypes.FETCH_FAVORITES,
      payload: data,
    });
  };
}

export function addToFavorites(towbarId: number) {
  return async (dispatch: Dispatch<FavoriteAction>) => {
    const { data } = await FavoritesService.makeFavorite(towbarId);
    dispatch({
      type: FavoriteActionsTypes.ADD_FAVORITE,
      payload: data,
    });
  };
}

export function removeFromFavorites(towbarId: number) {
  return async (dispatch: Dispatch<FavoriteAction>) => {
    const { data } = await FavoritesService.removeFavorite(towbarId);
    dispatch({
      type: FavoriteActionsTypes.REMOVE_FAVORITE,
      payload: data,
    });
  };
}
