import React, { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

import styles from "./CatalogMenu.module.scss";

const CatalogMenu = ({ activePanel, setActivePanel }: any) => {
  useEffect(() => {
    setActivePanel(Router.asPath);
  }, []);

  return (
    <div className={styles.menu}>
      <Link href={"/catalog"}>
        <div
          className={
            activePanel === "/catalog"
              ? [styles.menuItem, styles.menuItemActive].join(" ")
              : styles.menuItem
          }
        >
          <button>
            <div>
              <img
                src="/static/images/menu_catalog/towbar.png"
                alt="towbar-icon"
              />
              <span>Фаркопы</span>
            </div>
            <div>
              <img
                className={styles.arrow}
                src="/static/images/arrows/right-arrow.png"
                alt="right-arrow"
              />
            </div>
          </button>
        </div>
      </Link>
      <Link href={"/catalog/electrics"}>
        <div
          className={
            activePanel === "/catalog/electrics"
              ? [styles.menuItem, styles.menuItemActive].join(" ")
              : styles.menuItem
          }
        >
          <button>
            <div>
              <img
                src={"/static/images/menu_catalog/electric.png"}
                alt="electric-icon"
              />
              <span>Электрика</span>
            </div>
            <div>
              <img
                className={styles.arrow}
                src="/static/images/arrows/right-arrow.png"
                alt="right-arrow"
              />
            </div>
          </button>
        </div>
      </Link>
      <Link href={"/catalog/accessories"}>
        <div
          className={
            activePanel === "/catalog/accessories"
              ? [styles.menuItem, styles.menuItemActive].join(" ")
              : styles.menuItem
          }
        >
          <button>
            <div>
              <img
                src={"/static/images/menu_catalog/accessory.png"}
                alt="accessory-icon"
              />
              <span>Аксессуры</span>
            </div>
            <div>
              <img
                className={styles.arrow}
                src="/static/images/arrows/right-arrow.png"
                alt="right-arrow"
              />
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CatalogMenu;
