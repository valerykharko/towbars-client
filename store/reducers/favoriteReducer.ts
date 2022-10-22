import {
  FavoriteAction,
  FavoriteActionsTypes,
  FavoriteState,
} from "interfaces/favorite";

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteReducer = (
  state = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case FavoriteActionsTypes.FETCH_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case FavoriteActionsTypes.ADD_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case FavoriteActionsTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
