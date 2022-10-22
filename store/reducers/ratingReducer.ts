import {
  RatingAction,
  RatingActionsTypes,
  RatingState,
} from "interfaces/rating";

const initialState: RatingState = {
  ratings_by_towbar: [],
  ratings_by_user: [],
  isUserRating: null,
  rating: 0,
  pageT: 1,
  limitT: 3,
  totalCountT: 0,
  pageU: 1,
  limitU: 1,
  totalCountU: 0,
};

export const ratingReducer = (
  state = initialState,
  action: RatingAction
): RatingState => {
  switch (action.type) {
    case RatingActionsTypes.SET_IS_USER_RATING:
      return {
        ...state,
        isUserRating: action.payload,
      };
    case RatingActionsTypes.SET_TOTAL_COUNT_OF_RATINGS_T:
      return {
        ...state,
        totalCountT: action.payload,
      };
    case RatingActionsTypes.SET_CURRENT_PAGE_OF_RATINGS_U:
      return {
        ...state,
        pageU: action.payload,
      };
    case RatingActionsTypes.SET_CURRENT_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case RatingActionsTypes.SET_TOTAL_COUNT_OF_RATINGS_U:
      return {
        ...state,
        totalCountU: action.payload,
      };
    case RatingActionsTypes.FETCH_RATINGS_BY_TOWBAR:
      return {
        ...state,
        ratings_by_towbar: action.payload,
      };
    case RatingActionsTypes.FETCH_RATINGS_BY_USER:
      return {
        ...state,
        ratings_by_user: action.payload,
      };
    // case RatingActionsTypes.ADD_RATING:
    //   return {
    //     ...state,
    //     ratings_by_towbar: action.payload,
    //     ratings_by_user: action.payload,
    //   };
    // case RatingActionsTypes.EDIT_RATING:
    //   return {
    //     ...state,
    //     ratings_by_towbar: action.payload,
    //     ratings_by_user: action.payload,
    //   };
    // case RatingActionsTypes.REMOVE_RATING:
    //   return {
    //     ...state,
    //     ratings_by_towbar: action.payload,
    //     ratings_by_user: action.payload,
    //   };
    default:
      return state;
  }
};
