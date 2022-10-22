import * as CarActionCreators from "./carActions";
import * as UserActionCreators from "./userActions";
import * as ManufacturerActionCreators from "./manufacturerActions";
import * as TowbarActionCreators from "./towbarActions";
import * as WiringKitActionCreators from "./wiringKitActions";
import * as SortActionCreators from "./sortActions";
import * as CartActionCreators from "./cartActions";
import * as OrderActionCreators from "./orderActions";
import * as FavoriteActionCreators from "./favoriteActions";
import * as RatingActionCreators from "./ratingActions";
import * as StatisticsActionsCreators from "./statisticsActions";

export default {
  ...CarActionCreators,
  ...UserActionCreators,
  ...ManufacturerActionCreators,
  ...SortActionCreators,
  ...TowbarActionCreators,
  ...CartActionCreators,
  ...OrderActionCreators,
  ...FavoriteActionCreators,
  ...RatingActionCreators,
  ...StatisticsActionsCreators,
  ...WiringKitActionCreators,
};
