import { ITowbar } from "interfaces/towbar";

export interface IFavorite {
  id: number;
  userId: number;
  towbarId: number;
  towbar: ITowbar;
}

export interface FavoriteState {
  favorites: Array<IFavorite>;
}

export enum FavoriteActionsTypes {
  FETCH_FAVORITES = "FETCH_FAVORITES",
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
}

interface FetchFavorites {
  type: FavoriteActionsTypes.FETCH_FAVORITES;
  payload: Array<IFavorite>;
}

interface AddFavorite {
  type: FavoriteActionsTypes.ADD_FAVORITE;
  payload: Array<IFavorite>;
}

interface RemoveFavorite {
  type: FavoriteActionsTypes.REMOVE_FAVORITE;
  payload: Array<IFavorite>;
}

export type FavoriteAction = FetchFavorites | AddFavorite | RemoveFavorite;
