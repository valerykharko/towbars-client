import React from "react";
import { AdminOrdersTable } from "components/index";

import styles from "./AdminOrders.module.scss";

const AdminOrders = () => {
  return (
    <div className={styles.wrapper}>
      <AdminOrdersTable />
    </div>
  );
};

export default AdminOrders;
