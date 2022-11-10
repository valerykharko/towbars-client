export interface IBrand {
  id: number;
  name: string;
  visible: boolean;
}

export interface IModel {
  id: number;
  name: string;
  visible: boolean;
}

export interface IGeneration {
  id: number;
  name: string;
  year_of_issue: string;
  visible: boolean;
}

export interface IBodyStyle {
  id: number;
  name: string;
}

export interface ICar {
  id: number;
  smart: string;
  img: [string];
  brandId: number;
  modelId: number;
  generationId: number;
  bodyStyleId: number;
  brand: string;
  model: string;
  generation: string;
  year_of_issue: string;
  bodyStyle: string;
}

export interface CarState {
  brands: Array<IBrand>;
  brand?: IBrand;
  models: Array<IModel>;
  model?: IModel;
  generations: Array<IGeneration>;
  generation?: IGeneration;
  bodyStyles: Array<IBodyStyle>;
  car?: ICar;
}

export enum CarActionsTypes {
  SET_BRANDS = "SET_BRANDS",
  SET_BRAND = "SET_BRAND",
  SET_MODELS = "SET_MODELS",
  SET_MODEL = "SET_MODEL",
  SET_GENERATIONS = "SET_GENERATIONS",
  SET_GENERATION = "SET_GENERATION",
  SET_BODY_STYLES = "SET_BODY_STYLES",
  SET_CAR = "SET_CAR",
}

interface SetBrands {
  type: CarActionsTypes.SET_BRANDS;
  payload: IBrand[];
}
interface SetBrand {
  type: CarActionsTypes.SET_BRAND;
  payload: IBrand | undefined;
}
interface SetModels {
  type: CarActionsTypes.SET_MODELS;
  payload: IModel[];
}
interface SetModel {
  type: CarActionsTypes.SET_MODEL;
  payload: IModel | undefined;
}
interface SetGenerations {
  type: CarActionsTypes.SET_GENERATIONS;
  payload: IGeneration[];
}
interface SetGeneration {
  type: CarActionsTypes.SET_GENERATION;
  payload: IGeneration | undefined;
}
interface SetBodyStyles {
  type: CarActionsTypes.SET_BODY_STYLES;
  payload: IBodyStyle[];
}
interface SetCar {
  type: CarActionsTypes.SET_CAR;
  payload: ICar;
}

export type CarAction =
  | SetBrands
  | SetBrand
  | SetModels
  | SetModel
  | SetGenerations
  | SetGeneration
  | SetBodyStyles
  | SetCar;
