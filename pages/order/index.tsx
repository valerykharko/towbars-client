import React from "react";
import Head from "next/head";
import { MakeOrder } from "components/index";

const Order = () => {
  return (
    <>
      <Head>
        <title>Оформление заказа || Towbars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MakeOrder />
    </>
  );
};

export default Order;
