import { IBodyStyle, IBrand, IGeneration, IModel } from "interfaces/car";
import { IManufacturer } from "interfaces/manufacturer";

export interface ITowbar {
  id: number;
  vendor_code: string;
  max_hor: number;
  max_ver: number;
  ball_type: string;
  cutout: string;
  price: number;
  ratingValue: number;
  removing_bumper: boolean;
  dismantling_amplifier: boolean;
  drilling: string;
  installation_time: number;
  weight: number;
  with_cap: boolean;
  with_electrical: boolean;
  visible: boolean;
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

export interface TowbarState {
  towbars: Array<ITowbar>;
  towbar: ITowbar | null;
  towbarAdmin: ITowbar | null;
  towbarsAdmin: Array<ITowbar>;
  searchValues: Array<ITowbar>;
}

export enum TowbarActionsTypes {
  FETCH_TOWBARS = "FETCH_TOWBARS",
  SET_CURRENT_TOWBAR = "SET_CURRENT_TOWBAR",
  SET_TOWBAR_ADMIN = "SET_TOWBAR_ADMIN",
  SET_TOWBARS_ADMIN = "SET_TOWBARS_ADMIN",
  SET_SEARCH_VALUES = "SET_SEARCH_VALUES",
}

interface FetchTowbars {
  type: TowbarActionsTypes.FETCH_TOWBARS;
  payload: Array<ITowbar>;
}

interface SetCurrentTowbar {
  type: TowbarActionsTypes.SET_CURRENT_TOWBAR;
  payload: ITowbar;
}

interface SetTowbarAdmin {
  type: TowbarActionsTypes.SET_TOWBAR_ADMIN;
  payload: ITowbar | null;
}

interface SetTowbarsAdmin {
  type: TowbarActionsTypes.SET_TOWBARS_ADMIN;
  payload: Array<ITowbar>;
}

interface SetSearchValues {
  type: TowbarActionsTypes.SET_SEARCH_VALUES;
  payload: Array<ITowbar>;
}

export type TowbarAction =
  | FetchTowbars
  | SetCurrentTowbar
  | SetTowbarAdmin
  | SetTowbarsAdmin
  | SetSearchValues;
