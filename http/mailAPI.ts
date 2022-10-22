import { AxiosResponse } from "axios";
import $api from "http/index";
import { AuthResponse } from "http/response/AuthResponse";

export default class MailService {
  static async sendCallRequest(phoneNumber: string): Promise<AxiosResponse> {
    return $api.get<AuthResponse>("/mails/request-call", {
      params: { phoneNumber },
    });
  }
}
