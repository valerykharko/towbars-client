import React from "react";
import Head from "next/head";
import { DeliveryBlock, Footer } from "components";

const Delivery = () => {
  return (
    <>
      <Head>
        <title>Доставка</title>
        <meta name="description" content="Доставка фаркопов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DeliveryBlock />
      <Footer />
    </>
  );
};

export default Delivery;
