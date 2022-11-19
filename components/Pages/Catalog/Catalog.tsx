import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { TreeMenu, TowbarsBlock } from "components/index";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Catalog.module.scss";

const Catalog = () => {
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

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const { car } = useTypedSelector((state) => state.car);

  const { fetchCar, fetchTowbars } = useActions();

  useEffect(() => {
    if (brand?.id && model?.id && generation?.id && bodyStyle?.id) {
      fetchCar(brand?.id, model?.id, generation?.id, bodyStyle?.id);
    }

    car && fetchTowbars(car.id);
  }, [car?.id]);

  return (
    <div className={styles.container}>
      {hydrated &&
        brand.name &&
        model.name &&
        generation.name &&
        bodyStyle.name && (
          <div>
            <TreeMenu item={"ТСУ на " + brand?.name + " " + model?.name} />
            <div className={styles.title}>
              <h1>
                {"Фаркопы на " +
                  brand?.name +
                  " " +
                  generation?.name +
                  " " +
                  bodyStyle?.name}
              </h1>
            </div>
          </div>
        )}
      <div className={styles.mainBlock}>
        <TowbarsBlock />
      </div>
    </div>
  );
};

export default Catalog;
