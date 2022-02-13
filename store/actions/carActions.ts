import {
  CarAction,
  CarActionsTypes,
  IBodyStyle,
  IBrand,
  IGeneration,
  IModel,
} from "interfaces/car";
import { Dispatch } from "redux";
import CarService from "http/carAPI";

export function setBrands(value: IBrand[]): CarAction {
  return { type: CarActionsTypes.SET_BRANDS, payload: value };
}

export function setModels(value: IModel[]): CarAction {
  return { type: CarActionsTypes.SET_MODELS, payload: value };
}

export function setGenerations(value: IGeneration[]): CarAction {
  return { type: CarActionsTypes.SET_GENERATIONS, payload: value };
}

export function setBodyStyles(value: IBodyStyle[]): CarAction {
  return { type: CarActionsTypes.SET_BODY_STYLES, payload: value };
}

export function fetchCar(
  brandId: number,
  modelId: number,
  generationId: number,
  bodyStyleId: number
) {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getCar(
      brandId,
      modelId,
      generationId,
      bodyStyleId
    );
    dispatch({
      type: CarActionsTypes.SET_CAR,
      payload: data,
    });
  };
}

export function fetchCarById(carId: number) {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getCarById(carId);
    dispatch({
      type: CarActionsTypes.SET_CAR,
      payload: data,
    });
  };
}

export const fetchBrands = () => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getBrands();
    dispatch(setBrands(data));
  };
};

export const fetchModels = (brandId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getModels(brandId);
    dispatch(setModels(data));
  };
};

export const fetchGenerations = (brandId: number, modelId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getGenerations(brandId, modelId);
    dispatch(setGenerations(data));
  };
};

export const fetchBodyStyles = (
  brandId: number,
  modelId: number,
  generationId: number
) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getBodyStyles(
      brandId,
      modelId,
      generationId
    );
    dispatch(setBodyStyles(data));
  };
};

export function setBrandValue(value: IBrand): CarAction {
  return { type: CarActionsTypes.SET_BRAND, payload: value };
}

export function setBrandActive(isActive: boolean): CarAction {
  return { type: CarActionsTypes.SET_BRAND_ACTIVE, payload: isActive };
}

export function setModelValue(value: IModel): CarAction {
  return { type: CarActionsTypes.SET_MODEL, payload: value };
}

export function setModelActive(isActive: boolean): CarAction {
  return { type: CarActionsTypes.SET_MODEL_ACTIVE, payload: isActive };
}

export function setGenerationValue(value: IGeneration): CarAction {
  return { type: CarActionsTypes.SET_GENERATION, payload: value };
}

export function setGenerationActive(isActive: boolean): CarAction {
  return { type: CarActionsTypes.SET_GENERATION_ACTIVE, payload: isActive };
}

export function setBodyStyleValue(value: IBodyStyle): CarAction {
  return { type: CarActionsTypes.SET_BODY_STYLE, payload: value };
}

export function setBodyStyleActive(isActive: boolean): CarAction {
  return { type: CarActionsTypes.SET_BODY_STYLE_ACTIVE, payload: isActive };
}
