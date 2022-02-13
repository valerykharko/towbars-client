export interface IManufacturer {
  id: number;
  name: string;
  country: string;
  img: [string];
  doc: [string];
  description: string;
}

export interface ManufacturerState {
  manufacturers: Array<IManufacturer>;
  manufacturer: IManufacturer | undefined;
  stateToFind: Array<number>;
}

export enum ManufacturerActionsTypes {
  FETCH_MANUFACTURERS = "FETCH_MANUFACTURERS",
  FETCH_MANUFACTURER_BY_ID = "FETCH_MANUFACTURER_BY_ID",
  SET_INITIAL_STATE = "SET_INITIAL_STATE",
}

interface FetchManufacturers {
  type: ManufacturerActionsTypes.FETCH_MANUFACTURERS;
  payload: Array<IManufacturer>;
}

interface FetchManufacturerById {
  type: ManufacturerActionsTypes.FETCH_MANUFACTURER_BY_ID;
  payload: IManufacturer;
}

interface SetManufacturersToSearch {
  type: ManufacturerActionsTypes.SET_INITIAL_STATE;
  payload: IManufacturer;
}

export type ManufacturerAction =
  | FetchManufacturers
  | SetManufacturersToSearch
  | FetchManufacturerById;
