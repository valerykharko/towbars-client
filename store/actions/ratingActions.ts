import { Dispatch } from "redux";
import RatingsService from "http/ratingsAPI";
import {
  RatingAction,
  RatingActionsTypes,
} from "interfaces/rating";

export function setCurrentPageOfRatingsT(value: number): RatingAction {
  return {
    type: RatingActionsTypes.SET_CURRENT_PAGE_OF_RATINGS_T,
    payload: value,
  };
}

export function setCurrentPageOfRatingsU(value: number): RatingAction {
  return {
    type: RatingActionsTypes.SET_CURRENT_PAGE_OF_RATINGS_U,
    payload: value,
  };
}

export function fetchRatingsByTowbar(
  towbarId: number,
  page: number,
  limit = 3
) {
  return async (dispatch: Dispatch<RatingAction>) => {
    const { data } = await RatingsService.getRatingsByTowbar(
      towbarId,
      page,
      limit
    );
    dispatch({
      type: RatingActionsTypes.FETCH_RATINGS_BY_TOWBAR,
      payload: data.rows,
    });
    dispatch({
      type: RatingActionsTypes.SET_CURRENT_RATING,
      payload: data.rating,
    });
    dispatch({
      type: RatingActionsTypes.SET_TOTAL_COUNT_OF_RATINGS_T,
      payload: data.count,
    });
  };
}

export function fetchIsUserRating(towbarId: number) {
  return async (dispatch: Dispatch<RatingAction>) => {
    const { data } = await RatingsService.getIsUserRating(towbarId);
    dispatch({
      type: RatingActionsTypes.SET_IS_USER_RATING,
      payload: data,
    });
  };
}

export function fetchRatingsByUser(page: number, limit = 1) {
  return async (dispatch: Dispatch<RatingAction>) => {
    const { data } = await RatingsService.getRatingsByUser(page, limit);
    dispatch({
      type: RatingActionsTypes.FETCH_RATINGS_BY_USER,
      payload: data.rows,
    });
    dispatch({
      type: RatingActionsTypes.SET_TOTAL_COUNT_OF_RATINGS_U,
      payload: data.count,
    });
  };
}

export function addRating(formData: any) {
  return async (dispatch: Dispatch<RatingAction>) => {
    await RatingsService.makeRating(formData);
  };
}

export function editRating(towbarId: number) {
  return async (dispatch: Dispatch<RatingAction>) => {
    const { data } = await RatingsService.editRating(towbarId);
    dispatch({
      type: RatingActionsTypes.EDIT_RATING,
      payload: data,
    });
  };
}

export function removeRating(towbarId: number) {
  return async (dispatch: Dispatch<RatingAction>) => {
    const { data } = await RatingsService.removeRating(towbarId);
    dispatch({
      type: RatingActionsTypes.REMOVE_RATING,
      payload: data,
    });
  };
}
