interface IUserAuto {
  brand: string;
  model: string;
  generation: string;
  body_style: string;
  img: [string];
}

export default interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  patronymic: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  isActivated: boolean;
  role: string;
}

export interface UserState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: "start" | "pending" | "end";
}

export enum UserActionsTypes {
  SET_USER = "SET_USER",
  EDIT_USER = "EDIT_USER",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_IS_LOADING = "SET_IS_LOADING",
}

interface SetUser {
  type: UserActionsTypes.SET_USER;
  payload: IUser | null;
}

interface EditUser {
  type: UserActionsTypes.EDIT_USER;
  payload: {};
}

interface SetIsAuth {
  type: UserActionsTypes.SET_IS_AUTH;
  payload: boolean;
}

interface SetIsLoading {
  type: UserActionsTypes.SET_IS_LOADING;
  payload: "start" | "pending" | "end";
}

export type UserAction = SetUser | EditUser | SetIsAuth | SetIsLoading;
