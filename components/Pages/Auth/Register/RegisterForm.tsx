import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

import { SubmitHandler, useForm } from "react-hook-form";

import { Container } from "components/index";

import { useActions } from "hooks/useActions";

import styles from "./RegisterForm.module.scss";

interface IFormInput {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [type, setType] = useState("password");
  const [userLS, setUserLS] = useLocalStorage("user", {});

  const { registration, log } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await Promise.all([registration(data.email, data.password)]);
    log(33, {}, userLS);
    localStorage.getItem("token") && (await Router.push("/"));
  };

  return (
    <Container>
      <div className={styles.registerForm}>
        <div className={styles.title}>
          <Image
            src="/static/images/auth/register.png"
            alt="register-icon"
            width={512}
            height={512}
            quality={100}
          />
          <h2>Регистрация</h2>
          <span>Пожалуйста, введите данные</span>
        </div>
        <div className={styles.mainBlock}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.login}>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={styles.input}
                placeholder="Email"
              />
              {errors.email && <span>Некорректный email</span>}
            </div>

            <div className={styles.email}>
              <div className={styles.label}>
                <input
                  {...register("password", {
                    required: true,
                    pattern: /^.{4,8}$/,
                  })}
                  className={styles.input}
                  type={type}
                  placeholder="Пароль"
                />
                {type === "password" ? (
                  <Image
                    src="/static/images/auth/hide.png"
                    alt="hide-icon"
                    width={512}
                    height={512}
                    quality={100}
                    onClick={() => setType("text")}
                  />
                ) : (
                  <Image
                    src="/static/images/auth/show.png"
                    alt="show-icon"
                    width={512}
                    height={512}
                    quality={100}
                    onClick={() => setType("password")}
                  />
                )}
              </div>

              {errors.password && (
                <span>Некорректный пароль (длина от 4 до 8)</span>
              )}
            </div>

            <div className={styles.bottom}>
              <div>
                <input type="submit" value="Зарегистрироваться" />
              </div>
              <Link href="/auth/login" onClick={() => log(30, {}, userLS)}>
                <div className={styles.other}>
                  <span>Войти</span>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterForm;
