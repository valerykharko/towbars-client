import React from "react";

import { ITowbar } from "interfaces/towbar";

import styles from "./Specifications.module.scss";

interface SpecificationsProps {
  towbar: ITowbar;
}

const Specifications = ({ towbar }: SpecificationsProps) => {
  return (
    <div className={styles.specifications}>
      <h3>Технические характеристики</h3>
      <div className={styles.table}>
        <div className={styles.left}>
          <div>
            <span>Производитель</span>
          </div>
          <div>
            <span>Страна производства</span>
          </div>
          <div>
            <span>Артикул</span>
          </div>
          <div>
            <span>Тип шара</span>
          </div>
          <div>
            <span>Горизонтальная нагрузка</span>
          </div>
          <div>
            <span>Вертикальная нагрузка</span>
          </div>
          <div>
            <span>Вырез в бампере</span>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <span>{towbar.manufacturer.name}</span>
          </div>
          <div>
            <span>{towbar.manufacturer.country}</span>
          </div>
          <div>
            <span>{towbar.vendor_code}</span>
          </div>
          <div>
            <span>{towbar.ball_type}</span>
          </div>
          <div>
            <span>{towbar.max_hor}</span>
          </div>
          <div>
            <span>{towbar.max_ver}</span>
          </div>
          <div>
            <span>{towbar.cutout}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
