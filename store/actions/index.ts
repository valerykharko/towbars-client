import * as CarActionCreators from "./carActions";
import * as UserActionCreators from "./userActions";
import * as TowbarActionCreators from "./towbarActions";
import * as CartActionCreators from "./cartActions";
import * as OrderActionCreators from "./orderActions";
import * as NotificationActionCreators from "./notificationAction";

export default {
  ...CarActionCreators,
  ...UserActionCreators,
  ...TowbarActionCreators,
  ...CartActionCreators,
  ...OrderActionCreators,
  ...NotificationActionCreators,
};
