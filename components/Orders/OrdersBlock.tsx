import React, { useEffect } from "react";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./OrdersBlock.module.scss";
import { ITowbar } from "interfaces/towbar";

const OrdersBlock = () => {
  const { ordersByUser } = useTypedSelector((state) => state.order);

  const { fetchOrdersByUser } = useActions();

  useEffect(() => {
    fetchOrdersByUser();
  }, []);

  ordersByUser &&
    ordersByUser.map((item) => {
      console.log(item.items);
    });

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        {ordersByUser &&
          ordersByUser.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.header}>
                <span>Заказ {item.id}</span>
                <span>{item?.date.split("T")[0]}</span>
              </div>
              <div className={styles.orderItem}>
                {item.items.map((elem: any, index: any) =>
                  elem.items.map(
                    (oneItem: ITowbar, oneItemIndex: any) =>
                      oneItemIndex === 0 && (
                        <div className={styles.orderElement}>
                          <div className={styles.position}>
                            <span>{index + 1} позиция</span>
                          </div>
                          <div className={styles.image}>
                            <img
                              src={process.env.API_URL! + "/" + oneItem?.img[0]}
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
          ))}
      </div>
    </div>
  );
};

export default OrdersBlock;
