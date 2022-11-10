import { Dispatch } from "redux";
import TowbarService from "http/towbarAPI";
import { ITowbar, TowbarAction, TowbarActionsTypes } from "interfaces/towbar";
import { CarAction, CarActionsTypes, IBrand } from "interfaces/car";
import CarService from "http/carAPI";

export const fetchTowbars = (carId: number) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.getTowbars(carId);
    dispatch({
      type: TowbarActionsTypes.FETCH_TOWBARS,
      payload: data,
    });
  };
};

export const fetchTowbarById = (towbarId: number) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.getTowbarById(towbarId);
    dispatch({
      type: TowbarActionsTypes.SET_CURRENT_TOWBAR,
      payload: data,
    });
  };
};

export const fetchTowbarByCode = (vendor_code: string) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.getTowbarByCode(vendor_code);
    dispatch({
      type: TowbarActionsTypes.SET_SEARCH_VALUES,
      payload: data,
    });
  };
};

export function setTowbarAdmin(value: ITowbar | null): TowbarAction {
  return { type: TowbarActionsTypes.SET_TOWBAR_ADMIN, payload: value };
}

export function setTowbarsAdmin(value: Array<ITowbar>): TowbarAction {
  return { type: TowbarActionsTypes.SET_TOWBARS_ADMIN, payload: value };
}

export const fetchTowbarByIdAdmin = (towbarId: number) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.getTowbarById(towbarId);
    dispatch(setTowbarAdmin(data));
  };
};

export const editAllTowbarsPrice = (payload: string) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.editAllTowbarsPrice(payload);
    dispatch(setTowbarsAdmin(data));
  };
};

export const editTowbar = (towbarId: number, payload: any) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.editTowbar(towbarId, payload);
    dispatch(setTowbarAdmin(data));
  };
};
