import React, { useState } from "react";

import styles from "./TypeOfViewBlock.module.scss";

const TypeOfViewBlock = () => {
  const [activeType, setActiveType] = useState(1);

  return (
    <div className={styles.typeOfView}>
      <div
        className={
          activeType !== 1
            ? styles.type
            : [styles.type, styles.typeActive].join(" ")
        }
        onClick={() => setActiveType(1)}
      >
        <img src="/static/images/catalog/menu.png" alt="menu-icon" />
      </div>
      <div
        className={
          activeType !== 2
            ? styles.type
            : [styles.type, styles.typeActive].join(" ")
        }
        onClick={() => setActiveType(2)}
      >
        <img src="/static/images/catalog/list.png" alt="list-icon" />
      </div>
    </div>
  );
};

export default TypeOfViewBlock;
