import React, { FC } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Header, Navbar } from "components";
import Home from "./index";

import { useTypedSelector } from "hooks/useTypedSelector";

import { wrapper } from "store";

import "../styles/globals.scss";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { user } = useTypedSelector((state) => state.user);

  const router = useRouter();

  let allowed = true;

  if (router.pathname.startsWith("/admin") && user?.role !== "ADMIN") {
    allowed = false;
  }

  const ComponentToRender = allowed ? Component : Home;

  return (
    <>
      <Header />
      <Navbar />
      <ComponentToRender {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
