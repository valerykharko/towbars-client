import React from "react";
import Head from "next/head";
import { AdminUsers } from "components";

const AdminDbUsersPage = () => {
  return (
    <>
      <Head>
        <title>Управление пользователями</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminUsers />
    </>
  );
};

export default AdminDbUsersPage;
