import React from "react";
import Image from "next/image";

import getPrice from "utils/towbars/getPrice";

import { ITowbar } from "interfaces/towbar";

import styles from "./PricePanel.module.scss";

interface PricePanelProps {
  towbar: ITowbar;
  addItemToCart: (towbar: ITowbar) => {};
}

const PricePanel = ({ towbar, addItemToCart }: PricePanelProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.price}>
            <span>{getPrice(towbar.price)}</span>
          </div>
          <div className={styles.call}>
            <button className={styles.btn}>
              <Image
                src="/static/images/header/tel-icon.png"
                alt="delivery-icon"
                width={30}
                height={30}
              />
              <span className={styles.btnTextM}>Позвонить</span>
              <span className={styles.btnTextD}>Связаться с нами</span>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.addToCart}
            onClick={() => addItemToCart(towbar)}
          >
            <button>
              <span>Добавить в корзину</span>
            </button>
          </div>
          <div className={styles.contacts}>
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
      </div>
    </div>
  );
};

export default PricePanel;