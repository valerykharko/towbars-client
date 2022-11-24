import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useMediaQuery } from "usehooks-ts";

import { OrderPage, Footer } from "components";

const Order = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const matches = useMediaQuery("(min-width: 550px)");

  return (
    <div>
      <Head>
        <title>Оформление заказа</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderPage />
      {domLoaded && matches && <Footer />}
    </div>
  );
};

export default Order;
