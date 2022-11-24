import React from "react";
import Head from "next/head";
import { Profile } from "components";

const OrdersHistoryPage = () => {
  return (
    <>
      <Head>
        <title>История заказов</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile link="orders-history" />
    </>
  );
};

export default OrdersHistoryPage;
