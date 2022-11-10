import React from "react";
import Image from "next/image";

import getPrice from "utils/towbars/getPrice";

import { ITowbar } from "interfaces/towbar";

import styles from "./PriceBlock.module.scss";

interface PriceBlockProps {
  towbar: ITowbar;
  addItemToCart: (towbar: ITowbar) => {};
}

const PriceBlock = ({ towbar, addItemToCart }: PriceBlockProps) => {
  return (
    <div className={styles.priceBlock}>
      <div className={styles.priceCount}>
        <span>{getPrice(towbar.price)}</span>
      </div>
      <div className={styles.btnCart} onClick={() => addItemToCart(towbar)}>
        <button>
          <span>Добавить в корзину</span>
        </button>
      </div>
      <div className={`${styles.contactBlock} ${styles.telBlock}`}>
        <Image
          src="/static/images/header/tel-icon.png"
          alt="delivery-icon"
          width={30}
          height={30}
        />
        <span>Связаться с нами</span>
      </div>
      <div className={styles.top}>
        <div className={styles.contactBlock}>
          <Image
            src="/static/images/header/telegram.png"
            alt="telegram-icon"
            width={512}
            height={512}
            quality={100}
          />
          <span>Telegram</span>
        </div>
        <div className={styles.contactBlock}>
          <Image
            src="/static/images/header/whatsapp.png"
            alt="whatsapp-icon"
            width={512}
            height={512}
            quality={100}
          />
          <span>WhatsApp</span>
        </div>
        <div className={styles.contactBlock}>
          <Image
            src="/static/images/header/viber.png"
            alt="viber-icon"
            width={512}
            height={512}
            quality={100}
          />
          <span>Viber</span>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
