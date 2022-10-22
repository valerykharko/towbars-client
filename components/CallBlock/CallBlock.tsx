import React from "react";

import styles from "./CallBlock.module.scss";

interface CallBlockProps {
  makerCallPopupRef: any;
  isPopupOpen: boolean;
  setIsPopupOpen: Function;
}

const CallBlock = ({
  makerCallPopupRef,
  isPopupOpen,
  setIsPopupOpen,
}: CallBlockProps) => {
  return (
    <div className={styles.callBlock}>
      <div className={styles.firstPart}>
        <a className={styles.numberLink} href="tel:+375291870012">
          <img src="/static/images/header/a1logo.png" alt="a1-logo" />
          <span>+375 (29) 187-00-12</span>
        </a>
        <img
          className={styles.lines}
          src="/static/images/header/double-lines.png"
          alt="double-lines"
        />
        <a
          className={styles.viberLink}
          href="viber://chat?number=%2B375291870012"
        >
          <img src="/static/images/header/viber-icon.png" alt="viber-icon" />
        </a>
      </div>
      <div ref={makerCallPopupRef}>
        <button onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <img src="/static/images/header/tel-icon.png" alt="tel-icon" />
          <span>Заказать обратный звонок</span>
        </button>
      </div>
    </div>
  );
};

export default CallBlock;
