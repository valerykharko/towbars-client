import React from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ITowbar } from "interfaces/towbar";

import styles from "./OrdersHistoryBlock.module.scss";

const OrdersHistoryBlock = () => {
  const { ordersByUser } = useTypedSelector((state) => state.order);

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        {ordersByUser &&
          ordersByUser.map(
            (item) =>
              (item.status === "Заказ выполнен" ||
                item.status === "Заказ отменен") && (
                <div key={item.id} className={styles.item}>
                  <div className={styles.header}>
                    <div
                      className={`
                    ${styles.header__color} ${
                        item?.status === "Заказ выполнен"
                          ? styles.header__colorBlue
                          : styles.header__colorRed
                      }`}
                    >
                      <div />
                    </div>
                    <div className={styles.header__center}>
                      <span className={styles.header__center__name}>
                        Заказ №{item.id}
                      </span>
                      <span className={styles.header__center__date}>
                        {item?.date.split("T")[0]}
                      </span>
                    </div>
                    <div className={styles.header__status}>
                      <span>{item?.status}</span>
                    </div>
                  </div>
                  <div className={styles.orderItem}>
                    {item.items.map((elem: any, index: any) =>
                      elem.items.map(
                        (oneItem: ITowbar, oneItemIndex: any) =>
                          oneItemIndex === 0 && (
                            <div
                              key={oneItem.id + oneItemIndex}
                              className={styles.orderElement}
                            >
                              <div className={styles.position}>
                                <span>{index + 1} позиция</span>
                              </div>
                              <div className={styles.image}>
                                <img
                                  src={
                                    process.env.API_URL! + "/" + oneItem?.img[0]
                                  }
                                  alt=""
                                />
                              </div>
                              <div className={styles.name}>
                                <span>Фаркоп {oneItem.vendor_code}</span>
                              </div>
                              <div className={styles.count}>
                                <span>Количество: {elem.items.length}</span>
                              </div>
                              <div className={styles.price}>
                                <span>Стоимость: {elem.totalPrice}</span>
                              </div>
                            </div>
                          )
                      )
                    )}
                  </div>
                  <div className={styles.otherInfo}>
                    <div className={styles.totalCount}>
                      <span>Общее количество: </span>
                      <span>{item.totalCount}</span>
                    </div>
                    <div className={styles.totalPrice}>
                      <span>Итоговая стоимость: </span>
                      <span>{item.totalPrice} BYN</span>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default OrdersHistoryBlock;
