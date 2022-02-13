import { UserAction, UserActionsTypes, UserState } from "interfaces/user";

const initialState: UserState = {
  user: null,
  isAuth: false,
  isLoading: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionsTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionsTypes.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case UserActionsTypes.EDIT_USER:
      return { ...state };
    default:
      return state;
  }
};
