import React from "react";
import Head from "next/head";
import { CartBlock } from "components";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Корзина</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartBlock />
    </>
  );
};

export default Cart;
