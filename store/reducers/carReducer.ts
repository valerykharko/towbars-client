import { CarState, CarAction, CarActionsTypes } from "interfaces/car";

const initialState: CarState = {
  brands: [],
  models: [],
  generations: [],
  bodyStyles: [],
  brandActive: true,
  brandValue: undefined,
  modelActive: false,
  modelValue: undefined,
  generationActive: false,
  generationValue: undefined,
  bodyStyleActive: false,
  bodyStyleValue: undefined,
  car: undefined,
};

export const carReducer = (
  state = initialState,
  action: CarAction
): CarState => {
  switch (action.type) {
    case CarActionsTypes.SET_BRANDS:
      return { ...state, brands: action.payload };
    case CarActionsTypes.SET_MODELS:
      return { ...state, models: action.payload };
    case CarActionsTypes.SET_GENERATIONS:
      return { ...state, generations: action.payload };
    case CarActionsTypes.SET_BODY_STYLES:
      return { ...state, bodyStyles: action.payload };
    case CarActionsTypes.SET_BRAND:
      return { ...state, brandValue: action.payload };
    case CarActionsTypes.SET_BRAND_ACTIVE:
      return { ...state, brandActive: action.payload };
    case CarActionsTypes.SET_MODEL:
      return { ...state, modelValue: action.payload };
    case CarActionsTypes.SET_MODEL_ACTIVE:
      return { ...state, modelActive: action.payload };
    case CarActionsTypes.SET_GENERATION:
      return { ...state, generationValue: action.payload };
    case CarActionsTypes.SET_GENERATION_ACTIVE:
      return { ...state, generationActive: action.payload };
    case CarActionsTypes.SET_BODY_STYLE:
      return { ...state, bodyStyleValue: action.payload };
    case CarActionsTypes.SET_BODY_STYLE_ACTIVE:
      return { ...state, bodyStyleActive: action.payload };
    case CarActionsTypes.SET_CAR:
      return { ...state, car: action.payload };
    default:
      return state;
  }
};
