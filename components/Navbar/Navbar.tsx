import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <Link href={"/catalog"}>
        <div className={styles.menuItem}>
          <img src="" alt="" />
          <span>Каталог</span>
        </div>
      </Link>
      <Link href={"/manufacturers"}>
        <div className={styles.menuItem}>
          <img src="" alt="" />
          <span>Производители</span>
        </div>
      </Link>
      <Link href={"/installation"}>
        <div className={styles.menuItem}>
          <img src="" alt="" />
          <span>Установка</span>
        </div>
      </Link>
      <Link href={"/delivery"}>
        <div className={styles.menuItem}>
          <img src="" alt="" />
          <span>Доставка и оплата</span>
        </div>
      </Link>
      <Link href={"/about"}>
        <div className={styles.menuItem}>
          <img src="" alt="" />
          <span>О нас</span>
        </div>
      </Link>
      <Link href={"/contacts"}>
        <div className={styles.menuItem}>
          <img src="" alt="" />
          <span>Контакты</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
