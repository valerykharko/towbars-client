import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useLocalStorage } from "usehooks-ts";

import { useActions } from "hooks/useActions";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [userLS, setUserLS] = useLocalStorage("user", {});

  const { log } = useActions();

  const router = useRouter();

  return (
    <div className={styles.menu}>
      <Link href="/" onClick={() => log(5, {}, userLS)}>
        <div
          className={`${styles.menuItem} ${
            router.pathname === "/" && styles.menuItemActive
          }`}
        >
          <span>Подбор фаркопа</span>
        </div>
      </Link>
      <Link href="/how_make_order" onClick={() => log(6, {}, userLS)}>
        <div
          className={`${styles.menuItem} ${
            router.pathname === "/how_make_order" && styles.menuItemActive
          }`}
        >
          <span>Как сделать заказ</span>
        </div>
      </Link>
      <Link href="/delivery" onClick={() => log(7, {}, userLS)}>
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
