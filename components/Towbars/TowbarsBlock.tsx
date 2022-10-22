import React from "react";
import Link from "next/link";
import { Empty, Rate } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarsBlock.module.scss";

interface TowbarsBlockProps {
  activeType: number;
}

const TowbarsBlock = ({ activeType }: TowbarsBlockProps) => {
  const { towbars } = useTypedSelector((state) => state.towbar);

  const { addItemToCart } = useActions();

  const onAddItemToCart = (event: any, towbar: ITowbar) => {
    event.stopPropagation();
    addItemToCart(towbar);
  };

  return (
    <>
      {activeType === 1 ? (
        <div className={styles.wrapper}>
          {towbars.length !== 0 ? (
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
                        <Rate allowHalf disabled value={towbar.ratingValue} />
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
                  <button onClick={(event) => onAddItemToCart(event, towbar)}>
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
              <Empty
                description="Нет данных"
                imageStyle={{
                  width: "500px",
                  height: "300px",
                  padding: 0,
                  margin: 0,
                }}
                style={{
                  fontSize: "18px",
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.list_wrapper}>
          {towbars.length !== 0 ? (
            towbars?.map((towbar) => (
              <Link key={towbar.id} href={"/catalog/towbars/" + towbar.id}>
                <div className={styles.list_towbar}>
                  <div className={styles.list_image}>
                    <img
                      src={process.env.API_URL! + "/" + towbar?.img[0]}
                      alt="towbar-image"
                    />
                  </div>
                  <div className={styles.list_info}>
                    <div className={styles.list_info__header}>
                      <h2>
                        Фаркоп на {towbar.auto.brand.name}{" "}
                        {towbar.auto.model.name} {towbar.auto.generation.name}
                      </h2>
                    </div>
                    <div className={styles.list_info__main}>
                      <div className={styles.list_info__main__vendorCode}>
                        <h3>Артикул: {towbar.vendor_code}</h3>
                      </div>
                      <div className={styles.list_info__main__rating}>
                        <Rate allowHalf disabled value={towbar.ratingValue} />
                      </div>
                    </div>
                    <div className={styles.list_info__body}>
                      <div className={styles.list_info__body__titles}>
                        <span>Производитель:</span>
                        <span>Страна производства:</span>
                        <span>Нагрузка горизонтальная:</span>
                        <span>Нагрузка вертикальная:</span>
                        <span>Вырез в бампере:</span>
                      </div>
                      <div className={styles.list_info__body__description}>
                        <span>{towbar.manufacturer.name}</span>
                        <span>{towbar.manufacturer.country}</span>
                        <span>{towbar.max_hor} кг</span>
                        <span>{towbar.max_ver} кг</span>
                        <span>{towbar.cutout}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.list_right}>
                    <div className={styles.list_right__price}>
                      <span>Цена:&nbsp;</span>
                      <span>{towbar.price} руб</span>
                    </div>
                    <div className={styles.list_right__description}>
                      <span>за 1 комплект</span>
                    </div>
                    <div className={styles.list_right__buttonBlock}>
                      <button
                        onClick={(event) => onAddItemToCart(event, towbar)}
                      >
                        <img
                          src="/static/images/catalog/add-to-cart.png"
                          alt="add-to-cart"
                        />
                        <span>В корзину</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.empty}>
              <Empty
                description="Нет данных"
                imageStyle={{
                  width: "500px",
                  height: "300px",
                  padding: 0,
                  margin: 0,
                }}
                style={{
                  fontSize: "18px",
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TowbarsBlock;
