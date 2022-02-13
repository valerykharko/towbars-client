import React, { useEffect } from "react";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IBodyStyle, IBrand, IGeneration, IModel } from "interfaces/car";

import styles from "./DropDownList.module.scss";

interface DropDownListProps {
  position: number;
  setActiveDropDownList: Function;
}

const DropDownList = ({
  position,
  setActiveDropDownList,
}: DropDownListProps) => {
  const {
    brandValue,
    modelValue,
    generationValue,
    brands,
    models,
    generations,
    bodyStyles,
  } = useTypedSelector((state) => state.car);

  const {
    setBrandValue,
    setModelValue,
    setGenerationValue,
    setBodyStyleValue,
    fetchBrands,
    fetchModels,
    fetchGenerations,
    fetchBodyStyles,
  } = useActions();

  const setValueBrand = (value: IBrand) => {
    setActiveDropDownList(false);
    setBrandValue(value);
  };
  const setValueModel = (value: IModel) => {
    setActiveDropDownList(false);
    setModelValue(value);
  };
  const setValueGeneration = (value: IGeneration) => {
    setActiveDropDownList(false);
    setGenerationValue(value);
  };
  const setValueBodyStyle = (value: IBodyStyle) => {
    setActiveDropDownList(false);
    setBodyStyleValue(value);
  };

  useEffect(() => {
    fetchBrands();
    brandValue && fetchModels(brandValue.id);
    brandValue && modelValue && fetchGenerations(brandValue.id, modelValue.id);
    brandValue &&
      modelValue &&
      generationValue &&
      fetchBodyStyles(brandValue.id, modelValue.id, generationValue.id);
  }, []);

  return (
    <div
      className={
        position === 1
          ? styles.list
          : position === 2
          ? [styles.list, styles.listForModel].join(" ")
          : position === 3
          ? [styles.list, styles.listForGeneration].join(" ")
          : position === 4
          ? [styles.list, styles.listForBodyStyle].join(" ")
          : ""
      }
    >
      <div>
        {position === 1
          ? brands.map((brand) => (
              <div
                key={brand.id}
                className={styles.brand}
                onClick={() => setValueBrand(brand)}
              >
                <span>{brand.name}</span>
              </div>
            ))
          : position === 2
          ? models.map((model) => (
              <div
                key={model.id}
                className={styles.brand}
                onClick={() => setValueModel(model)}
              >
                <span>{model.name}</span>
              </div>
            ))
          : position === 3
          ? generations.map((generation) => (
              <div
                key={generation.id}
                className={styles.brand}
                onClick={() => setValueGeneration(generation)}
              >
                <span>{generation.name}</span>
              </div>
            ))
          : bodyStyles.map((bodyStyle) => (
              <div
                key={bodyStyle.id}
                className={styles.brand}
                onClick={() => setValueBodyStyle(bodyStyle)}
              >
                <span>{bodyStyle.name}</span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DropDownList;
