import React, { MutableRefObject, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import { Collapse, Rate, Table } from "antd";
const { Panel } = Collapse;
import {
  TowbarFavorites,
  TowbarManufacturer,
  TowbarsReviews,
  TowbarTitle,
  TreeMenu,
  MakeReviewPopup,
} from "components";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import openTrueNotification from "utils/notifications/true";

import "react-multi-carousel/lib/styles.css";
import styles from "./TowbarPersonalBlock.module.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TowbarPersonalBlock = () => {
  const router = useRouter();

  const { towbar } = useTypedSelector((state) => state.towbar);
  const { car } = useTypedSelector((state) => state.car);
  const { rating, totalCountT } = useTypedSelector((state) => state.rating);

  const { fetchTowbarById, addItemToCart } = useActions();

  useEffect(() => {
    Number(router.query.id) && fetchTowbarById(Number(router.query.id));
  }, [router.query]);

  const paramsBlock = useRef<HTMLDivElement>(null);
  const reviewsBlock = useRef<HTMLDivElement>(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Тип шара",
      value: towbar?.ball_type,
    },
    {
      key: "2",
      name: "Горизонтальная нагрузка на шар",
      value: towbar?.max_hor,
    },
    {
      key: "3",
      name: "Вертикальная нагрузка на шар",
      value: towbar?.max_ver,
    },
    {
      key: "4",
      name: "Вырез в бампере",
      value: towbar?.cutout,
    },
    {
      key: "5",
      name: "Блок согласования",
      value: car?.smart,
    },
  ];

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    openTrueNotification(
      "Ссылка скопирована!",
      "Теперь Вы можете поделиться данной ссылкой"
    );
  }

  const scrollToReviews = () => {
    window.scrollTo(0, reviewsBlock.current!.offsetTop - 10);
  };

  return (
    towbar && (
      <div className={styles.container}>
        <div>
          <TreeMenu item={towbar?.vendor_code} />
        </div>
        <TowbarTitle towbar={towbar} />
        <div className={styles.panel}>
          <div className={styles.rate} onClick={scrollToReviews}>
            <Rate value={rating} disabled={true} />
            <span className={styles.rate__value}>{totalCountT} отзывов</span>
          </div>
          <div className={styles.other}>
            <MakeReviewPopup towbar={towbar} />
            <img
              src="/static/images/communication.png"
              alt="communication-icon"
            />
            <span>Задать вопрос</span>
            <TowbarFavorites towbar={towbar} />
            <div
              className={styles.other__share}
              onClick={() =>
                copy(`${"http://localhost:3000/catalog/towbars/" + towbar?.id}`)
              }
            >
              <img src="/static/images/back.png" alt="back-icon" />
              <span>Поделиться</span>
            </div>
          </div>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.carousel}>
            <Carousel
              responsive={responsive}
              ssr={true}
              showDots={true}
              autoPlay={true}
              infinite={true}
            >
              <a
                href={process.env.API_URL! + "/" + towbar?.img[0]}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img
                    src={process.env.API_URL! + "/" + towbar?.img[0]}
                    alt=""
                  />
                </div>
              </a>
              <div>
                <img src={process.env.API_URL! + "/" + towbar?.img[0]} alt="" />
              </div>
              <div>
                <img src={process.env.API_URL! + "/" + towbar?.img[0]} alt="" />
              </div>
            </Carousel>
          </div>
          <TowbarManufacturer towbar={towbar} paramsRef={paramsBlock} />
          <div className={styles.rightBlock}>
            <div className={styles.price}>
              <div className={styles.discount}>
                <img src="/static/images/discount.png" alt="discount" />
                <span>Хочу скидку!</span>
              </div>
              <div className={styles.priceCount}>
                <span>{towbar?.price} BYN</span>
                <span>за 1 комплект</span>
              </div>
              <div className={styles.isInStock}>
                <img
                  src="/static/images/profile/checked.png"
                  alt="checked-icon"
                />
                <span>В наличии</span>
              </div>
              <div className={styles.notifications}>
                <img
                  src="/static/images/notifications.png"
                  alt="notifications"
                />
                <span>Узнать о снижении цены</span>
              </div>
              <div
                className={styles.addToCart}
                onClick={() => addItemToCart(towbar)}
              >
                <button>
                  <span>Добавить в корзину</span>
                </button>
              </div>
            </div>
            <div className={styles.questions}>
              <div className={styles.questions__header}>
                <span>Часто задаваемые вопросы</span>
              </div>
              <div className={styles.questions__links}>
                <div>
                  <span>Условия доставки</span>
                  <span>Способ оплаты</span>
                </div>
                <div>
                  <span>Возврат товаров</span>
                  <span>Возврат денег</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.afterMain} ref={paramsBlock}>
          <div className={styles.table}>
            <h2>Технические характеристики</h2>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              showHeader={false}
            />
          </div>
          <div className={styles.description}>
            <h2>Описание</h2>
            <Collapse defaultActiveKey={["1"]}>
              <Panel
                header="Информация о производителе"
                key="1"
                style={{ fontSize: 18 }}
              >
                <p>{towbar?.manufacturer?.description}</p>
              </Panel>
              <Panel
                header="Информация о товаре"
                key="2"
                style={{ fontSize: 18 }}
              >
                <p>{towbar?.description}</p>
              </Panel>
            </Collapse>
          </div>
          <div className={styles.reviews} ref={reviewsBlock}>
            <h2>Отзывы о товаре</h2>
            <TowbarsReviews towbar={towbar} />
          </div>
        </div>
      </div>
    )
  );
};

export default TowbarPersonalBlock;
