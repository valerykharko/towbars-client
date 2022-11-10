import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

import { SubmitHandler, useForm } from "react-hook-form";

import { Container } from "components";

import { login } from "store/actions/userActions";
import { useActions } from "hooks/useActions";

import styles from "./LoginForm.module.scss";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [type, setType] = useState("password");

  const { login } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await Promise.all([login(data.email, data.password)]);
    localStorage.getItem("token") && (await Router.push("/"));
  };

  return (
    <Container>
      <div className={styles.loginForm}>
        <div className={styles.title}>
          <Image
            src="/static/images/auth/enter-icon.png"
            alt="enter-icon"
            width={512}
            height={512}
            quality={100}
          />
          <h2>Войти в аккаунт</h2>
          <span>Пожалуйста, войдите в свой аккаунт</span>
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
                  type="password"
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
                <input type="submit" value="Войти" />
              </div>
              <Link href="/auth/registration">
                <div className={styles.other}>
                  <span>Зарегистрироваться</span>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
