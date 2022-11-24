import React from "react";
import Head from "next/head";
import { AdminAuto } from "components";

const AdminDBAutoPage = () => {
  return (
    <>
      <Head>
        <title>Управление авто</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminAuto />
    </>
  );
};

export default AdminDBAutoPage;
