import IUser from "interfaces/user";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface LogsResponse {
  id: number;
  type: number;
  value: any;
  date: number;
  user: IUser;
  location: any;
}
