import React from "react";
import Router from "next/router";

import getPrice from "utils/towbars/getPrice";

import styles from "./TotalPrice.module.scss";

interface TotalPriceProps {
  totalCount: number;
  totalPrice: number;
}

const TotalPrice = ({ totalCount, totalPrice }: TotalPriceProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.totalCount}>
          <span>Товары ({totalCount})</span>
        </div>
        <div className={styles.totalPrice}>
          <span>Общая стоимость</span>
          <span>{getPrice(totalPrice)}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <button onClick={() => Router.push("/order")}>
          <span> Перейти к оформлению</span>
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
