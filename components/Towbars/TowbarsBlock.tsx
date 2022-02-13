import React from "react";
import Link from "next/link";
import { Empty, Rate } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./TowbarsBlock.module.scss";

const TowbarsBlock = () => {
  const { towbars } = useTypedSelector((state) => state.towbar);

  const { addItemToCart } = useActions();

  return (
    <div className={styles.wrapper}>
      {towbars ? (
        towbars?.map((towbar) => (
          <div key={towbar.id} className={styles.towbar}>
            <Link href={"/catalog/towbars/" + towbar.id}>
              <div>
                <div>
                  <img
                    src={process.env.API_URL! + "/" + towbar?.img[0]}
                    alt="towbar-image"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.rating}>
                    <Rate allowHalf disabled defaultValue={3.5} />
                  </div>
                  <div className={styles.vendorCode}>
                    <span>Артикул: </span>
                    <span>{towbar.vendor_code}</span>
                  </div>
                  <div className={styles.maxLoad}>
                    <div>
                      <span>Нагрузка: </span>
                      <span>
                        {towbar.max_hor}/{towbar.max_ver} кг
                      </span>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <span>Цена: </span>
                    <span>{towbar.price} руб</span>
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.buttonToCart}>
              <button onClick={() => addItemToCart(towbar)}>
                <img
                  src="/static/images/catalog/add-to-cart.png"
                  alt="add-to-cart"
                />
                <span>В корзину</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.empty}>
          <Empty />
        </div>
      )}
    </div>
  );
};

export default TowbarsBlock;
