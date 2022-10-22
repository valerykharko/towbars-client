import React from "react";
import Link from "next/link";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./FavoritesBlock.module.scss";

const FavoritesBlock = () => {
  const { favorites } = useTypedSelector((state) => state.favorite);

  return (
    <div className={styles.wrapper}>
      {favorites &&
        favorites.map((item) => (
          <Link key={item.id} href={`/catalog/towbars/${item.towbar.id}`}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img
                  src={process.env.API_URL! + "/" + item.towbar.img[0]}
                  alt=""
                />
              </div>
              <div className={styles.right}>
                <div className={styles.header}>
                  <h2>Фаркоп {item.towbar.vendor_code}</h2>
                </div>
                <div className={styles.info}>
                  <div>
                    <span>Горизонтальная нагрузка: {item.towbar.max_hor}</span>
                  </div>
                  <div>
                    <span>Вертикальная нагрузка: {item.towbar.max_ver}</span>
                  </div>
                  <div>
                    <span>Вырез в бампере: {item.towbar.cutout}</span>
                  </div>
                  <div>
                    <span>Тип шара: {item.towbar.ball_type}</span>
                  </div>
                </div>
                <div className={styles.price}>
                  <span>Цена:</span>
                  <span>{item.towbar.price} BYN</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default FavoritesBlock;
