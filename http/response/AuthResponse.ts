import IUser from "interfaces/user";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
