export interface ITowbar {
  id: number;
  vendor_code: string;
  max_hor: number;
  max_ver: number;
  ball_type: string;
  cutout: string;
  price: number;
  removing_bumper: boolean;
  dismantling_amplifier: boolean;
  drilling: string;
  installation_time: number;
  weight: number;
  with_cap: boolean;
  with_electrical: boolean;
  img: [string];
  doc: [string];
  video_link: [string];
  description: string;
  note: string;
  autoId: number;
  manufacturerId: number;
}

export interface TowbarState {
  towbars: Array<ITowbar>;
  towbar: ITowbar | null;
  page: number;
  limit: number;
  totalCount: number;
  ballTypes: Array<object>;
  searchValues: Array<ITowbar>;
}

export enum TowbarActionsTypes {
  FETCH_TOWBARS = "FETCH_TOWBARS",
  SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_CURRENT_TOWBAR = "SET_CURRENT_TOWBAR",
  SET_SEARCH_VALUES = "SET_SEARCH_VALUES",
}

interface FetchTowbars {
  type: TowbarActionsTypes.FETCH_TOWBARS;
  payload: Array<ITowbar>;
}

interface SetTotalCount {
  type: TowbarActionsTypes.SET_TOTAL_COUNT;
  payload: number;
}

interface SetCurrentPage {
  type: TowbarActionsTypes.SET_CURRENT_PAGE;
  payload: number;
}

interface SetCurrentTowbar {
  type: TowbarActionsTypes.SET_CURRENT_TOWBAR;
  payload: ITowbar;
}

interface SetSearchValues {
  type: TowbarActionsTypes.SET_SEARCH_VALUES;
  payload: Array<ITowbar>;
}

export type TowbarAction =
  | FetchTowbars
  | SetTotalCount
  | SetCurrentPage
  | SetCurrentTowbar
  | SetSearchValues;
