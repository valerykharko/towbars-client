import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./DropDownList.module.scss";

interface DropDownListProps {
  position: number;
  setActiveDropDownList: Function;
}

const DropDownList = ({
  position,
  setActiveDropDownList,
}: DropDownListProps) => {
  const [brand, setBrand] = useLocalStorage("brand", { id: 0, name: "" });
  const [model, setModel] = useLocalStorage("model", { id: 0, name: "" });
  const [generation, setGeneration] = useLocalStorage("generation", {
    id: 0,
    name: "",
  });
  const [bodyStyle, setBodyStyle] = useLocalStorage("bodyStyle", {
    id: 0,
    name: "",
  });

  const { brands, models, generations, bodyStyles } = useTypedSelector(
    (state) => state.car
  );

  const { fetchBrands, fetchModels, fetchGenerations, fetchBodyStyles } =
    useActions();

  const setValue = (value: { id: number; name: string }, type: string) => {
    type === "brand"
      ? setBrand({ id: value.id, name: value.name })
      : type === "model"
      ? setModel({ id: value.id, name: value.name })
      : type === "generation"
      ? setGeneration({ id: value.id, name: value.name })
      : type === "bodyStyle"
      ? setBodyStyle({ id: value.id, name: value.name })
      : "";
    setActiveDropDownList(false);
  };

  useEffect(() => {
    fetchBrands();
    brand && fetchModels(brand?.id);
    model && fetchGenerations(brand?.id, model.id);
    generation && fetchBodyStyles(brand?.id, model.id, generation.id);
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
                className={styles.block}
                onClick={() => setValue(brand, "brand")}
              >
                <span>{brand.name}</span>
              </div>
            ))
          : position === 2
          ? models.map((model) => (
              <div
                key={model.id}
                className={styles.block}
                onClick={() => setValue(model, "model")}
              >
                <span>{model.name}</span>
              </div>
            ))
          : position === 3
          ? generations.map((generation) => (
              <div
                key={generation.id}
                className={styles.block}
                onClick={() => setValue(generation, "generation")}
              >
                <span>{generation.name}</span>
              </div>
            ))
          : bodyStyles.map((bodyStyle) => (
              <div
                key={bodyStyle.id}
                className={styles.block}
                onClick={() => setValue(bodyStyle, "bodyStyle")}
              >
                <span>{bodyStyle.name}</span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DropDownList;
