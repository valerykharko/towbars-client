import {
  StatisticsAction,
  StatisticsActionsTypes,
  StatisticsState,
} from "interfaces/statistics";
import moment from "moment";

const initialState: StatisticsState = {
  dateRange: [
    moment("2022-05-22", "YYYY-MM-DD"),
    moment("2022-05-29", "YYYY-MM-DD"),
  ],
  report: [],
  statistic: [],
  orders: [],
  totalCount: 0,
};

export const statisticsReducer = (
  state = initialState,
  action: StatisticsAction
): StatisticsState => {
  switch (action.type) {
    case StatisticsActionsTypes.SET_STATISTIC:
      return {
        ...state,
        statistic: action.payload,
      };
    case StatisticsActionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case StatisticsActionsTypes.SET_REPORT:
      return {
        ...state,
        report: action.payload,
      };
    case StatisticsActionsTypes.SET_DATE_RANGE:
      return {
        ...state,
        dateRange: action.payload,
      };
    case StatisticsActionsTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
};
