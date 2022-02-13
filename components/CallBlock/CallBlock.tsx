import React from "react";

import styles from "./CallBlock.module.scss";

const CallBlock = () => {
  return (
    <div className={styles.callBlock}>
      <div className={styles.firstPart}>
        <a className={styles.numberLink} href="tel:+375291870012">
          <img src="/static/images/a1logo.png" alt="a1-logo" />
          <span>+375 (29) 187-00-12</span>
        </a>
        <img
          className={styles.lines}
          src="/static/images/double-lines.png"
          alt="double-lines"
        />
        <a
          className={styles.viberLink}
          href="viber://chat?number=%2B375291870012"
        >
          <img src="/static/images/viber-icon.png" alt="viber-icon" />
        </a>
      </div>
      <div>
        <button>
          <img src="/static/images/tel-icon.png" alt="tel-icon" />
          <span>Заказать обратный звонок</span>
        </button>
      </div>
    </div>
  );
};

export default CallBlock;
