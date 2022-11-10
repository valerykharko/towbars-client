import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./TreeMenu.module.scss";

const TreeMenu = ({ item }: any) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.homeLink}>
          <Image
            src="/static/images/tree_menu/home-icon.png"
            alt="home-icon"
            width={22}
            height={22}
          />
        </div>
      </Link>
      <div className={styles.separator}>
        <Image
          src="/static/images/tree_menu/diag-line.png"
          alt="diag-line"
          width={16}
          height={16}
        />
      </div>
      <Link href={`/catalog`}>
        <div className={styles.link}>
          <span>Каталог</span>
        </div>
      </Link>
      <div className={styles.separator}>
        <Image
          src="/static/images/tree_menu/diag-line.png"
          alt="diag-line"
          width={16}
          height={16}
        />
      </div>
      {item && (
        <div className={styles.item}>
          <span>{item}</span>
        </div>
      )}
    </div>
  );
};

export default TreeMenu;
