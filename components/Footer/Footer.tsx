import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div>
            <span>О компании</span>
            <span>Пользовательское соглашение</span>
            <span>Публичные договоры</span>
          </div>
          <div>
            <span>Политика конфиденциальности</span>
            <span>Поддержка пользователей</span>
            <span>Правила возврата</span>
          </div>
        </div>
        <div className={styles.center}>
          <div>
            <span>Towbars | Online shop for towbars</span>
          </div>
          <div className={styles.icons}>
            <img src="/static/images/social/vk.png" alt="vk-icon" />
            <img src="/static/images/social/facebook.png" alt="facebook-icon" />
            <img src="/static/images/social/twitter.png" alt="twitter-icon" />
            <img
              src="/static/images/social/instagram.png"
              alt="instagram-icon"
            />
            <img src="/static/images/social/telegram.png" alt="telegram-icon" />
          </div>
          <div>
            <span>All rights reserved | © Copyright 2020-2022</span>
          </div>
        </div>
        <div className={styles.right}>
          <span>ООО "Акей-Систем"</span>
          <span>
            Республика Беларусь, г. Минск, тр. Сморговский, д. 9, пом. 118, к.
            2/37
          </span>
          <span>Онлайн-заказы принимаются на сайте круглосуточно (24/7)</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
