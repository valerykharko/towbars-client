import React from "react";
import Head from "next/head";
import LoginForm from "components/Pages/Auth/Login/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Авторизация</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </>
  );
};

export default LoginPage;
