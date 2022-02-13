import React from "react";
import { MenuAdmin } from "components/index";

import styles from "./AdminOrders.module.scss";
import { Button, Table } from "antd";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ITowbar } from "interfaces/towbar";

const AdminOrders = () => {
  const { orders } = useTypedSelector((state) => state.order);

  const { fetchAllOrders } = useActions();

  const onClickHandler = () => {
    fetchAllOrders();
  };

  const columns = [
    {
      title: "Номер позиции",
      dataIndex: "number",
    },
    {
      title: "Товар",
      dataIndex: "orderItem",
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

  const data: any = [];
  orders &&
    orders.map((order) =>
      order.items.map((elem: any, index: any) =>
        elem.items.map(
          (item: ITowbar, itemIndex: any) =>
            itemIndex === 0 &&
            data.push({
              key: order.id,
              number: order.id,
              orderItem: index + 1,
              vendor_code: item.vendor_code,
              count: elem.items.length,
              price: item.price,
              totalPrice: elem.totalPrice,
            })
        )
      )
    );

  console.log(data);

  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      <div className={styles.container} onClick={onClickHandler}>
        <Button>Получить все заказы</Button>
        <div className={styles.table}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
