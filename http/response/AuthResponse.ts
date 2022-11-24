import IUser from "interfaces/user";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface LogsResponse {
  id: string;
  type: number;
  value: any;
  date: Date;
  user: IUser;
  location: any;
}
