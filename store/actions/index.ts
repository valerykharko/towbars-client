import * as CarActionCreators from "./carActions";
import * as UserActionCreators from "./userActions";
import * as ManufacturerActionCreators from "./manufacturerActions";
import * as TowbarActionCreators from "./towbarActions";
import * as SortActionCreators from "./sortActions";
import * as CartActionCreators from "./cartActions";
import * as OrderActionCreators from "./orderActions";

export default {
  ...CarActionCreators,
  ...UserActionCreators,
  ...ManufacturerActionCreators,
  ...SortActionCreators,
  ...TowbarActionCreators,
  ...CartActionCreators,
  ...OrderActionCreators,
};
