import React from "react";
import { MenuAdmin } from "components";

import styles from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <div className={styles.adminContainer}>
      <MenuAdmin />
    </div>
  );
};

export default MainPage;
