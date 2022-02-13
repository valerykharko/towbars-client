import React from "react";
import { MenuAdmin } from "components/index";

import styles from "components/AdminPanel/db/AdminCars.module.scss";

const AdminOrder = () => {
  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      Автомобили
    </div>
  );
};

export default AdminOrder;
