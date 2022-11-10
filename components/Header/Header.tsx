import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  CallBlock,
  RequestCallPopup,
  HeaderMobile,
  SearchInputHeader,
} from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Header.module.scss";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const makerCallPopupRef = useRef<HTMLDivElement>();

  const { isAuth, user } = useTypedSelector((state) => state.user);
  const { items, totalCount } = useTypedSelector((state) => state.cart);

  const { fetchBrands, checkAuth } = useActions();

  useEffect(() => {
    fetchBrands();

    async function checkFullAuth() {
      if (localStorage.getItem("token")) {
        await checkAuth();
      }
    }

    checkFullAuth();
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <HeaderMobile
          setIsPopupOpen={setIsPopupOpen}
          makerCallPopupRef={makerCallPopupRef}
          isPopupOpen={isPopupOpen}
        />
        <div className={styles.desktop}>
          <Link href="/">
            <div className={styles.leftBlock}>
              <Image
                className={styles.logo}
                src="/static/images/header/logo.png"
                alt="logo-icon"
                height={301}
                width={417}
              />
              <div className={styles.title}>
                <h1>Фаркопы</h1>
                <span>с доставкой во все города и регионы</span>
              </div>
            </div>
          </Link>
          <div className={styles.centralBlock}>
            <CallBlock
              makerCallPopupRef={makerCallPopupRef}
              isPopupOpen={isPopupOpen}
              setIsPopupOpen={setIsPopupOpen}
            />
            {user?.role === "ADMIN" && <SearchInputHeader position="center" />}
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.tabs}>
              {isAuth ? (
                <Link href="/profile">
                  <div className={styles.tab}>
                    <Image
                      src="/static/images/header/user.png"
                      alt="user-icon"
                      width={40}
                      height={40}
                    />
                    <span className={styles.tabText}>Профиль</span>
                  </div>
                </Link>
              ) : (
                <Link href="/auth/login">
                  <div className={styles.tab}>
                    <Image
                      src="/static/images/header/login.png"
                      alt="login-icon"
                      width={40}
                      height={40}
                    />
                    <span className={styles.tabText}>Войти</span>
                  </div>
                </Link>
              )}
              <Link href="/cart">
                <div className={styles.tab}>
                  {Object.keys(items).length === 0 ? (
                    <>
                      <Image
                        className={styles.tabImgCart}
                        src="/static/images/header/cart.png"
                        alt="cart"
                        width={40}
                        height={40}
                      />
                      <span className={styles.tabText}>Корзина</span>
                    </>
                  ) : (
                    <>
                      <Image
                        src="/static/images/header/shopping-cart.png"
                        alt="shopping-cart"
                        width={40}
                        height={40}
                      />
                      <span className={styles.tabText}>Корзина</span>
                      <div className={styles.tabCount}>
                        <span>{totalCount}</span>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            </div>
            {user?.role === "ADMIN" && <SearchInputHeader position="right" />}
          </div>
        </div>
      </div>
      <RequestCallPopup
        makerCallPopupRef={makerCallPopupRef}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </header>
  );
};

export default Header;
