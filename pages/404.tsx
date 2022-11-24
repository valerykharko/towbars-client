import Router from "next/router";
import Head from "next/head";
import Image from "next/image";

import { Container } from "components";

import styles from "../styles/pages/Page404.module.scss";

const Page404 = () => {
  const onButtonHandler = async () => {
    await Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Страница не найдена</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <div className={styles.main}>
          <Image
            src="/static/images/404.png"
            alt="404 Image"
            width={450}
            height={250}
          />
          <h1>Извините, такой страницы не существует</h1>
          <h3>Вы можете перейти к подбору фаркопа нажав на кнопку</h3>
          <button onClick={onButtonHandler}>Вернуться назад</button>
        </div>
      </Container>
    </>
  );
};

export default Page404;
