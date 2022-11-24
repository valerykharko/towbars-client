import React from "react";
import Head from "next/head";
import { SearchResults, Footer } from "components";

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>Результат поиска</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchResults />
      <Footer />
    </>
  );
};

export default SearchPage;
