import React from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./OrdersTable.module.scss";

const OrdersTable = () => {
  const { orders } = useTypedSelector((state) => state.order);

  const { fetchAllOrders } = useActions();

  const onClickHandler = () => {
    fetchAllOrders();
  };

  const data: any = [];
  // orders &&
  //   orders.map((order) =>
  //     data.push({
  //       key: order.id,
  //       id_order: order.id,
  //       date_order: order.date.split("T")[0],
  //       total_count: order.totalCount,
  //       total_price: order.totalPrice,
  //       status: order.status,
  //       client: order.secondName + " " + order.firstName,
  //     })
  //   );

  const columns = [
    {
      title: "ID заказа",
      dataIndex: "id_order",
    },
    {
      title: "Дата заказа",
      dataIndex: "date_order",
    },
    {
      title: "Общее количество товаров",
      dataIndex: "total_count",
    },
    {
      title: "Итоговая стоимость",
      dataIndex: "total_price",
    },
    {
      title: "Статус заказа",
      dataIndex: "status",
    },
    {
      title: "Клиент",
      dataIndex: "client",
    },
  ];

  const columns1 = [
    {
      title: "ID заказа",
      dataIndex: "id_order",
    },
    {
      title: "ID товара",
      dataIndex: "id_towbar",
    },
    {
      title: "Артикул",
      dataIndex: "vendor_code",
    },
    {
      title: "Количество",
      dataIndex: "count",
    },
    {
      title: "Цена за единицу",
      dataIndex: "price",
    },
    {
      title: "Стоимость",
      dataIndex: "totalPrice",
    },
  ];

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <div className={styles.table}>
        {/*{orders &&*/}
        {/*  orders.map((order) =>*/}
        {/*    order.items.map((elem: any, index: any) => (*/}
        {/*      <Table*/}
        {/*        columns={columns1}*/}
        {/*        dataSource={{*/}
        {/*          key: order.id + index,*/}
        {/*          id_order: order.id,*/}
        {/*          id_towbar: elem.id,*/}
        {/*          vendor_code: elem.vendor_code,*/}
        {/*          // count: elem.price,*/}
        {/*          price: elem.price,*/}
        {/*          // totalPrice: elem.status,*/}
        {/*        }}*/}
        {/*        pagination={false}*/}
        {/*      />*/}
        {/*    ))*/}
        {/*  )}*/}
      </div>
    </div>
  );
};

export default OrdersTable;
