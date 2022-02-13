import React from "react";
import Head from "next/head";
import LoginForm from "../../../modules/LoginForm/components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Авторизация || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </>
  );
};

export default LoginPage;
