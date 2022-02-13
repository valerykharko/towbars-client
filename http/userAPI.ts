import { AxiosResponse } from "axios";
import { AuthResponse } from "http/response/AuthResponse";
import $api from "./index";
import IUser from "interfaces/user";

export default class AuthService {
  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/registration", { email, password });
  }

  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/login", { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post("/auth/logout");
  }

  static async editInfo(
    firstName: string,
    secondName: string,
    phoneNumber: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.patch<IUser>("/auth/user", {
      firstName,
      secondName,
      phoneNumber,
    });
  }
}
