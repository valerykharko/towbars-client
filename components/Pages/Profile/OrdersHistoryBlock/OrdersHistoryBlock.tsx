import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useTypedSelector } from "hooks/useTypedSelector";
import getTitleByBallType from "utils/towbars/getTitleByBallType";
import getPrice from "utils/towbars/getPrice";

import { ITowbar } from "interfaces/towbar";

import styles from "./OrdersHistoryBlock.module.scss";

const OrdersHistoryBlock = () => {
  const { ordersByUser } = useTypedSelector((state) => state.order);

  return (
    <>
      {ordersByUser &&
        ordersByUser.map(
          (item) =>
            item.status !== "Заявка в обработке" &&
            item.status !== "Заказ размещен" && (
              <div key={item.id} className={styles.container}>
                <div className={styles.item}>
                  <div className={styles.header}>
                    <div
                      className={`
                    ${styles.headerColor} ${
                        item?.status === "Заявка отклонена" &&
                        styles.headerColorOrange
                      }`}
                    >
                      <div />
                    </div>
                    <div className={styles.headerCenter}>
                      <span className={styles.headerCenterName}>
                        Заявка № {100 + item.id}
                      </span>
                      <span className={styles.headerCenterDate}>
                        от {item?.date.split("T")[0]}
                      </span>
                    </div>
                    <div className={styles.headerStatus}>
                      <span>{item?.status}</span>
                      <p>{item?.shipment_date}</p>
                    </div>
                  </div>
                  <div className={styles.orderItem}>
                    {item.items.map((elem: any, index: any) => (
                      <div key={index}>
                        {elem.items.map(
                          (oneItem: ITowbar, oneItemIndex: any) =>
                            oneItemIndex === 0 && (
                              <div
                                key={oneItem.id + oneItemIndex}
                                className={styles.orderElement}
                              >
                                <div className={styles.position}>
                                  <span>{index + 1}.</span>
                                </div>
                                <div className={styles.image}>
                                  <Link href={`/catalog/towbars/${oneItem.id}`}>
                                    <Image
                                      src={
                                        process.env.API_URL! +
                                        "/" +
                                        oneItem?.img[0]
                                      }
                                      alt={`towbar-img${index}`}
                                      width={1000}
                                      height={650}
                                    />
                                  </Link>
                                </div>
                                <div className={styles.name}>
                                  <span>
                                    {getTitleByBallType(oneItem.ball_type)}{" "}
                                    {oneItem?.vendor_code}
                                  </span>
                                  <p>
                                    {oneItem.manufacturer.name} (
                                    {oneItem.manufacturer.country})
                                  </p>
                                </div>
                                <div className={styles.count}>
                                  <span>Количество: {elem?.items?.length}</span>
                                </div>
                                <div className={styles.price}>
                                  <span>
                                    Стоимость: {getPrice(elem?.totalPrice)}
                                  </span>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={styles.otherInfo}>
                    <div className={styles.totalCount}>
                      <span>Общее количество: </span>
                      <span>{item?.totalCount}</span>
                    </div>
                    <div className={styles.totalPrice}>
                      <span>Итоговая стоимость: </span>
                      <span>{getPrice(item?.totalPrice)} </span>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default OrdersHistoryBlock;
