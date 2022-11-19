import {
  NotificationAction,
  NotificationActionsTypes,
} from "interfaces/notification";

export function setNotificationActive(value: boolean): NotificationAction {
  return { type: NotificationActionsTypes.SET_ACTIVE, payload: value };
}
