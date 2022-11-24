import axios, { AxiosResponse } from "axios";
import { LogsResponse } from "http/response/AuthResponse";
import $api from "http/index";

export default class LoggerService {
  static async createLog(
    type: number,
    payload: any,
    location: any
  ): Promise<AxiosResponse> {
    return axios.post(
      "http://localhost:5000/api/logs",
      { type, payload, location },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  static async getLogs(): Promise<AxiosResponse> {
    return $api.get<LogsResponse>("/logs");
  }
}
