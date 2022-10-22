import { Dispatch } from "redux";
import { Moment } from "moment";
import {
  StatisticsAction,
  StatisticsActionsTypes,
} from "interfaces/statistics";
import StatisticsService from "http/statisticsAPI";

// export function setOrders(value: number): StatisticsAction {
//   return {
//     type: StatisticsActionsTypes.SET_ORDERS,
//     payload: value,
//   };
// }
//
// export function setReport(value: object): StatisticsAction {
//   return {
//     type: StatisticsActionsTypes.SET_REPORT,
//     payload: value,
//   };
// }

export function setDateRange(value: [Moment, Moment]): StatisticsAction {
  return {
    type: StatisticsActionsTypes.SET_DATE_RANGE,
    payload: value,
  };
}

export function fetchStatistics(dateRange: [Moment, Moment]) {
  return async (dispatch: Dispatch<StatisticsAction>) => {
    const { data } = await StatisticsService.getStatistics(dateRange);
    // const newReport = getArrayOfDates(
    //   dateRange.startDate,
    //   dateRange.endDate,
    //   data.report
    // );
    dispatch({
      type: StatisticsActionsTypes.SET_STATISTIC,
      payload: data,
    });
    // dispatch({
    //   type: StatisticsActionsTypes.SET_ORDERS,
    //   payload: data.orders,
    // });
    // dispatch({
    //   type: StatisticsActionsTypes.SET_REPORT,
    //   payload: data.report,
    // });

    let totalCount = 0;
    data &&
      data.map((elem: any) => (totalCount = totalCount + Number(elem.count)));

    dispatch({
      type: StatisticsActionsTypes.SET_TOTAL_COUNT,
      payload: totalCount,
    });
  };
}
