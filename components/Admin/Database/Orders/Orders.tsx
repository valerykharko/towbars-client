import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminPanel } from "components";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import getTitleByBallType from "utils/towbars/getTitleByBallType";
import getPrice from "utils/towbars/getPrice";

import styles from "./Orders.module.scss";
import { setNewPriceAdminOrderItem } from "store/actions/cartActions";

const Orders = () => {
  const [orderId, setOrderId] = useState<number>();
  const [statusLabelActive, setStatusLabelActive] = useState<boolean>(false);
  const [shipmentDateActive, setShipmentDateActive] = useState<boolean>(false);
  const [shipmentDate, setShipmentDate] = useState<string>("");
  const [priceActive, setPriceActive] = useState<any>({});
  const [price, setPrice] = useState<number>();

  const { order } = useTypedSelector((state) => state.order);
  const { adminOrderItems, adminTotalPrice, adminTotalCount } =
    useTypedSelector((state) => state.cart);

  const {
    fetchOrderById,
    editOrder,
    removeAdminOrderItem,
    minusAdminOrderItem,
    plusAdminOrderItem,
    setNewPriceAdminOrderItem,
  } = useActions();

  const getOrder = () => {
    orderId && fetchOrderById(orderId);
  };

  const editOrderStatus = (orderId: number, statusLabel: string) => {
    const payload = {
      status: statusLabel,
    };
    orderId && statusLabel && editOrder(orderId, payload);
    setStatusLabelActive(false);
  };

  const editOrderShipmentDate = () => {
    if (setShipmentDateActive && shipmentDate) {
      const payload = {
        shipment_date: shipmentDate,
      };
      order?.id && shipmentDate && editOrder(order.id, payload);
      setShipmentDateActive(false);
      setShipmentDate("");
    } else {
      setShipmentDateActive(!shipmentDateActive);
    }
  };

  const onEditOrder = () => {
    const payload = {
      items: adminOrderItems,
      totalCount: adminTotalCount,
      totalPrice: adminTotalPrice,
    };
    order?.id && editOrder(order.id, payload);
  };

  const onPriceChange = (id: number) => {
    price && setNewPriceAdminOrderItem(id, price);
    setPriceActive(false);
    setPrice(undefined);
  };

  const orderTowbars = Object.keys(adminOrderItems).map((key) => {
    return adminOrderItems[key].items[0];
  });

  // console.log(order);

  return (
    <AdminPanel link="Управление заказами">
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Введите id заказа</span>
          <input
            value={orderId || 0}
            onChange={(e) => setOrderId(Number(e.target.value))}
          />
          <button onClick={getOrder}>Найти</button>
        </div>
        <div className={styles.body}>
          {order && (
            <div className={styles.order}>
              <div className={styles.orderHeader}>
                <span>
                  Заказ №{100 + order.id} от {order.date.split("T")[0]}
                </span>
              </div>
              <div className={styles.userBlock}>
                <div className={styles.client}>
                  <strong>Оформлен на:</strong>
                  <div className={styles.clientInfo}>
                    <div>
                      <span>
                        {order.userData.surname} {order.userData.name}{" "}
                        {order.userData.patronymic}
                      </span>
                    </div>
                    <div>
                      <span>
                        {order.userData.country}, {order.userData.city}
                      </span>
                    </div>
                    <div>
                      <span>+{order.userData.telNumber}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.btnSave}>
                  <button onClick={onEditOrder}>
                    Сохранить изменения <br /> цены/количества
                  </button>
                </div>
                <div className={styles.user}>
                  <strong>Пользователь:</strong>
                  <div className={styles.userInfo}>
                    <div>
                      <span>
                        {order.user?.firstName} {order.user.secondName}{" "}
                        {order.user.patronymic}
                      </span>
                    </div>
                    <div>
                      <span>
                        {order.user.country}, {order.user.city}
                      </span>
                    </div>
                    <div>
                      <span>+{order.user.phoneNumber}</span>
                    </div>
                    <div>
                      <span>{order.user.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.orderBody}>
                <div className={styles.orderItems}>
                  <div className={styles.top}>
                    <div className={styles.status}>
                      <span>Статус: {order?.status}</span>
                      <button
                        onClick={() => setStatusLabelActive(!statusLabelActive)}
                      >
                        Изменить
                      </button>
                      {statusLabelActive && (
                        <div className={styles.statusLabels}>
                          <div
                            onClick={() =>
                              editOrderStatus(order.id, "Заказ размещен")
                            }
                          >
                            <span>Заказ размещен</span>
                          </div>
                          <div
                            onClick={() =>
                              editOrderStatus(order.id, "Заказ отгружен")
                            }
                          >
                            <span>Заказ отгружен</span>
                          </div>
                          <div
                            onClick={() =>
                              editOrderStatus(order.id, "Заявка отклонена")
                            }
                          >
                            <span>Заявка отклонена</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={styles.shipmentDate}>
                      <p>Дата отгрузки: {order?.shipment_date}</p>
                      {shipmentDateActive && (
                        <input
                          type="text"
                          value={shipmentDate}
                          onChange={(e) => setShipmentDate(e.target.value)}
                        />
                      )}
                      <button onClick={editOrderShipmentDate}>Изменить</button>
                    </div>
                  </div>
                  <div className={styles.orderItem}>
                    {orderTowbars &&
                      orderTowbars.map((elem: any, index) => (
                        <div key={elem.id} className={styles.orderElement}>
                          <div className={styles.position}>
                            <span>{index + 1}.</span>
                          </div>
                          <div className={styles.image}>
                            <Link href={`/catalog/towbars/${elem.id}`}>
                              <Image
                                src={process.env.API_URL! + "/" + elem?.img[0]}
                                alt={`towbar-img${index}`}
                                width={1000}
                                height={650}
                              />
                            </Link>
                          </div>
                          <div className={styles.name}>
                            <span>
                              {getTitleByBallType(elem.ball_type)}{" "}
                              {elem?.vendor_code}
                            </span>
                            <p>
                              {elem.manufacturer.name} (
                              {elem.manufacturer.country})
                            </p>
                          </div>
                          <div
                            className={styles.minus}
                            onClick={() => minusAdminOrderItem(elem.id)}
                          >
                            <Image
                              src="/static/images/cart/minus.png"
                              alt="minus-icon"
                              width={512}
                              height={512}
                            />
                          </div>
                          <div className={styles.count}>
                            <span>
                              Количество:{" "}
                              {
                                adminOrderItems[
                                  elem.id as keyof typeof adminOrderItems
                                ].items.length
                              }
                            </span>
                          </div>
                          <div
                            className={styles.plus}
                            onClick={() => plusAdminOrderItem(elem.id)}
                          >
                            <Image
                              src="/static/images/cart/plus.png"
                              alt="plus-icon"
                              width={512}
                              height={512}
                            />
                          </div>
                          <div className={styles.price}>
                            <div className={styles.price1}>
                              <span>Стоимость: &nbsp;</span>
                              <span>
                                {getPrice(
                                  adminOrderItems[
                                    elem.id as keyof typeof adminOrderItems
                                  ].totalPrice
                                )}
                              </span>
                            </div>
                            <div className={styles.price2}>
                              <div>
                                <span>Цена за ед.: &nbsp;</span>
                              </div>

                              {priceActive.bool === true &&
                              priceActive.index === elem.id ? (
                                <div>
                                  <input
                                    value={
                                      typeof price !== "undefined"
                                        ? price
                                        : elem.price
                                    }
                                    onChange={(e) =>
                                      setPrice(Number(e.target.value))
                                    }
                                  />
                                  <button
                                    onClick={() => onPriceChange(elem.id)}
                                  >
                                    Сохранить
                                  </button>
                                </div>
                              ) : (
                                <span
                                  onDoubleClick={() =>
                                    setPriceActive({
                                      bool: true,
                                      index: elem.id,
                                    })
                                  }
                                >
                                  {getPrice(elem.price)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div
                            className={styles.remove}
                            onClick={() => removeAdminOrderItem(elem.id)}
                          >
                            <Image
                              src="/static/images/cart/remove.png"
                              alt="plus-icon"
                              width={512}
                              height={512}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {adminTotalPrice && (
                    <div className={styles.otherInfo}>
                      <div className={styles.totalCount}>
                        <span>Общее количество: </span>
                        <span>{adminTotalCount}</span>
                      </div>
                      <div className={styles.totalPrice}>
                        <span>Итоговая стоимость: </span>
                        <span>{getPrice(adminTotalPrice)} </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminPanel>
  );
};

export default Orders;
