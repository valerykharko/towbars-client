import React from "react";
import Head from "next/head";
import { AdminOrders } from "components/index";

const AdminDbOrdersPage = () => {
  return (
    <>
      <Head>
        <title>Управление заказами</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminOrders />
    </>
  );
};

export default AdminDbOrdersPage;
