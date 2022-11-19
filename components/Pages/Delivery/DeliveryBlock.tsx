import React from "react";

import { Container } from "components";

import styles from "./DeliveryBlock.module.scss";
import { Russia } from "utils/delivery/countries";

const DeliveryBlock = () => {
  console.log(Russia);
  return (
    <Container>
      <div className={styles.title}>
        <h1>Доставка фаркопа</h1>
        <strong>
          Доставка прицепного устройства осуществляется во все города и регионы
        </strong>
        <p>
          Мы предлагаем оптимальные схемы доставки и оказываем комплексный
          подход, что позволяет сократить стоимость и сроки
        </p>
      </div>
      <div className={styles.block}>
        <h2>1. Заказ</h2>
        <p>
          Оформите заказ через корзину сайта (подробнее в разделе "Как сделать
          заказ") или связавшись с нами любым удобным для Вас способом. При
          оформлении заказа наш специалист индивидуально согласует с Вами
          стоимость, условия оплаты, сроки и способ доставки.
        </p>
      </div>
      <div className={styles.block}>
        <h2>2. Отгрузка</h2>
        <p>
          Заказ доставляется бесплатно до ТК на выбор клиента. ТК осуществляет
          доставку по указанному Вами адресу (получить заказ Вы можете
          самостоятельно на пункте выдачи заказов или оформить курьерскую
          доставку до конкретного адреса). Услуги ТК оплачивает покупатель при
          получении товара. После сдачи заказа в ТК, Вам направляется информация
          для отслеживания отправления через сайт ТК.
        </p>
        <span>
          Отслеживать информацию о заказе можно в личном кабинете, при условии
          оформления заказа онлайн.
        </span>
      </div>
      <div className={styles.line} />
      <div className={styles.delivery}>
        <div className={styles.deliveryTitle}>
          <h2>География доставок</h2>
          <div className={styles.countries}>
            <div>
              <h4>Россия</h4>
            </div>
            <div>
              <h4>Казахстан</h4>
            </div>
            <div>
              <h4>Киргизия</h4>
            </div>
            <div>
              <h4>Армения</h4>
            </div>
            <div>
              <h4>Беларусь</h4>
            </div>
          </div>
        </div>
        <div className={styles.deliveryBlock}>
          <div className={styles.header}>
            <h3>Россия</h3>
          </div>
          <div className={styles.body}>
            <div>
              {Russia.map(
                (item, index) =>
                  index < 10 && (
                    <div className={styles.table}>
                      <div className={styles.tableLeft}>
                        <p>{item[0][0]}</p>
                      </div>
                      <div className={styles.tableRight}>
                        {item.map((elem: string) => (
                          <div className={styles.city}>
                            <span>{elem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
            <div>
              {Russia.map(
                (item, index) =>
                  index >= 10 &&
                  index < 16 && (
                    <div className={styles.table}>
                      <div className={styles.tableLeft}>
                        <p>{item[0][0]}</p>
                      </div>
                      <div className={styles.tableRight}>
                        {item.map((elem: string) => (
                          <div className={styles.city}>
                            <span>{elem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
            <div>
              {Russia.map(
                (item, index) =>
                  index >= 16 && (
                    <div className={styles.table}>
                      <div className={styles.tableLeft}>
                        <p>{item[0][0]}</p>
                      </div>
                      <div className={styles.tableRight}>
                        {item.map((elem: string) => (
                          <div className={styles.city}>
                            <span>{elem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DeliveryBlock;
