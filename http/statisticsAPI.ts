import { AxiosResponse } from "axios";
import { Moment } from "moment";
import $api from "./index";
import { IStatistic } from "interfaces/statistics";

export default class StatisticsService {
  static async getStatistics(
    dateRange: [Moment, Moment]
  ): Promise<AxiosResponse<[IStatistic]>> {
    return $api.post<[IStatistic]>("/statistics/orders", {
      dateRange,
    });
  }
}
