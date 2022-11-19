import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Header.module.scss";

interface IFormInput {
  firstName: string;
  secondName: string;
  patronymic: string;
  country: string;
  city: string;
  phoneNumber: string;
}

const Header = () => {
  const [active, setActive] = useState("profile");
  const [editActive, setEditActive] = useState(false);
  const matches = useMediaQuery("(max-width: 1024px)");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const { user } = useTypedSelector((state) => state.user);

  const { logout, editUser } = useActions();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setEditActive(!editActive);
    editUser(
      data.firstName,
      data.secondName,
      data.patronymic,
      data.country,
      data.city,
      data.phoneNumber
    );
  };

  useEffect(() => {
    setActive(Router.asPath);
  }, [user]);

  const onLogOutClick = async () => {
    logout();
    await Router.push("/");
  };

  return (
    <div className={styles.header}>
      <div className={styles.mainInfo}>
        <div className={styles.left}>
          <div className={styles.user}>
            <div className={styles.userLeft}>
              <div className={styles.image}>
                <Image
                  src="/static/images/profile/user-profile.png"
                  alt="user-profile"
                  width={512}
                  height={512}
                  quality={100}
                />
              </div>
              <div className={styles.email}>
                <span>{user?.email}</span>
              </div>
            </div>
            {domLoaded && matches && (
              <div className={styles.userRight}>
                <div className={styles.buttons}>
                  {user?.role === "ADMIN" && (
                    <Link href="/admin-panel">
                      <button>
                        <Image
                          src="/static/images/profile/admin-panel.png"
                          alt="admin-panel"
                          width={512}
                          height={512}
                        />
                        <span className={styles.adminText}>Админ-панель</span>
                      </button>
                    </Link>
                  )}
                  <button onClick={onLogOutClick}>
                    <Image
                      src="/static/images/profile/exit.png"
                      alt="exit-icon"
                      width={512}
                      height={512}
                    />
                    <span>Выйти</span>
                  </button>
                </div>
                <div className={styles.account}>
                  {user?.isActivated ? (
                    <div className={styles.idActivated}>
                      <span>Ваш аккаунт успешно активирован</span>
                      <Image
                        src="/static/images/profile/checked.png"
                        alt="checked-icon"
                        width={25}
                        height={25}
                      />
                    </div>
                  ) : (
                    <>
                      <div className={styles.idActivated}>
                        <span>Ваш аккаунт не активирован</span>
                        <Image
                          src="/static/images/profile/cancel.png"
                          alt="cancel-icon"
                          width={25}
                          height={25}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.initials}>
            <div className={styles.formMain}>
              <div className={styles.formMainTop}>
                <div className={styles.block}>
                  {editActive ? (
                    <>
                      <span className={styles.blockTitle}>Фамилия</span>
                      <p className={styles.blockDescription}>
                        Пожалуйста, введите Вашу фамилию
                      </p>
                      <input
                        defaultValue={user?.firstName}
                        {...register("firstName", {
                          required: true,
                        })}
                      />
                      {errors.firstName && (
                        <span className={styles.error}>
                          Это поле является обязательным!
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={styles.info}>
                      <p>Фамилия</p>
                      <span>{user?.firstName}</span>
                    </div>
                  )}
                </div>

                <div className={styles.block}>
                  {editActive ? (
                    <>
                      <span className={styles.blockTitle}>Имя</span>
                      <p className={styles.blockDescription}>
                        Пожалуйста, введите Ваше имя
                      </p>
                      <input
                        defaultValue={user?.secondName}
                        {...register("secondName", {
                          required: true,
                        })}
                      />
                      {errors.secondName && (
                        <span className={styles.error}>
                          Это поле является обязательным!
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={styles.info}>
                      <p>Имя</p>
                      <span>{user?.secondName}</span>
                    </div>
                  )}
                </div>

                <div className={styles.block}>
                  {editActive ? (
                    <>
                      <span className={styles.blockTitle}>Отчество</span>
                      <p className={styles.blockDescription}>
                        Пожалуйста, введите Ваше отчество
                      </p>
                      <input
                        defaultValue={user?.patronymic}
                        {...register("patronymic", {
                          required: true,
                        })}
                      />
                      {errors.patronymic && (
                        <span className={styles.error}>
                          Это поле является обязательным!
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={styles.info}>
                      <p>Отчество</p>
                      <span>{user?.patronymic}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.formMainBottom}>
                <div className={styles.block}>
                  {editActive ? (
                    <>
                      <span className={styles.blockTitle}>Страна</span>
                      <p className={styles.blockDescription}>
                        Пожалуйста, укажите Вашу страну проживания
                      </p>
                      <input
                        defaultValue={user?.country}
                        {...register("country", {
                          required: true,
                        })}
                      />
                      {errors.country && (
                        <span className={styles.error}>
                          Это поле является обязательным!
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={styles.info}>
                      <p>Страна</p>
                      <span>{user?.country}</span>
                    </div>
                  )}
                </div>

                <div className={styles.block}>
                  {editActive ? (
                    <>
                      <span className={styles.blockTitle}>Город</span>
                      <p className={styles.blockDescription}>
                        Пожалуйста, укажите Ваш город проживания
                      </p>
                      <input
                        defaultValue={user?.city}
                        {...register("city", {
                          required: true,
                          maxLength: 10,
                        })}
                      />
                      {errors.city && (
                        <span className={styles.error}>
                          Это поле является обязательным!
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={styles.info}>
                      <p>Город</p>
                      <span>{user?.city}</span>
                    </div>
                  )}
                </div>

                <div className={`${styles.block} ${styles.blockTel}`}>
                  {editActive ? (
                    <>
                      <span className={styles.blockTitle}>Номер телефона</span>
                      <p className={styles.blockDescription}>
                        Пожалуйста, введите Ваш активный номер телефона
                      </p>

                      <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue={user?.phoneNumber}
                        rules={{
                          required: true,
                          validate: (value) => value.length > 10,
                        }}
                        render={({ field: { onChange, value } }) => (
                          <PhoneInput
                            localization={ru}
                            country={"ru"}
                            onlyCountries={["ru", "kz", "by", "kg", "am"]}
                            masks={{
                              ru: "(...) ...-..-..",
                              kz: "(...) ...-..-..",
                              by: "(..) ...-..-..",
                              kg: "(...) ...-...",
                              am: "(..) ...-...",
                            }}
                            value={value}
                            onChange={onChange}
                            countryCodeEditable={false}
                            inputStyle={{
                              width: "200px",
                            }}
                          />
                        )}
                      />
                      {errors.phoneNumber && (
                        <span className={styles.error}>
                          Введите корректное значение!
                        </span>
                      )}
                    </>
                  ) : (
                    <div className={styles.info}>
                      <p>Номер телефона</p>
                      <span>
                        {user?.phoneNumber && "+" + user?.phoneNumber}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {editActive ? (
              <div className={styles.save}>
                <input type="submit" value="Сохранить изменения" />
              </div>
            ) : (
              <div
                className={styles.edit}
                onClick={() => setEditActive(!editActive)}
              >
                <Image
                  src="/static/images/profile/edit.png"
                  alt="edit-icon"
                  width={512}
                  height={512}
                  quality={100}
                />
                <span>Изменить личные данные</span>
              </div>
            )}
          </form>
        </div>
        {domLoaded && matches ? (
          ""
        ) : (
          <div className={styles.right}>
            <div className={styles.buttons}>
              {user?.role === "ADMIN" && (
                <Link href="/admin-panel">
                  <button>
                    <Image
                      src="/static/images/profile/admin-panel.png"
                      alt="admin-panel"
                      width={512}
                      height={512}
                    />
                    <span className={styles.adminText}>Админ-панель</span>
                  </button>
                </Link>
              )}
              <button onClick={onLogOutClick}>
                <Image
                  src="/static/images/profile/exit.png"
                  alt="exit-icon"
                  width={512}
                  height={512}
                />
                <span>Выйти</span>
              </button>
            </div>
            <div className={styles.account}>
              {user?.isActivated ? (
                <div className={styles.idActivated}>
                  <span>Ваш аккаунт успешно активирован</span>
                  <Image
                    src="/static/images/profile/checked.png"
                    alt="checked-icon"
                    width={25}
                    height={25}
                  />
                </div>
              ) : (
                <>
                  <div className={styles.idActivated}>
                    <span>Ваш аккаунт не активирован</span>
                    <Image
                      src="/static/images/profile/cancel.png"
                      alt="cancel-icon"
                      width={25}
                      height={25}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={styles.links}>
        <div
          className={active === "/profile" ? styles.activeLink : styles.link}
        >
          <Link href="/profile">
            <span>Заказы</span>
          </Link>
        </div>
        <div
          className={
            active === "/profile/orders-history"
              ? styles.activeLink
              : styles.link
          }
        >
          <Link href="/profile/orders-history">
            <span>История заказов</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
