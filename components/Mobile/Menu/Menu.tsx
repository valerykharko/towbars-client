import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useLocalStorage } from "usehooks-ts";

import { useActions } from "hooks/useActions";

import styles from "./Menu.module.scss";

interface MenuProps {
  setMenuMobile: Function;
}

const Menu = ({ setMenuMobile }: MenuProps) => {
  const [userLS, setUserLS] = useLocalStorage("user", {});

  const { log } = useActions();

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.top}>
          <div className={styles.title}>
            <Image
              className={styles.logoIcon}
              src="/static/images/header/logo.png"
              alt="logo-icon"
              width={29}
              height={40}
            />
            <h2>Меню</h2>
          </div>
          <div onClick={() => setMenuMobile(false)}>
            <Image
              src="/static/images/menu/close.png"
              alt="close-icon"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className={styles.menuList}>
          <Link href="/" onClick={() => log(5, {}, userLS)}>
            <div
              className={`${styles.menuItem} ${
                router.pathname === "/" && styles.menuItemActive
              }`}
              onClick={() => setMenuMobile(false)}
            >
              <div className={styles.menuItemIcon}>
                <Image
                  src="/static/images/menu/hook.png"
                  alt="home-icon"
                  width={30}
                  height={30}
                />
              </div>
              <span className={styles.menuItemText}>Подбор фаркопа</span>
            </div>
          </Link>
          <Link href="/how_make_order" onClick={() => log(6, {}, userLS)}>
            <div
              className={`${styles.menuItem} ${
                router.pathname === "/how_make_order" && styles.menuItemActive
              }`}
              onClick={() => setMenuMobile(false)}
            >
              <div className={styles.menuItemIcon}>
                <Image
                  src="/static/images/menu/order.png"
                  alt="how-to-buy-icon"
                  width={30}
                  height={30}
                />
              </div>
              <span className={styles.menuItemText}>Как сделать заказ</span>
            </div>
          </Link>
          <Link href="/delivery" onClick={() => log(7, {}, userLS)}>
            <div
              className={`${styles.menuItem} ${
                router.pathname === "/delivery" && styles.menuItemActive
              }`}
              onClick={() => setMenuMobile(false)}
            >
              <div className={styles.menuItemIcon}>
                <Image
                  src="/static/images/menu/delivery.png"
                  alt="catalog-icon"
                  width={30}
                  height={30}
                />
              </div>
              <span className={styles.menuItemText}>Доставка</span>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={styles.menuBackdrop}
        onClick={() => setMenuMobile(false)}
      />
    </div>
  );
};

export default Menu;
