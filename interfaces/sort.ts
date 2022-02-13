export interface SortState {
  sortValue: string;
}

export enum SortActionsTypes {
  SET_SORT_VALUE = "SET_SORT_VALUE",
}

interface SetSortValue {
  type: SortActionsTypes.SET_SORT_VALUE;
  payload: string;
}

export type SortAction = SetSortValue;
