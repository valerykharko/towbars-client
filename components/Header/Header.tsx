import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { CallBlock, RequestCallPopup } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Header.module.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const makerCallPopupRef = useRef<HTMLDivElement>();

  const { isAuth, user } = useTypedSelector((state) => state.user);
  const { items, totalCount } = useTypedSelector((state) => state.cart);

  const { fetchBrands, checkAuth, fetchTowbarByCode, fetchFavorites } =
    useActions();

  const onInputHandler = async (event: any) => {
    if (event.charCode === 13) {
      setSearchValue(event.target.value);
      fetchTowbarByCode(searchValue);
      setSearchValue("");
      await Router.push("/search");
    }
  };

  useEffect(() => {
    fetchBrands();

    async function checkFullAuth() {
      if (localStorage.getItem("token")) {
        await checkAuth();
      }
    }
    checkFullAuth().then(() => fetchFavorites());
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <Link href={"/"}>
          <div className={styles.leftBlock}>
            <img
              className={styles.logo}
              src="/static/images/header/logo.png"
              alt="logo-icon"
            />
          </div>
        </Link>
        <div className={styles.centralBlock}>
          <CallBlock
            makerCallPopupRef={makerCallPopupRef}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />
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
              {user?.autoId ? (
                <>
                  <img src="/static/images/header/sedan.png" alt="sedan-icon" />
                </>
              ) : (
                <img src="/static/images/header/auto.png" alt="auto-icon" />
              )}
              <span>Ваш авто</span>
            </div>
          </Link>
          {isAuth ? (
            <Link href={"/profile"}>
              <div className={[styles.block, styles.blockActive].join(" ")}>
                <img src="/static/images/header/user.png" alt="user-icon" />
                <span>Профиль</span>
              </div>
            </Link>
          ) : (
            <Link href={"/auth/login"}>
              <div className={styles.block}>
                <img src="/static/images/header/login.png" alt="login-icon" />
                <span>Войти</span>
              </div>
            </Link>
          )}
          <Link href={"/cart"}>
            {Object.keys(items).length === 0 ? (
              <div className={styles.blockCart}>
                <img src="/static/images/header/cart.png" alt="cart" />
                <span className={styles.cartText}>Корзина</span>
              </div>
            ) : (
              <div className={styles.blockCartFull}>
                <img
                  src="/static/images/header/shopping-cart.png"
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
      <RequestCallPopup
        makerCallPopupRef={makerCallPopupRef}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </header>
  );
};

export default Header;
