import React from "react";
import Head from "next/head";
import RegisterForm from "components/Pages/Auth/Register/RegisterForm";

const RegistrationPage = () => {
  return (
    <>
      <Head>
        <title>Регистрация</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterForm />
    </>
  );
};

export default RegistrationPage;
