import React from "react";
import Link from "next/link";
import { Empty, Rate, Tooltip } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { IWiringKit } from "interfaces/wiringKit";

import styles from "./WiringKitsBlock.module.scss";

const WiringKitsBlock = () => {
  const { wiringKits } = useTypedSelector((state) => state.wiringKit);

  const { addItemToCart } = useActions();

  const onAddItemToCart = (event: any, wiringKit: IWiringKit) => {
    event.stopPropagation();
    addItemToCart(wiringKit);
  };

  return (
    <div className={styles.list_wrapper}>
      {wiringKits.length !== 0 ? (
        wiringKits?.map((wiringKit) => (
          <div key={wiringKit.id} className={styles.list_towbar}>
            <div className={styles.list_image}>
              <img
                src={process.env.API_URL! + "/" + wiringKit?.img[0]}
                alt="towbar-image"
              />
            </div>
            <div className={styles.list_info}>
              <div className={styles.list_info__header}>
                <h2>
                  Штатная электрика на {wiringKit.auto.brand.name}{" "}
                  {wiringKit.auto.model.name} {wiringKit.auto.generation.name}
                </h2>
              </div>
              <div className={styles.list_info__main}>
                <div className={styles.list_info__main__vendorCode}>
                  <h3>Артикул: {wiringKit.vendor_code}</h3>
                </div>
                <div className={styles.list_info__main__rating}>
                  {/*<Rate allowHalf disabled value={wiringKit.ratingValue} />*/}
                </div>
              </div>
              <div className={styles.list_info__body}>
                <div className={styles.list_info__body__titles}>
                  <span>Производитель:</span>
                  <span>Страна производства:</span>
                  <span>Количество пин:</span>
                  <span>Время установки:</span>
                </div>
                <div className={styles.list_info__body__pdf}>
                  {wiringKit?.doc && (
                    <Tooltip title="Инструкция по установке">
                      <a
                        href={process.env.API_URL + "/" + wiringKit?.doc[0]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/static/images/icons/pdf/pdf.png"
                          alt="pdf-icon"
                        />
                      </a>
                    </Tooltip>
                  )}
                  {wiringKit?.manufacturer?.doc && (
                    <Tooltip title="Сертификат производителя">
                      <a
                        href={
                          process.env.API_URL +
                          "/" +
                          wiringKit?.manufacturer?.doc[0]
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/static/images/icons/pdf/certificate.png"
                          alt="certificate-icon"
                        />
                      </a>
                    </Tooltip>
                  )}
                </div>
                <div className={styles.list_info__body__description}>
                  <span>{wiringKit.manufacturer.name}</span>
                  <span>{wiringKit.manufacturer.country}</span>
                  <span>{wiringKit.pin} пин</span>
                  <span>{wiringKit.connection_time} часа</span>
                </div>
              </div>
            </div>
            <div className={styles.list_right}>
              <div className={styles.list_right__price}>
                <span>Цена:&nbsp;</span>
                <span>{wiringKit.price} руб</span>
              </div>
              <div className={styles.list_right__description}>
                <span>за 1 комплект</span>
              </div>
              <div className={styles.list_right__buttonBlock}>
                <button onClick={(event) => onAddItemToCart(event, wiringKit)}>
                  <img
                    src="/static/images/catalog/add-to-cart.png"
                    alt="add-to-cart"
                  />
                  <span>В корзину</span>
                </button>
              </div>
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
  );
};

export default WiringKitsBlock;
