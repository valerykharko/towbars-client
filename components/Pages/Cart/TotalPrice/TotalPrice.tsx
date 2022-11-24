import React from "react";
import Router from "next/router";
import { useLocalStorage } from "usehooks-ts";

import { Notification } from "components";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import getPrice from "utils/towbars/getPrice";

import styles from "./TotalPrice.module.scss";

interface TotalPriceProps {
  totalCount: number;
  totalPrice: number;
}

const TotalPrice = ({ totalCount, totalPrice }: TotalPriceProps) => {
  const [userLS, setUserLS] = useLocalStorage("user", {});

  const { user } = useTypedSelector((state) => state.user);
  const { isActive } = useTypedSelector((state) => state.notification);
  const { items } = useTypedSelector((state) => state.cart);

  const { setNotificationActive, log } = useActions();

  const onMakeOrder = () => {
    if (user?.id) {
      log(
        41,
        {
          cart: {
            items: items,
            totalCount: totalCount,
            totalPrice: totalPrice,
          },
        },
        userLS
      );
      Router.push("/order");
    } else {
      setNotificationActive(true);
      setTimeout(() => {
        Router.push("/auth/login");
      }, 6000);
    }
  };

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
        <button onClick={onMakeOrder}>
          <span>Перейти к оформлению</span>
        </button>
      </div>
      {isActive && (
        <Notification
          title="Необходима авторизация"
          subTitle="Оформление заявки доступно только авторизированным пользователям"
        />
      )}
    </div>
  );
};

export default TotalPrice;
