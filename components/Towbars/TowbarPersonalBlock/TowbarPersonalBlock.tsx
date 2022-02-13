import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import { Collapse, Rate, Table, Tooltip } from "antd";
const { Panel } = Collapse;
import { TowbarsReviews, TreeMenu } from "components";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

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
  const [value, setValue] = useState();

  const router = useRouter();

  const { manufacturer } = useTypedSelector((state) => state.manufacturer);
  const { towbar } = useTypedSelector((state) => state.towbar);
  const { car } = useTypedSelector((state) => state.car);

  const {
    fetchTowbarById,
    fetchCarById,
    fetchManufacturerById,
    addItemToCart,
  } = useActions();

  const desc = ["ужасно", "плохо", "нормально", "хорошо", "отлично"];

  const handleChange = (value: any) => {
    setValue(value);
  };

  useEffect(() => {
    Number(router.query.id) && fetchTowbarById(Number(router.query.id));
    towbar?.autoId && fetchCarById(towbar?.autoId);
    towbar?.manufacturerId && fetchManufacturerById(towbar?.manufacturerId);
  }, [router.query, towbar?.autoId, towbar?.manufacturerId]);

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

  return (
    <div className={styles.container}>
      <div>
        <TreeMenu item={towbar?.vendor_code} />
      </div>
      <div className={styles.title}>
        <h1>
          Фаркоп на {car?.brand} {car?.model} {car?.generation}{" "}
          {car?.year_of_issue} {car?.bodyStyle}
        </h1>
      </div>
      <div className={styles.panel}>
        <div className={styles.rate}>
          <span>
            <Rate tooltips={desc} onChange={handleChange} value={value} />
            {value ? (
              <span className="ant-rate-text">{desc[value - 1]}</span>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className={styles.other}>
          <span>Оставить отзыв</span>
          <img
            src="/static/images/communication.png"
            alt="communication-icon"
          />
          <span>Задать вопрос</span>
          <img src="/static/images/love.png" alt="love-icon" />
          <span>В избранное</span>
          <img src="/static/images/back.png" alt="back-icon" />
          <span>Поделиться</span>
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
                <img src={process.env.API_URL! + "/" + towbar?.img[0]} alt="" />
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
        <div className={styles.info}>
          <div className={styles.vendorCode}>
            <span>Артикул: </span>
            <span>{towbar?.vendor_code}</span>
          </div>
          <div className={styles.manufacturer}>
            <div className={styles.manufacturerInfo}>
              <div>
                <span>Производитель: </span>
                <span>Страна производства: </span>
              </div>
              <div>
                <span>{manufacturer?.name}</span>
                <span>{manufacturer?.country}</span>
              </div>
            </div>
            <div className={styles.manufacturerImage}>
              <img
                src={process.env.API_URL! + "/" + manufacturer?.img[0]}
                alt=""
              />
            </div>
          </div>
          <div className={styles.toInfo}>
            <span>Перейти к характеристикам</span>
          </div>
          <div className={styles.pdf}>
            {towbar?.doc && (
              <Tooltip title="Инструкция по установке">
                <a
                  href={process.env.API_URL! + "/" + towbar?.doc[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/static/images/icons/pdf/pdf.png" alt="pdf-icon" />
                </a>
              </Tooltip>
            )}
            {manufacturer?.doc && (
              <Tooltip title="Сертификат производителя">
                <a
                  href={process.env.API_URL! + "/" + manufacturer?.doc[0]}
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
        </div>
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
              <img src="/static/images/notifications.png" alt="notifications" />
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
            <div>
              <span>Часто задаваемые вопросы</span>
            </div>
            <div>
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
      <div className={styles.afterMain}>
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
              <p>{manufacturer?.description}</p>
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
        <div className={styles.reviews}>
          <h2>Отзывы о товаре</h2>
          <TowbarsReviews />
        </div>
      </div>
    </div>
  );
};

export default TowbarPersonalBlock;
