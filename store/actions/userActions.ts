import axios from "axios";
import { API_URL } from "http/index";
import AuthService from "http/userAPI";
import IUser, { UserAction, UserActionsTypes } from "interfaces/user";
import { Dispatch } from "redux";
import { AuthResponse } from "http/response/AuthResponse";
import openNotification from "utils/notifications";
import openTrueNotification from "utils/notifications/true";

export function setUser(data: IUser | null): UserAction {
  return { type: UserActionsTypes.SET_USER, payload: data };
}

export function setIsAuth(bool: boolean): UserAction {
  return { type: UserActionsTypes.SET_IS_AUTH, payload: bool };
}

export function setIsLoading(bool: boolean): UserAction {
  return { type: UserActionsTypes.SET_IS_AUTH, payload: bool };
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.login(email, password);
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      openNotification("Произошла ошибка", e.response?.data?.message);
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
      openNotification("Произошла ошибка", e.response?.data?.message);
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
      const { data } = await axios.get<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", data.accessToken);
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const editUser = (
  firstName: string,
  secondName: string,
  phoneNumber: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.editInfo(
        firstName,
        secondName,
        phoneNumber
      );
      dispatch(setUser(data));
      openTrueNotification("Успешно!", "Ваши изменения сохранены");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const setUserAuto = (
  brand: string,
  model: string,
  generation: string,
  body_style: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.setUserAuto(
        brand,
        model,
        generation,
        body_style
      );
      dispatch(setUser(data));
      openTrueNotification("Успешно!", "Ваш автомобиль сохранен");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const removeUserAuto = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await AuthService.removeUserAuto();
      dispatch(setUser(data));
      openTrueNotification("Успешно!", "Ваш автомобиль был удален");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};
