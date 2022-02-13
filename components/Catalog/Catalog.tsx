import React, { useEffect, useState } from "react";
import { Slider, Switch } from "antd";
import {
  CatalogMenu,
  ManufacturersFilter,
  SortBlock,
  TreeMenu,
  TypeOfViewBlock,
  TowbarsBlock,
  TowbarPages,
  ModalDialogs,
} from "components";

import styles from "./Catalog.module.scss";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

const Catalog = () => {
  const [active, setActive] = useState<boolean>(true);

  const [value, setValue] = useState<[number, number]>([0, 1000]);
  const [isBumperCutOut, setIsBumperCutOut] = useState<boolean>(false);

  const onChangeSlider = (value: [number, number]) => {
    setValue(value);
  };

  const onChangeSwitch = () => {
    setIsBumperCutOut(!isBumperCutOut);
  };

  const { car, brandValue, modelValue, generationValue, bodyStyleValue } =
    useTypedSelector((state) => state.car);

  const { page, limit, totalCount } = useTypedSelector((state) => state.towbar);
  const { stateToFind } = useTypedSelector((state) => state.manufacturer);

  const { fetchCar, fetchTowbars } = useActions();

  const options = {
    price: value,
    manufacturers: stateToFind,
    isBumperCutOut: isBumperCutOut,
  };

  useEffect(() => {
    if (
      brandValue?.id &&
      modelValue?.id &&
      generationValue?.id &&
      bodyStyleValue?.id
    ) {
      fetchCar(
        brandValue?.id,
        modelValue?.id,
        generationValue?.id,
        bodyStyleValue?.id
      );
    }
    fetchTowbars(car?.id!, page, limit, options);
  }, [car?.id, page]);

  return (
    <div className={styles.container}>
      <div>
        <TreeMenu />
      </div>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.catalogTitle}>
            <button onClick={() => setActive(!active)}>
              <img src="/static/images/menu_catalog/list.png" alt="list-icon" />
              <span>Категории</span>
            </button>
          </div>
          {active && <CatalogMenu />}
          <div className={styles.price}>
            <div className={styles.priceTitle}>
              <span>Цена</span>
            </div>
            <div>
              <Slider
                min={0}
                max={1000}
                range={true}
                value={value}
                onChange={onChangeSlider}
              />
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputsItem}>
                <span>от</span>
                <input type="number" value={value[0]} readOnly={true} />
              </div>
              <div className={styles.inputsItem}>
                <span>до</span>
                <input type="number" value={value[1]} readOnly={true} />
              </div>
            </div>
          </div>
          <ManufacturersFilter />
          <div className={styles.IsBumperCutOut}>
            <span>Вырез бампера</span>
            <Switch onChange={onChangeSwitch} />
          </div>
          {/*<div className={styles.isImage}>*/}
          {/*  <span>Товары с фото</span>*/}
          {/*  <Switch onChange={onChangeSwitch} />*/}
          {/*</div>*/}
          <div className={styles.searchButton}>
            <button
              onClick={() => fetchTowbars(car?.id!, page, limit, options)}
            >
              <span>Поиск</span>
            </button>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.searchBlock}>
            <ModalDialogs />
          </div>
          <div className={styles.filters}>
            <div className={styles.totalCount}>
              <span>Товаров: </span>
              <span>{totalCount}</span>
            </div>
            <SortBlock />
            <TypeOfViewBlock />
          </div>
          <TowbarsBlock />
          <TowbarPages />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
