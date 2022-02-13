import React from "react";
import { MenuAdmin } from "components/index";

import styles from "./AdminUsers.module.scss";

const AdminUsers = () => {
  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      Пользователи
    </div>
  );
};

export default AdminUsers;
