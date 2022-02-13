import { Dispatch } from "redux";
import TowbarService from "http/towbarAPI";
import { TowbarAction, TowbarActionsTypes } from "interfaces/towbar";

export const fetchTowbars = (
  carId: number,
  page: number,
  limit = 10,
  options: object
) => {
  return async (dispatch: Dispatch<TowbarAction>) => {
    const { data } = await TowbarService.getTowbars(
      carId,
      page,
      limit,
      options
    );
    dispatch({
      type: TowbarActionsTypes.FETCH_TOWBARS,
      payload: data.rows,
    });
    dispatch({
      type: TowbarActionsTypes.SET_TOTAL_COUNT,
      payload: data.count,
    });
  };
};

export function setCurrentPage(value: number): TowbarAction {
  return { type: TowbarActionsTypes.SET_CURRENT_PAGE, payload: value };
}

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
    console.log(data);
    dispatch({
      type: TowbarActionsTypes.SET_SEARCH_VALUES,
      payload: data,
    });
  };
};
