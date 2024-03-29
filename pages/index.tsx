import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Footer, SelectionBlock } from "components";

import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Подобрать фаркоп</title>
        <meta name="description" content="Подбор фаркопа" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.mainBlock}>
            <div className={styles.mainText}>
              <span>Премиум-класс по доступной цене</span>
            </div>
            <div className={styles.advertising}>
              <Image
                className={styles.gif}
                src="/static/images/main/poster1.gif"
                alt="towbar-westfalia"
                width={178}
                height={130}
              />
              <Image
                className={styles.gif}
                src="/static/images/main/poster2.gif"
                alt="towbar-westfalia"
                width={178}
                height={130}
              />
            </div>
            <SelectionBlock />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
