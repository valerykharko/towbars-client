import { Dispatch } from "redux";
import { WiringKitAction, WiringKitActionsTypes } from "interfaces/wiringKit";
import WiringKitService from "http/wiringKitAPI";

export const fetchWiringKits = (
  carId: number,
  page: number,
  limit = 4,
  options: object
) => {
  return async (dispatch: Dispatch<WiringKitAction>) => {
    const { data } = await WiringKitService.getWiringKits(
      carId,
      page,
      limit,
      options
    );
    dispatch({
      type: WiringKitActionsTypes.FETCH_WIRING_KITS,
      payload: data.rows,
    });
    dispatch({
      type: WiringKitActionsTypes.SET_TOTAL_COUNT_WK,
      payload: data.count,
    });
  };
};

export function setCurrentPageWK(value: number): WiringKitAction {
  return { type: WiringKitActionsTypes.SET_CURRENT_PAGE, payload: value };
}

export const fetchWiringKitById = (wiringKitId: number) => {
  return async (dispatch: Dispatch<WiringKitAction>) => {
    const { data } = await WiringKitService.getWiringKitById(wiringKitId);
    dispatch({
      type: WiringKitActionsTypes.SET_CURRENT_WIRING_KIT,
      payload: data,
    });
  };
};

export const fetchWiringKitByCode = (vendor_code: string) => {
  return async (dispatch: Dispatch<WiringKitAction>) => {
    const { data } = await WiringKitService.getWiringKitByCode(vendor_code);
    dispatch({
      type: WiringKitActionsTypes.SET_SEARCH_VALUES,
      payload: data,
    });
  };
};
