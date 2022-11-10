import { Dispatch } from "redux";
import CarService from "http/carAPI";
import {
  CarAction,
  CarActionsTypes,
  IBodyStyle,
  IBrand,
  IGeneration,
  IModel,
} from "interfaces/car";

export function setBrands(value: IBrand[]): CarAction {
  return { type: CarActionsTypes.SET_BRANDS, payload: value };
}

export function setBrand(value: IBrand | undefined): CarAction {
  return { type: CarActionsTypes.SET_BRAND, payload: value };
}

export function setModels(value: IModel[]): CarAction {
  return { type: CarActionsTypes.SET_MODELS, payload: value };
}

export function setModel(value: IModel | undefined): CarAction {
  return { type: CarActionsTypes.SET_MODEL, payload: value };
}

export function setGenerations(value: IGeneration[]): CarAction {
  return { type: CarActionsTypes.SET_GENERATIONS, payload: value };
}

export function setGeneration(value: IGeneration | undefined): CarAction {
  return { type: CarActionsTypes.SET_GENERATION, payload: value };
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

export const fetchBrandById = (brandId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getBrandById(brandId);
    dispatch(setBrand(data));
  };
};

export const editBrand = (brandId: number, value: boolean) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.editBrand(brandId, value);
    dispatch(setBrand(data));
  };
};

export const fetchModels = (brandId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getModels(brandId);
    dispatch(setModels(data));
  };
};

export const fetchModelById = (modelId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getModelById(modelId);
    dispatch(setModel(data));
  };
};

export const editModel = (modelId: number, value: boolean) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.editModel(modelId, value);
    dispatch(setModel(data));
  };
};

export const fetchGenerations = (brandId: number, modelId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getGenerations(brandId, modelId);
    dispatch(setGenerations(data));
  };
};

export const fetchGenerationById = (generationId: number) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.getGenerationById(generationId);
    dispatch(setGeneration(data));
  };
};

export const editGeneration = (generationId: number, value: boolean) => {
  return async (dispatch: Dispatch<CarAction>) => {
    const { data } = await CarService.editGeneration(generationId, value);
    dispatch(setGeneration(data));
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
