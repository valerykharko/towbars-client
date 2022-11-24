import React from "react";
import Head from "next/head";
import { CatalogBlock } from "components";

const Catalog = () => {
  return (
    <>
      <Head>
        <title>Каталог фаркопов</title>
        <meta name="description" content="Каталог фаркопов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CatalogBlock />
    </>
  );
};

export default Catalog;
