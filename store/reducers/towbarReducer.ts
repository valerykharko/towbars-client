import {
  TowbarAction,
  TowbarActionsTypes,
  TowbarState,
} from "interfaces/towbar";

const initialState: TowbarState = {
  towbars: [],
  towbar: null,
  towbarAdmin: null,
  towbarsAdmin: [],
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
    case TowbarActionsTypes.SET_CURRENT_TOWBAR:
      return {
        ...state,
        towbar: action.payload,
      };
    case TowbarActionsTypes.SET_TOWBAR_ADMIN:
      return {
        ...state,
        towbarAdmin: action.payload,
      };
    case TowbarActionsTypes.SET_TOWBARS_ADMIN:
      return {
        ...state,
        towbarsAdmin: action.payload,
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
