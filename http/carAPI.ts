import { AxiosResponse } from "axios";
import { IBodyStyle, IBrand, ICar, IGeneration, IModel } from "interfaces/car";
import $api from "http/index";

export default class CarService {
  static async getBrands(): Promise<AxiosResponse<IBrand[]>> {
    return $api.get<IBrand[]>("/autos/brands");
  }

  static async getBrandById(brandId: number): Promise<AxiosResponse<IBrand>> {
    return $api.get<IBrand>("/autos/brands/" + brandId);
  }

  static async editBrand(
    brandId: number,
    value: boolean
  ): Promise<AxiosResponse<IBrand>> {
    return $api.patch<IBrand>("/autos/brands/" + brandId, {
      value,
    });
  }

  static async getModels(brandId: number): Promise<AxiosResponse<IModel[]>> {
    return $api.get<IModel[]>("/autos/models", { params: { brandId } });
  }

  static async getModelById(modelId: number): Promise<AxiosResponse<IModel>> {
    return $api.get<IModel>("/autos/models/" + modelId);
  }

  static async editModel(
    modelId: number,
    value: boolean
  ): Promise<AxiosResponse<IModel>> {
    return $api.patch<IModel>("/autos/models/" + modelId, {
      value,
    });
  }

  static async getGenerations(
    brandId: number,
    modelId: number
  ): Promise<AxiosResponse<IGeneration[]>> {
    return $api.get<IGeneration[]>("/autos/generations", {
      params: { brandId, modelId },
    });
  }

  static async getGenerationById(
    generationId: number
  ): Promise<AxiosResponse<IGeneration>> {
    return $api.get<IGeneration>("/autos/generations/" + generationId);
  }

  static async editGeneration(
    generationId: number,
    value: boolean
  ): Promise<AxiosResponse<IGeneration>> {
    return $api.patch<IGeneration>("/autos/generations/" + generationId, {
      value,
    });
  }

  static async getBodyStyles(
    brandId: number,
    modelId: number,
    generationId: number
  ): Promise<AxiosResponse<IBodyStyle[]>> {
    return $api.get<IBodyStyle[]>("/autos/body-styles", {
      params: { brandId, modelId, generationId },
    });
  }

  static async getCar(
    brandId: number,
    modelId: number,
    generationId: number,
    bodyStyleId: number
  ): Promise<AxiosResponse<ICar>> {
    return $api.get<ICar>("/autos/carId", {
      params: { brandId, modelId, generationId, bodyStyleId },
    });
  }

  static async getCarById(carId: number): Promise<AxiosResponse<ICar>> {
    return $api.get<ICar>("/autos/" + carId);
  }
}
