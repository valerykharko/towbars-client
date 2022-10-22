import React, { useEffect } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./ManufacturersBlock.module.scss";
import Link from "next/link";

const ManufacturersBlock = () => {
  const { manufacturers } = useTypedSelector((state) => state.manufacturer);

  const { fetchManufacturers } = useActions();

  useEffect(() => {
    fetchManufacturers();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Производители фаркопов и электрокомплектов</h1>
        <span>
          Здесь мы познакомим Вас с наиболее популярными производителями
          фаркопов и электрических комплектов. Самыми популярными
          производителями являются: Westfalia, Oris-Bosal, Thule-Brink,
          Steinhof, Auto-Hak. Представленные тут бренды, характеризуются своим
          отличным качеством и большим опытом в данной сфере производства.
        </span>
      </div>
      <div className={styles.body}>
        {manufacturers
          .filter((elem) => elem?.img !== null)
          .map((elem) => (
            <Link href={`manufacturers/${elem.name}`} key={elem.id}>
              <div className={styles.manufacturer}>
                <img
                  className={styles.image}
                  src={process.env.API_URL! + "/" + elem?.img[0]}
                  alt="manufacturer-logo"
                />
                <div className={styles.info}>
                  <h3>{elem.name}</h3>
                  <span>{elem.description}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ManufacturersBlock;
