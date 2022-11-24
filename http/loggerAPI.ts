import { AxiosResponse } from "axios";
import { LogsResponse } from "http/response/AuthResponse";
import $api from "./index";

export default class AuthService {
  static async createLog(
    type: number,
    payload: any,
    location: any
  ): Promise<AxiosResponse> {
    return $api.post("/logs", { type, payload, location });
  }

  static async getLogs(): Promise<AxiosResponse> {
    return $api.get<LogsResponse>("/logs");
  }
}
