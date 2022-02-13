import React from "react";
import { useRouter } from "next/router";

import styles from "./TreeMenu.module.scss";
import Link from "next/link";

const TreeMenu = ({ item }: any) => {
  const router = useRouter();

  const link =
    router.asPath.split("/")[2] === "electrics"
      ? "Электрика"
      : router.asPath.split("/")[2] === "accessories"
      ? "Аксессуары"
      : "Фаркопы";

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.homeLink}>
          <img src="/static/images/tree_menu/home-icon.png" alt="home-icon" />
        </div>
      </Link>
      <div className={styles.separator}>
        <img src="/static/images/tree_menu/diag-line.png" alt="diag-line" />
      </div>
      <Link href={`/${router.asPath.split("/")[1]}`}>
        <div className={styles.link}>
          <span>Каталог</span>
        </div>
      </Link>
      <div className={styles.separator}>
        <img src="/static/images/tree_menu/diag-line.png" alt="diag-line" />
      </div>
      <Link
        href={`/${router.asPath.split("/")[1]}/${router.asPath.split("/")[2]}`}
      >
        <div className={styles.link}>
          <span>{link}</span>
        </div>
      </Link>
      {item ? (
        <>
          <div className={styles.separator}>
            <img src="/static/images/tree_menu/diag-line.png" alt="diag-line" />
          </div>
          <div className={styles.item}>
            <span>{item}</span>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TreeMenu;
