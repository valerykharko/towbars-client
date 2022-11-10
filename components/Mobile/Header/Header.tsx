import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  CallBackOrder,
  CallBlock,
  MenuMobile,
  SearchInputHeader,
} from "components";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./Header.module.scss";

interface HeaderProps {
  setIsPopupOpen: Function;
  makerCallPopupRef: any;
  isPopupOpen: boolean;
}

const Header = ({
  setIsPopupOpen,
  makerCallPopupRef,
  isPopupOpen,
}: HeaderProps) => {
  const [menuMobile, setMenuMobile] = useState(false);

  const { isAuth, user } = useTypedSelector((state) => state.user);
  const { items, totalCount } = useTypedSelector((state) => state.cart);

  return (
    <div className={styles.mobile}>
      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={() => setMenuMobile(true)}>
          <Image
            src="/static/images/header/menu.png"
            alt="menu-icon"
            height={35}
            width={35}
          />
        </div>
      </div>
      <div className={styles.center}>
        <CallBlock
          makerCallPopupRef={makerCallPopupRef}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
        {user?.role === "ADMIN" && <SearchInputHeader />}
      </div>
      <div className={styles.rightBlock}>
        {isAuth ? (
          <Link href="/profile">
            <div className={styles.block}>
              <Image
                src="/static/images/header/user.png"
                alt="user-icon"
                width={33}
                height={33}
              />
              <span className={styles.blockText}>Профиль</span>
            </div>
          </Link>
        ) : (
          <Link href="/auth/login">
            <div className={styles.block}>
              <Image
                src="/static/images/header/login.png"
                alt="login-icon"
                width={33}
                height={33}
              />
              <span className={styles.blockText}>Войти</span>
            </div>
          </Link>
        )}
        <Link href="/cart">
          <div className={styles.block}>
            {Object.keys(items).length === 0 ? (
              <>
                <Image
                  className={styles.blockImgCart}
                  src="/static/images/header/cart.png"
                  alt="cart"
                  width={33}
                  height={33}
                />
                <span className={styles.blockText}>Корзина</span>
              </>
            ) : (
              <>
                <Image
                  className={styles.blockImgCart}
                  src="/static/images/header/shopping-cart.png"
                  alt="shopping-cart"
                  width={33}
                  height={33}
                />
                <span className={styles.blockText}>Корзина</span>
                <div className={styles.blockCount}>
                  <span className={styles.blockCountText}>{totalCount}</span>
                </div>
              </>
            )}
          </div>
        </Link>
      </div>
      {menuMobile && <MenuMobile setMenuMobile={setMenuMobile} />}
      <CallBackOrder setIsPopupOpen={setIsPopupOpen} />
    </div>
  );
};

export default Header;
