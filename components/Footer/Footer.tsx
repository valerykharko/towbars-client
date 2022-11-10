import React from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.timeBlock}>
          <div className={styles.imgBlock}>
            <Image
              className={styles.clockImg}
              src="/static/images/footer/clock.png"
              alt="clock-icon"
              width={20}
              height={20}
            />
            <span>MSK</span>
          </div>
          <div className={styles.timeText}>
            <div>Пн-Пт: 09:00 - 18:00</div>
            <div>Сб-Вск: 09:00 - 18:00</div>
          </div>
        </div>
        <div className={styles.copyrightBlock}>
          <Image
            src="/static/images/footer/copyright.png"
            alt="clock-icon"
            width={10}
            height={10}
          />
          <span>2014-2023 </span>
          <strong> Купить-фаркоп.москва</strong>
        </div>
      </div>
      <div className={styles.right}>
        <span>
          * Если Вы не нашли свою модель авто или необходимый товар свяжитесь с
          нами и наш специалист обязательно Вам поможет
        </span>
      </div>
    </footer>
  );
};

export default Footer;
