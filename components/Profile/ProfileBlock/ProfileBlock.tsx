import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { Popover } from "antd";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import styles from "./ProfileBlock.module.scss";

const ProfileBlock = () => {
  const { user } = useTypedSelector((state) => state.user);

  const [active, setActive] = useState("profile");
  const [disable, setDisable] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { logout, editUser } = useActions();

  const onLogOutClick = async () => {
    logout();
    await Router.push("/");
  };

  const onClick = () => {
    setDisable(!disable);
    if (!disable) {
      editUser(firstName, secondName, phoneNumber);
    }
  };

  useEffect(() => {
    setActive(Router.asPath);

    user?.phoneNumber && setPhoneNumber(user?.phoneNumber);
  }, [user]);

  const content = (
    <div>
      <span>
        Для активации аккаунта перейдите по ссылке, напраленной на Ваш Email
      </span>
    </div>
  );
  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.mainInfo}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img
                src="/static/images/profile/user-profile.png"
                alt="user-profile"
              />
            </div>
            <div className={styles.initials}>
              {disable ? (
                <span>{user?.secondName}</span>
              ) : (
                <div>
                  <input
                    type="text"
                    value={secondName}
                    onChange={(e: any) => setSecondName(e.target.value)}
                    placeholder="Введите вашу фамилию"
                  />
                </div>
              )}
              {"  "}
              {disable ? (
                <span>{user?.firstName}</span>
              ) : (
                <div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Введите ваше имя"
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <button
              className={disable ? "" : styles.editProfile}
              onClick={onClick}
            >
              <img src="/static/images/profile/edit.png" alt="edit-icon" />
              <span>Изменить</span>
            </button>
            {user?.role === "ADMIN" && (
              <Link href={"/admin-panel/orders"}>
                <button>
                  <img
                    src="/static/images/profile/admin-panel.png"
                    alt="admin-panel"
                  />
                  <span>Админ-панель</span>
                </button>
              </Link>
            )}
            <button onClick={onLogOutClick}>
              <img src="/static/images/profile/exit.png" alt="exit-icon" />
              <span>Выйти</span>
            </button>
          </div>
        </div>
        <div className={styles.otherInfo}>
          <div>
            <div className={styles.phone}>
              <span>Телефон:</span>
              <PhoneInput
                disabled={disable}
                localization={ru}
                country={"by"}
                onlyCountries={["by", "ru", "pl", "ua"]}
                masks={{ by: "(..) ...-..-..", at: "(....) ...-...." }}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                countryCodeEditable={false}
                inputStyle={{
                  width: "200px",
                }}
              />
            </div>
            <div className={styles.email}>
              <span>Email:</span>
              <span>{user?.email}</span>
            </div>
          </div>
          <div className={styles.lastInfo}>
            {user?.role === "ADMIN" && (
              <div className={styles.isAdmin}>
                <span>role:</span>
                <span>ADMIN</span>
                <img src="/static/images/profile/admin.png" alt="admin-icon" />
              </div>
            )}
            {user?.isActivated ? (
              <div className={styles.idActivated}>
                <span>Ваш аккаунт успешно активирован</span>
                <img
                  src="/static/images/profile/checked.png"
                  alt="checked-icon"
                />
              </div>
            ) : (
              <>
                <Popover content={content}>
                  <div className={styles.idActivated}>
                    <span>Ваш аккаунт не активирован</span>
                    <img
                      src="/static/images/profile/cancel.png"
                      alt="cancel-icon"
                    />
                  </div>
                </Popover>
              </>
            )}
          </div>
        </div>
        <div className={styles.links}>
          <Link href={"/profile"}>
            <button
              className={
                active === "/profile" ? styles.activeLink : styles.link
              }
            >
              <span>Заказы</span>
            </button>
          </Link>
          <Link href={"/profile/orders-history"}>
            <button
              className={
                active === "/profile/orders-history"
                  ? styles.activeLink
                  : styles.link
              }
            >
              <span>История заказов</span>
            </button>
          </Link>
          <Link href={"/profile/favorites"}>
            <button
              className={
                active === "/profile/favorites"
                  ? styles.activeLink
                  : styles.link
              }
            >
              <span>Избранное</span>
            </button>
          </Link>
          <Link href={"/profile/feedbacks"}>
            <button
              className={
                active === "/profile/feedbacks"
                  ? styles.activeLink
                  : styles.link
              }
            >
              <span>Отзывы и оценки</span>
            </button>
          </Link>
          <Link href={"/profile/auto"}>
            <button
              className={
                active === "/profile/auto" ? styles.activeLink : styles.link
              }
            >
              <span>Автомобиль</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
