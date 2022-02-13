import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { CallBlock } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Header.module.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const { isAuth } = useTypedSelector((state) => state.user);
  const { items, totalCount } = useTypedSelector((state) => state.cart);

  const { setIsAuth, checkAuth, fetchTowbarByCode } = useActions();

  const onInputHandler = async (event: any) => {
    if (event.charCode === 13) {
      setSearchValue(event.target.value);
      fetchTowbarByCode(searchValue);
      setSearchValue("");
      await Router.push("/search");
    }
  };

  useEffect(() => {
    function checkFullAuth() {
      if (localStorage.getItem("token")) {
        checkAuth();
        setIsAuth(true);
      }
    }
    checkFullAuth();
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <Link href={"/"}>
          <div className={styles.leftBlock}>
            <img
              className={styles.logo}
              src="/static/images/logo.png"
              alt="logo-icon"
            />
          </div>
        </Link>
        <div className={styles.centralBlock}>
          <CallBlock />
          <input
            type="text"
            placeholder="Поиск"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => onInputHandler(e)}
          />
        </div>
        <div className={styles.rightBlock}>
          <Link href={"/profile/auto"}>
            <div className={styles.blockAuto}>
              <img src="/static/images/auto.png" alt="" />
              <span>Ваш авто</span>
            </div>
          </Link>
          {isAuth ? (
            <Link href={"/profile"}>
              <div className={[styles.block, styles.blockActive].join(" ")}>
                <img src="/static/images/user.png" alt="user-icon" />
                <span>Профиль</span>
              </div>
            </Link>
          ) : (
            <Link href={"/auth/login"}>
              <div className={styles.block}>
                <img src="/static/images/login.png" alt="login-icon" />
                <span>Войти</span>
              </div>
            </Link>
          )}
          <Link href={"/cart"}>
            {Object.keys(items).length === 0 ? (
              <div className={styles.blockCart}>
                <img src="/static/images/cart.png" alt="cart" />
                <span className={styles.cartText}>Корзина</span>
              </div>
            ) : (
              <div className={styles.blockCartFull}>
                <img
                  src="/static/images/shopping-cart.png"
                  alt="shopping-cart"
                />
                <span className={styles.cartText}>Корзина</span>
                <div className={styles.cartCount}>
                  <span>{totalCount}</span>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
