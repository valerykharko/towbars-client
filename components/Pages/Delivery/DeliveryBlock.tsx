import React from "react";

import { Container } from "components";
import {Belarus, Kazachstan, Kirgizja, Russia} from "utils/delivery/countries";

import styles from "./DeliveryBlock.module.scss";

const DeliveryBlock = () => {
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
          <div className={styles.body}>
            <div className={styles.header}>
              <h3>Россия</h3>
            </div>
            <div className={styles.bodyBlock}>
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
            <div className={styles.bodyCenter}>
              <div className={styles.bodyBlock}>
                <div>
                  <div className={styles.header}>
                    <h3>Казахстан</h3>
                  </div>
                  <div>
                    {Kazachstan.map((item) => (
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
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.bodyBlock}>
                <div>
                  <div className={styles.header}>
                    <h3>Киргизия</h3>
                  </div>
                  <div>
                    {Kirgizja.map((item) => (
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
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.bodyBlock}>
                <div>
                  <div className={styles.header}>
                    <h3>Армения</h3>
                  </div>
                  <div>
                    <div className={styles.table}>
                      <div className={styles.tableLeft}>
                        <p>Е</p>
                      </div>
                      <div className={styles.tableRight}>
                        <div className={styles.city}>
                          <span>Ереван</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.header}>
              <h3>Беларусь</h3>
            </div>
            <div className={styles.bodyBlock}>
              <div>
                {Belarus.map(
                  (item, index) =>
                    index < 4 && (
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
                {Belarus.map(
                  (item, index) =>
                    index >= 4 &&
                    index < 9 && (
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
                {Belarus.map(
                  (item, index) =>
                    index >= 9 && (
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
      </div>
    </Container>
  );
};

export default DeliveryBlock;
