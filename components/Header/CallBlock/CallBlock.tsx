import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className={styles.top}>
        <div className={styles.numberLink}>
          <Link href="tel:+79774415229">
            <span>+7 977 441-52-29</span>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="viber://chat?number=%2B79774415229">
            <Image
              className={styles.link}
              src="/static/images/header/viber.png"
              alt="viber-icon"
              width={30}
              height={30}
              quality={100}
            />
          </Link>
          <Link href="https://t.me/+79774415229">
            <Image
              className={styles.link}
              src="/static/images/header/telegram.png"
              alt="telegram-icon"
              width={30}
              height={30}
              quality={100}
            />
          </Link>
          <Link href="https://wa.me/79774415229">
            <Image
              className={styles.link}
              src="/static/images/header/whatsapp.png"
              alt="whatsapp-icon"
              width={30}
              height={30}
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div ref={makerCallPopupRef} className={styles.callBack}>
        <button onClick={() => setIsPopupOpen(!isPopupOpen)}>
          <div className={styles.telIcon}>
            <Image
              src="/static/images/header/tel-icon.png"
              alt="tel-icon"
              width={20}
              height={20}
            />
          </div>
          <span>Заказать обратный звонок</span>
        </button>
      </div>
    </div>
  );
};

export default CallBlock;
