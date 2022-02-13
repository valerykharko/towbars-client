import { SortAction, SortActionsTypes, SortState } from "interfaces/sort";

const initialState: SortState = {
  sortValue: "Популярное",
};

export const sortReducer = (
  state = initialState,
  action: SortAction
): SortState => {
  switch (action.type) {
    case SortActionsTypes.SET_SORT_VALUE:
      return { ...state, sortValue: action.payload };
    default:
      return state;
  }
};
