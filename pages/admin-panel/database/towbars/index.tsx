import React from "react";
import Head from "next/head";
import { AdminTowbars } from "components";

const AdminDBTowbarsPage = () => {
  return (
    <>
      <Head>
        <title>Управление фаркопами</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminTowbars />
    </>
  );
};

export default AdminDBTowbarsPage;
