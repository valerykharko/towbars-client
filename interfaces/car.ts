export interface IBrand {
  id: number;
  name: string;
}

export interface IModel {
  id: number;
  name: string;
}

export interface IGeneration {
  id: number;
  name: string;
  year_of_issue: string;
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
  models: Array<IModel>;
  generations: Array<IGeneration>;
  bodyStyles: Array<IBodyStyle>;
  brandActive: boolean;
  brandValue: IBrand | undefined;
  modelActive: boolean;
  modelValue: IModel | undefined;
  generationActive: boolean;
  generationValue: IGeneration | undefined;
  bodyStyleActive: boolean;
  bodyStyleValue: IBodyStyle | undefined;
  car: ICar | undefined;
}

export enum CarActionsTypes {
  SET_BRANDS = "SET_BRANDS",
  SET_MODELS = "SET_MODELS",
  SET_GENERATIONS = "SET_GENERATIONS",
  SET_BODY_STYLES = "SET_BODY_STYLES",
  SET_BRAND = "SET_BRAND",
  SET_BRAND_ACTIVE = "SET_BRAND_ACTIVE",
  SET_MODEL = "SET_MODEL",
  SET_MODEL_ACTIVE = "SET_MODEL_ACTIVE",
  SET_GENERATION = "SET_GENERATION",
  SET_GENERATION_ACTIVE = "SET_GENERATION_ACTIVE",
  SET_BODY_STYLE = "SET_BODY_STYLE",
  SET_BODY_STYLE_ACTIVE = "SET_BODY_STYLE_ACTIVE",
  SET_CAR = "SET_CAR",
}

interface SetBrands {
  type: CarActionsTypes.SET_BRANDS;
  payload: IBrand[];
}
interface SetModels {
  type: CarActionsTypes.SET_MODELS;
  payload: IModel[];
}
interface SetGenerations {
  type: CarActionsTypes.SET_GENERATIONS;
  payload: IGeneration[];
}
interface SetBodyStyles {
  type: CarActionsTypes.SET_BODY_STYLES;
  payload: IBodyStyle[];
}

interface SetBrand {
  type: CarActionsTypes.SET_BRAND;
  payload: IBrand;
}
interface SetBrandActive {
  type: CarActionsTypes.SET_BRAND_ACTIVE;
  payload: boolean;
}

interface SetModel {
  type: CarActionsTypes.SET_MODEL;
  payload: IModel;
}

interface SetModelActive {
  type: CarActionsTypes.SET_MODEL_ACTIVE;
  payload: boolean;
}

interface SetGeneration {
  type: CarActionsTypes.SET_GENERATION;
  payload: IGeneration;
}
interface SetGenerationActive {
  type: CarActionsTypes.SET_GENERATION_ACTIVE;
  payload: boolean;
}

interface SetBodyStyle {
  type: CarActionsTypes.SET_BODY_STYLE;
  payload: IBodyStyle;
}
interface SetBodyStyleActive {
  type: CarActionsTypes.SET_BODY_STYLE_ACTIVE;
  payload: boolean;
}

interface SetCar {
  type: CarActionsTypes.SET_CAR;
  payload: ICar;
}

export type CarAction =
  | SetBrands
  | SetModels
  | SetGenerations
  | SetBodyStyles
  | SetBrand
  | SetBrandActive
  | SetModel
  | SetModelActive
  | SetGeneration
  | SetGenerationActive
  | SetBodyStyle
  | SetBodyStyleActive
  | SetCar;
