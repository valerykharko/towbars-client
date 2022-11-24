import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

import { useActions } from "hooks/useActions";

import getPrice from "utils/towbars/getPrice";

import { ITowbar } from "interfaces/towbar";

import styles from "./PricePanel.module.scss";

interface PricePanelProps {
  towbar: ITowbar;
  addItemToCart: (towbar: ITowbar) => {};
}

const PricePanel = ({ towbar, addItemToCart }: PricePanelProps) => {
  const [userLS, setUserLS] = useLocalStorage("user", {});

  const { log } = useActions();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.price}>
            <span>{getPrice(towbar.price)}</span>
          </div>
          <div className={styles.call}>
            <Link
              href="tel:+79774415229"
              className={styles.btn}
              onClick={() =>
                log(13, { towbar: towbar, auto: towbar.auto }, userLS)
              }
            >
              <Image
                src="/static/images/header/tel-icon.png"
                alt="delivery-icon"
                width={30}
                height={30}
              />
              <span className={styles.btnTextM}>Позвонить</span>
              <span className={styles.btnTextD}>Связаться с нами</span>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.addToCart}
            onClick={() => {
              log(45, { towbar: towbar, auto: towbar.auto }, userLS);
              addItemToCart(towbar);
            }}
          >
            <button>
              <span>Добавить в корзину</span>
            </button>
          </div>
          <div className={styles.contacts}>
            <Link
              href="https://t.me/+79774415229"
              className={styles.contactBlock}
              onClick={() =>
                log(21, { towbar: towbar, auto: towbar.auto }, userLS)
              }
            >
              <Image
                src="/static/images/header/telegram.png"
                alt="telegram-icon"
                width={512}
                height={512}
                quality={100}
              />
              <span>Telegram</span>
            </Link>
            <Link
              href="https://wa.me/79774415229"
              className={styles.contactBlock}
              onClick={() =>
                log(23, { towbar: towbar, auto: towbar.auto }, userLS)
              }
            >
              <Image
                src="/static/images/header/whatsapp.png"
                alt="whatsapp-icon"
                width={512}
                height={512}
                quality={100}
              />
              <span>WhatsApp</span>
            </Link>
            <Link
              href="viber://chat?number=%2B79774415229"
              className={styles.contactBlock}
              onClick={() =>
                log(22, { towbar: towbar, auto: towbar.auto }, userLS)
              }
            >
              <Image
                src="/static/images/header/viber.png"
                alt="viber-icon"
                width={512}
                height={512}
                quality={100}
              />
              <span>Viber</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePanel;
