export interface NotificationState {
  isActive: boolean;
}

export enum NotificationActionsTypes {
  SET_ACTIVE = "SET_ACTIVE",
}

interface SetNotificationActive {
  type: NotificationActionsTypes.SET_ACTIVE;
  payload: boolean;
}

export type NotificationAction = SetNotificationActive;
