import React from "react";
import { MenuAdmin } from "components/index";

import styles from "./AdminStatistics.module.scss";

const AdminStatistics = () => {
  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      Заказы
    </div>
  );
};

export default AdminStatistics;
