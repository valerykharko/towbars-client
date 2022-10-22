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

  static async setUserAuto(
    brand: string,
    model: string,
    generation: string,
    body_style: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.patch<IUser>("/auth/user/auto", {
      brand,
      model,
      generation,
      body_style,
    });
  }

  static async removeUserAuto(): Promise<AxiosResponse<IUser>> {
    return $api.patch<IUser>("/auth/user/auto/remove");
  }

  static async checkRefreshToken(): Promise<AxiosResponse<any>> {
    return $api.get<any>("/auth/isValid");
  }
}
