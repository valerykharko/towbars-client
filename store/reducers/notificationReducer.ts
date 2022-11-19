import {
  NotificationAction,
  NotificationActionsTypes,
  NotificationState,
} from "interfaces/notification";

const initialState: NotificationState = {
  isActive: false,
};

export const notificationReducer = (
  state = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case NotificationActionsTypes.SET_ACTIVE:
      return { ...state, isActive: action.payload };
    default:
      return state;
  }
};
