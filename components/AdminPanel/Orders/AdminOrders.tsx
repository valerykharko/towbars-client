import React from "react";
import { AdminOrdersTable, MenuAdmin } from "components";

import styles from "./AdminOrders.module.scss";

const AdminOrders = () => {
  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      <AdminOrdersTable />
    </div>
  );
};

export default AdminOrders;
