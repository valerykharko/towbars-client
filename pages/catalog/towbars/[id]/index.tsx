import React from "react";
import Head from "next/head";
import { TowbarPersonalBlock } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";

const TowbarPersonalPage = () => {
  const { towbar } = useTypedSelector((state) => state.towbar);

  return (
    <>
      <Head>
        <title>Фаркоп {towbar?.vendor_code}</title>
        <meta name="description" content={`Фаркоп ${towbar?.vendor_code}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TowbarPersonalBlock />
    </>
  );
};

export default TowbarPersonalPage;
