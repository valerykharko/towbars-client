import React from "react";
import Head from "next/head";

import { AdminPanel } from "components";

const AdminPanelPage = () => {
  return (
    <>
      <Head>
        <title>Админ-панель</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminPanel link="" />
    </>
  );
};

export default AdminPanelPage;
