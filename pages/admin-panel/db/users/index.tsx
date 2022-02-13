import React from "react";
import Head from "next/head";
import AdminUsers from "components/AdminPanel/db/AdminUsers";

const AdminDbUsersPage = () => {
  return (
    <>
      <Head>
        <title>Управление пользователями || Админ-панель </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminUsers />
    </>
  );
};

export default AdminDbUsersPage;
