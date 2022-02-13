import { SortAction, SortActionsTypes } from "interfaces/sort";

export function setSortValue(value: string): SortAction {
  return { type: SortActionsTypes.SET_SORT_VALUE, payload: value };
}
