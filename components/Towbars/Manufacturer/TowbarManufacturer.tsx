import React, { RefObject } from "react";
import { Tooltip } from "antd";
import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarManufacturer.module.scss";

interface TowbarTitleProps {
  towbar: ITowbar;
  paramsRef: RefObject<HTMLDivElement>;
}

const TowbarManufacturer = ({ towbar, paramsRef }: TowbarTitleProps) => {
  const scrollToParams = () => {
    window.scrollTo(0, paramsRef.current!.offsetTop - 10);
  };

  return (
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
            <span>{towbar?.manufacturer?.name}</span>
            <span>{towbar?.manufacturer?.country}</span>
          </div>
        </div>
        {towbar?.manufacturer?.img && (
          <div className={styles.manufacturerImage}>
            <img
              src={process.env.API_URL! + "/" + towbar?.manufacturer?.img[0]}
              alt=""
            />
          </div>
        )}
      </div>
      <div className={styles.toInfo} onClick={scrollToParams}>
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
        {towbar?.manufacturer?.doc && (
          <Tooltip title="Сертификат производителя">
            <a
              href={process.env.API_URL! + "/" + towbar?.manufacturer?.doc[0]}
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
  );
};

export default TowbarManufacturer;
