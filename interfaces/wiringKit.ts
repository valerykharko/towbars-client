import { IBodyStyle, IBrand, IGeneration, IModel } from "interfaces/car";
import { IManufacturer } from "interfaces/manufacturer";

export interface IWiringKit {
  id: number;
  vendor_code: string;
  pin: string;
  price: number;
  connection_time: string;
  weight: number;
  turn_control: string;
  disable_parking_sensors: string;
  CAN_bus: string;
  activation: string;
  encoding: string;
  permanent_plus: string;
  charger: string;
  with_block: string;
  img: [string];
  doc: [string];
  video_link: [string];
  description: string;
  note: string;
  autoId: number;
  manufacturerId: number;
  auto: {
    brand: IBrand;
    model: IModel;
    generation: IGeneration;
    bodyStyle: IBodyStyle;
  };
  manufacturer: IManufacturer;
}

export interface WiringKitState {
  wiringKits: Array<IWiringKit>;
  wiringKit: IWiringKit | null;
  page: number;
  limit: number;
  totalCount: number;
  searchValues: Array<IWiringKit>;
}

export enum WiringKitActionsTypes {
  FETCH_WIRING_KITS = "FETCH_WIRING_KITS",
  SET_TOTAL_COUNT_WK = "SET_TOTAL_COUNT_WK",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_CURRENT_WIRING_KIT = "SET_CURRENT_WIRING_KIT",
  SET_SEARCH_VALUES = "SET_SEARCH_VALUES",
}

interface FetchWiringKits {
  type: WiringKitActionsTypes.FETCH_WIRING_KITS;
  payload: Array<IWiringKit>;
}

interface SetTotalCount {
  type: WiringKitActionsTypes.SET_TOTAL_COUNT_WK;
  payload: number;
}

interface SetCurrentPage {
  type: WiringKitActionsTypes.SET_CURRENT_PAGE;
  payload: number;
}

interface SetCurrentWiringKit {
  type: WiringKitActionsTypes.SET_CURRENT_WIRING_KIT;
  payload: IWiringKit;
}

interface SetSearchValues {
  type: WiringKitActionsTypes.SET_SEARCH_VALUES;
  payload: Array<IWiringKit>;
}

export type WiringKitAction =
  | FetchWiringKits
  | SetTotalCount
  | SetCurrentPage
  | SetCurrentWiringKit
  | SetSearchValues;
