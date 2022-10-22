import {
  WiringKitAction,
  WiringKitActionsTypes,
  WiringKitState,
} from "interfaces/wiringKit";

const initialState: WiringKitState = {
  wiringKits: [],
  wiringKit: null,
  page: 1,
  limit: 4,
  totalCount: 0,
  searchValues: [],
};

export const wiringKitReducer = (
  state = initialState,
  action: WiringKitAction
): WiringKitState => {
  switch (action.type) {
    case WiringKitActionsTypes.FETCH_WIRING_KITS:
      return {
        ...state,
        wiringKits: action.payload,
      };
    case WiringKitActionsTypes.SET_TOTAL_COUNT_WK:
      return {
        ...state,
        totalCount: action.payload,
      };
    case WiringKitActionsTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case WiringKitActionsTypes.SET_CURRENT_WIRING_KIT:
      return {
        ...state,
        wiringKit: action.payload,
      };
    case WiringKitActionsTypes.SET_SEARCH_VALUES:
      return {
        ...state,
        searchValues: action.payload,
      };
    default:
      return state;
  }
};
