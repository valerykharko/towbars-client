import { Dispatch } from "redux";
import {
  IManufacturer,
  ManufacturerAction,
  ManufacturerActionsTypes,
} from "interfaces/manufacturer";
import ManufacturerService from "http/manufacturerAPI";

export const fetchManufacturers = () => {
  return async (dispatch: Dispatch<ManufacturerAction>) => {
    const { data } = await ManufacturerService.getManufacturers();
    dispatch({
      type: ManufacturerActionsTypes.FETCH_MANUFACTURERS,
      payload: data,
    });
  };
};

export const fetchManufacturerById = (id: number) => {
  return async (dispatch: Dispatch<ManufacturerAction>) => {
    const { data } = await ManufacturerService.getManufacturerById(id);
    dispatch({
      type: ManufacturerActionsTypes.FETCH_MANUFACTURER_BY_ID,
      payload: data,
    });
  };
};

export function setStateForFindAction(
  value: IManufacturer
): ManufacturerAction {
  return { type: ManufacturerActionsTypes.SET_INITIAL_STATE, payload: value };
}
