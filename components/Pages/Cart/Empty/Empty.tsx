import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Empty.module.scss";

const Empty = () => {
  const router = useRouter();

  return (
    <div className={styles.empty}>
      <Image
        src="/static/images/cart/empty-cart.png"
        alt="empty-icon"
        width={512}
        height={512}
        quality={100}
      />
      <h2>Ваша корзина пуста</h2>
      <p>Вы ничего не добавили в корзину</p>
      <p>Выберите товары, которые хотели бы заказать</p>
      <button onClick={() => router.push("/")}>Подобрать фаркоп</button>
    </div>
  );
};

export default Empty;
