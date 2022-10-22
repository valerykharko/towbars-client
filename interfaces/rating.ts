import { ITowbar } from "interfaces/towbar";
import IUser from "interfaces/user";
import { IManufacturer } from "interfaces/manufacturer";

export interface IRating {
  id: number;
  title: string;
  text: string;
  value: string;
  img: [string];
  date: string;
  userId: number;
  ratingId: number;
  rating: number;
  towbar: ITowbar;
  user: IUser;
}

export interface IUserRating {
  id: number;
  title: string;
  text: string;
  value: string;
  img: [string];
  date: string;
  userId: number;
  ratingId: number;
  rating: number;
  towbar: ITowbar;
  manufacturer: IManufacturer;
}

export interface IUserRatingData {
  rows: [IUserRating];
  count: number;
}

export interface ITowbarRating {
  rows: [IRating];
  rating: number;
  count: number;
}

export interface IIsUserRating {
  isUserRating: boolean;
  ratingId: number;
}

export interface RatingState {
  ratings_by_towbar: Array<IRating>;
  ratings_by_user: Array<IUserRating>;
  rating: number;
  isUserRating: IIsUserRating | null;
  pageT: number;
  limitT: number;
  totalCountT: number;
  pageU: number;
  limitU: number;
  totalCountU: number;
}

export enum RatingActionsTypes {
  FETCH_RATINGS_BY_TOWBAR = "FETCH_RATINGS_BY_TOWBAR",
  FETCH_RATINGS_BY_USER = "FETCH_RATINGS_BY_USER",
  ADD_RATING = "ADD_RATING",
  EDIT_RATING = "EDIT_RATING",
  REMOVE_RATING = "REMOVE_RATING",
  SET_IS_USER_RATING = "SET_IS_USER_RATING",
  SET_CURRENT_RATING = "SET_CURRENT_RATING",
  SET_CURRENT_PAGE_OF_RATINGS_T = "SET_CURRENT_PAGE_OF_RATINGS_T",
  SET_TOTAL_COUNT_OF_RATINGS_T = "SET_TOTAL_COUNT_OF_RATINGS_T",
  SET_CURRENT_PAGE_OF_RATINGS_U = "SET_CURRENT_PAGE_OF_RATINGS_U",
  SET_TOTAL_COUNT_OF_RATINGS_U = "SET_TOTAL_COUNT_OF_RATINGS_U",
}

interface SetIsUserRating {
  type: RatingActionsTypes.SET_IS_USER_RATING;
  payload: IIsUserRating;
}

interface SetCurrentRating {
  type: RatingActionsTypes.SET_CURRENT_RATING;
  payload: number;
}

interface SetCurrentPageOfRatingsT {
  type: RatingActionsTypes.SET_CURRENT_PAGE_OF_RATINGS_T;
  payload: number;
}

interface SetTotalCountOfRatingsT {
  type: RatingActionsTypes.SET_TOTAL_COUNT_OF_RATINGS_T;
  payload: number;
}

interface SetCurrentPageOfRatingsU {
  type: RatingActionsTypes.SET_CURRENT_PAGE_OF_RATINGS_U;
  payload: number;
}

interface SetTotalCountOfRatingsU {
  type: RatingActionsTypes.SET_TOTAL_COUNT_OF_RATINGS_U;
  payload: number;
}

interface FetchRatingsByTowbar {
  type: RatingActionsTypes.FETCH_RATINGS_BY_TOWBAR;
  payload: Array<IRating>;
}

interface FetchRatingsByUser {
  type: RatingActionsTypes.FETCH_RATINGS_BY_USER;
  payload: Array<IUserRating>;
}

interface AddRating {
  type: RatingActionsTypes.ADD_RATING;
  payload: Array<IRating>;
}

interface EditRating {
  type: RatingActionsTypes.EDIT_RATING;
  payload: Array<IRating>;
}

interface RemoveRating {
  type: RatingActionsTypes.REMOVE_RATING;
  payload: Array<IRating>;
}

export type RatingAction =
  | FetchRatingsByTowbar
  | FetchRatingsByUser
  | AddRating
  | EditRating
  | RemoveRating
  | SetIsUserRating
  | SetCurrentRating
  | SetCurrentPageOfRatingsT
  | SetTotalCountOfRatingsT
  | SetCurrentPageOfRatingsU
  | SetTotalCountOfRatingsU;
