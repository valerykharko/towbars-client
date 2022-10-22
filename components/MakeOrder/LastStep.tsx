import React from "react";

import styles from "./LastStep.module.scss"

const LastStep = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Ваши данные сохранены! Для завершения оформления нажмите "Завершить"</h1>
    </div>
  );
};

export default LastStep;
