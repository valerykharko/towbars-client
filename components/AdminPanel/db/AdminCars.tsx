import React from "react";
import { MenuAdmin } from "components/index";

import styles from "./AdminCars.module.scss";

const AdminCars = () => {
  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      Автомобили
    </div>
  );
};

export default AdminCars;
