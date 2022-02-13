import {
  TowbarAction,
  TowbarActionsTypes,
  TowbarState,
} from "interfaces/towbar";

const initialState: TowbarState = {
  towbars: [],
  towbar: null,
  page: 1,
  limit: 8,
  totalCount: 0,
  ballTypes: [],
  searchValues: [],
};

export const towbarReducer = (
  state = initialState,
  action: TowbarAction
): TowbarState => {
  switch (action.type) {
    case TowbarActionsTypes.FETCH_TOWBARS:
      return {
        ...state,
        towbars: action.payload,
      };
    case TowbarActionsTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case TowbarActionsTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case TowbarActionsTypes.SET_CURRENT_TOWBAR:
      return {
        ...state,
        towbar: action.payload,
      };
    case TowbarActionsTypes.SET_SEARCH_VALUES:
      return {
        ...state,
        searchValues: action.payload,
      };
    default:
      return state;
  }
};
