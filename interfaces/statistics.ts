import { Moment } from "moment";
import IOrder from "./order";

export interface IStatistic {
  dateValue: string;
  count: string;
}

export interface StatisticsState {
  dateRange: [Moment, Moment];
  report: [];
  orders: [IOrder] | [];
  statistic: [IStatistic] | [];
  totalCount: number;
}

export enum StatisticsActionsTypes {
  SET_STATISTIC = "SET_STATISTIC",
  SET_ORDERS = "SET_ORDERS",
  SET_REPORT = "SET_REPORT",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  SET_DATE_RANGE = "SET_DATE_RANGE",
}

interface SetStatistic {
  type: StatisticsActionsTypes.SET_STATISTIC;
  payload: [IStatistic];
}

interface SetReport {
  type: StatisticsActionsTypes.SET_REPORT;
  payload: [];
}

interface SetOrders {
  type: StatisticsActionsTypes.SET_ORDERS;
  payload: [IOrder];
}

interface SetTotalCount {
  type: StatisticsActionsTypes.SET_TOTAL_COUNT;
  payload: number;
}

interface SetDateRange {
  type: StatisticsActionsTypes.SET_DATE_RANGE;
  payload: [Moment, Moment];
}

export type StatisticsAction =
  | SetStatistic
  | SetOrders
  | SetReport
  | SetTotalCount
  | SetDateRange;
