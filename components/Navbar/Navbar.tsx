import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <Link href="/">
        <div
          className={`${styles.menuItem} ${
            router.pathname === "/" && styles.menuItemActive
          }`}
        >
          <span>Подбор фаркопа</span>
        </div>
      </Link>
      <Link href="/how_make_order">
        <div
          className={`${styles.menuItem} ${
            router.pathname === "/how_make_order" && styles.menuItemActive
          }`}
        >
          <span>Как сделать заказ</span>
        </div>
      </Link>
      <Link href="/delivery">
        <div
          className={`${styles.menuItem} ${
            router.pathname === "/delivery" && styles.menuItemActive
          }`}
        >
          <span>Доставка</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
