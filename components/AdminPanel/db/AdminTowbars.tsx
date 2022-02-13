import React from "react";
import { MenuAdmin } from "components/index";

import styles from "./AdminTowbars.module.scss";

const AdminTowbars = () => {
  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      Фаркопы
    </div>
  );
};

export default AdminTowbars;
