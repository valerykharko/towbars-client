import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import getTitleByBallType from "utils/towbars/getTitleByBallType";
import getPrice from "utils/towbars/getPrice";

import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarsBlock.module.scss";

const TowbarsBlock = () => {
  const { towbars } = useTypedSelector((state) => state.towbar);

  const { addItemToCart } = useActions();

  const router = useRouter();

  const onAddItemToCart = (event: any, towbar: ITowbar) => {
    event.stopPropagation();
    addItemToCart(towbar);
  };

  return (
    <div className={styles.wrapper}>
      {towbars?.length > 0 ? (
        <div className={styles.towbars}>
          {towbars?.map((towbar) => (
            <div
              key={towbar.id}
              className={styles.towbar}
              onClick={() => router.push(`/catalog/towbars/${towbar.id}`)}
            >
              <div className={styles.top}>
                <Image
                  src={process.env.API_URL! + "/" + towbar?.img[0]}
                  alt="towbar-image"
                  width={1000}
                  height={650}
                />
              </div>

              <div className={styles.center}>
                <div className={styles.title}>
                  <strong>{getTitleByBallType(towbar.ball_type)}</strong>
                  <strong>{towbar.manufacturer.name}</strong>
                </div>
                <div className={styles.price}>
                  <span>{getPrice(towbar.price)}</span>
                </div>
              </div>

              <div className={styles.bottom}>
                <button onClick={(event) => onAddItemToCart(event, towbar)}>
                  <span>В корзину</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <Image
            src="/static/images/help/empty.png"
            alt="empty-icon"
            width={256}
            height={256}
          />
          <h2>По вашему запросу ничего не найдено</h2>
        </div>
      )}
    </div>
  );
};

export default TowbarsBlock;
