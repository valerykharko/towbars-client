import React from "react";
import { IManufacturer } from "interfaces/manufacturer";
import styles from "./ManufacturerBlock.module.scss";
import { Tooltip } from "antd";

interface ManufacturerBlockProps {
  manufacturer: IManufacturer;
}

const ManufacturerBlock = ({ manufacturer }: ManufacturerBlockProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>{manufacturer?.name}</h1>
          <div className={styles.description}>
            <span>{manufacturer?.description}</span>
          </div>
          <div className={styles.middle}>
            <div>
              <div className={styles.country}>
                <span>Страна производства: </span>
                <span>{manufacturer?.country}</span>
              </div>
              <div className={styles.link}>
                <span>Ссылка на производителя: </span>
                <a href={manufacturer?.link}>{manufacturer?.link}</a>
              </div>
            </div>
            <div className={styles.pdf}>
              {manufacturer?.doc && (
                <Tooltip title="Сертификат">
                  <a
                    href={process.env.API_URL! + "/" + manufacturer?.doc[0]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/static/images/icons/pdf/pdf.png"
                      alt="manufacturer-doc"
                    />
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            src={process.env.API_URL! + "/" + manufacturer?.img[0]}
            alt="manufacturer-logo"
          />
        </div>
      </div>
      <div className={styles.text}>
        {manufacturer?.text && <span>{manufacturer?.text}</span>}
      </div>
    </div>
  );
};

export default ManufacturerBlock;
