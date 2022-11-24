import React from "react";
import Head from "next/head";
import { HowMakeOrder, Footer } from "components";

const HowMakeOrderPage = () => {
  return (
    <>
      <Head>
        <title>Как сделать заказ</title>
        <meta name="description" content="Как сделать заказ фаркопа" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HowMakeOrder />
        <Footer />
      </div>
    </>
  );
};

export default HowMakeOrderPage;
