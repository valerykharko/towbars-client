import {
  IManufacturer,
  ManufacturerAction,
  ManufacturerActionsTypes,
  ManufacturerState,
} from "interfaces/manufacturer";

const initialState: ManufacturerState = {
  manufacturers: [],
  manufacturer: undefined,
  stateToFind: [],
};

export const manufacturerReducer = (
  state = initialState,
  action: ManufacturerAction
): ManufacturerState => {
  switch (action.type) {
    case ManufacturerActionsTypes.FETCH_MANUFACTURERS:
      return <ManufacturerState>{
        ...state,
        manufacturers: action.payload,
      };
    case ManufacturerActionsTypes.SET_INITIAL_STATE: {
      let updatedCheckedState: number[] = [...state.stateToFind];
      if (state.stateToFind.length >= 6) {
        !!state.stateToFind.find((elem) => elem === action.payload.id)
          ? (updatedCheckedState = state.stateToFind.filter(
              (elem) => elem !== action.payload.id
            ))
          : alert("Больше выбрать нельзя");
      } else {
        !!state.stateToFind.find((elem) => elem === action.payload.id)
          ? (updatedCheckedState = state.stateToFind.filter(
              (elem) => elem !== action.payload.id
            ))
          : updatedCheckedState.push(action.payload.id);
      }
      return {
        ...state,
        stateToFind: updatedCheckedState,
      };
    }
    case ManufacturerActionsTypes.FETCH_MANUFACTURER_BY_ID:
      return {
        ...state,
        manufacturer: action.payload,
      };
    default:
      return state;
  }
};
