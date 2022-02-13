import Router from "next/router";
import Head from "next/head";

import styles from "../styles/404Page.module.scss";

const Page404 = () => {
  const onButtonHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Page 404</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            <img src={"/static/images/404.png"} alt="404 Image" />
          </div>
          <div className={styles.right}>
            <p>Sorry we couldn't find this page </p>
            <p>
              But don't worry, you can find plenty of other things on our
              homepage
            </p>
            <button onClick={onButtonHandler}>Back to homepage</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
