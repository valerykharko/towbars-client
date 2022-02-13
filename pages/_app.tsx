import React, { FC } from "react";
import type { AppProps } from "next/app";
import { Header, Navbar } from "components";
import { wrapper } from "store";

import "antd/dist/antd.css";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
