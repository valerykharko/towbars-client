import React from "react";
import Router from "next/router";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import { Container } from "components";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Order.module.scss";

interface IFormInput {
  surname: string;
  name: string;
  patronymic: string;
  country: string;
  city: string;
  telNumber: string;
}

const Order = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  const { user } = useTypedSelector((state) => state.user);
  const { items, totalPrice, totalCount } = useTypedSelector(
    (state) => state.cart
  );
  const { makeUserOrder, clearCart } = useActions();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    makeUserOrder(items, data, totalPrice, totalCount);
    clearCart();
    await Router.push("/profile");
  };

  return (
    <Container>
      <div className={styles.order}>
        <h1>Оформление заявки</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formMain}>
            <div className={styles.block}>
              <span>Фамилия</span>
              <p>Пожалуйста, введите Вашу фамилию</p>
              <input
                defaultValue={user?.firstName}
                {...register("surname", { required: true })}
              />
              {errors.surname && (
                <span className={styles.error}>
                  Это поле является обязательным!
                </span>
              )}
            </div>

            <div className={styles.block}>
              <span>Имя</span>
              <p>Пожалуйста, введите Ваше имя</p>
              <input
                defaultValue={user?.secondName}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className={styles.error}>
                  Это поле является обязательным!
                </span>
              )}
            </div>

            <div className={styles.block}>
              <span>Отчество</span>
              <p>Пожалуйста, введите Ваше отчество</p>
              <input
                defaultValue={user?.patronymic}
                {...register("patronymic")}
              />
            </div>

            <div className={styles.block}>
              <span>Страна</span>
              <p>Пожалуйста, укажите Вашу страну проживания</p>
              <input
                defaultValue={user?.country}
                {...register("country", { required: true })}
              />
              {errors.country && (
                <span className={styles.error}>
                  Это поле является обязательным!
                </span>
              )}
            </div>

            <div className={styles.block}>
              <span>Город</span>
              <p>Пожалуйста, укажите Ваш город проживания</p>
              <input
                defaultValue={user?.city}
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className={styles.error}>
                  Это поле является обязательным!
                </span>
              )}
            </div>

            <div className={`${styles.block} ${styles.blockTel}`}>
              <span>Номер телефона</span>
              <p>Пожалуйста, введите Ваш активный номер телефона</p>

              <Controller
                name="telNumber"
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
              {errors.telNumber && (
                <span className={styles.error}>
                  Введите корректное значение!
                </span>
              )}
            </div>
          </div>

          <div className={styles.formSubmit}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Order;
