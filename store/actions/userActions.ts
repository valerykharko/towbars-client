import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "http/index";
import AuthService from "http/userAPI";
import LoggerService from "http/loggerAPI";
import { AuthResponse } from "http/response/AuthResponse";
import IUser, { UserAction, UserActionsTypes } from "interfaces/user";

export function setUser(data: IUser | null): UserAction {
  return { type: UserActionsTypes.SET_USER, payload: data };
}

export function setIsAuth(bool: boolean): UserAction {
  return { type: UserActionsTypes.SET_IS_AUTH, payload: bool };
}

export function setIsLoading(str: "start" | "pending" | "end"): UserAction {
  return { type: UserActionsTypes.SET_IS_LOADING, payload: str };
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.login(email, password);
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      console.log("Произошла ошибка", e.response?.data?.message);
    }
  };
};

export const registration = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.registration(email, password);
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      console.log("Произошла ошибка", e.response?.data?.message);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch) => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      dispatch(setIsAuth(false));
      dispatch(setUser(null));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading("pending"));
      const { data } = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
      dispatch(setIsLoading("end"));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const editUser = (
  firstName: string,
  secondName: string,
  patronymic: string,
  country: string,
  city: string,
  phoneNumber: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.editInfo(
        firstName,
        secondName,
        patronymic,
        country,
        city,
        phoneNumber
      );
      dispatch(setUser(data));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const log = (type: number, payload: any, location: any) => {
  return async () => {
    try {
      await LoggerService.createLog(type, payload, location);
    } catch (e: any) {
      console.log(e);
    }
  };
};
