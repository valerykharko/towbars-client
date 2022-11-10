import { CarState, CarAction, CarActionsTypes } from "interfaces/car";

const initialState: CarState = {
  brands: [],
  models: [],
  generations: [],
  bodyStyles: [],
};

export const carReducer = (
  state = initialState,
  action: CarAction
): CarState => {
  switch (action.type) {
    case CarActionsTypes.SET_BRANDS:
      return { ...state, brands: action.payload };
    case CarActionsTypes.SET_BRAND:
      return { ...state, brand: action.payload };
    case CarActionsTypes.SET_MODELS:
      return { ...state, models: action.payload };
    case CarActionsTypes.SET_MODEL:
      return { ...state, model: action.payload };
    case CarActionsTypes.SET_GENERATIONS:
      return { ...state, generations: action.payload };
    case CarActionsTypes.SET_GENERATION:
      return { ...state, generation: action.payload };
    case CarActionsTypes.SET_BODY_STYLES:
      return { ...state, bodyStyles: action.payload };
    case CarActionsTypes.SET_CAR:
      return { ...state, car: action.payload };
    default:
      return state;
  }
};
