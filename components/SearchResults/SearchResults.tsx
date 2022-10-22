import React from "react";
import Link from "next/link";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./SearchResults.module.scss";

const SearchResults = () => {
  const { searchValues } = useTypedSelector((state) => state.towbar);

  console.log(searchValues ? "da" : "net");
  return (
    <div className={styles.wrapper}>
      {searchValues.length ? (
        searchValues.map((item) => (
          <Link href={"/catalog/towbars/" + item.id} key={item.id}>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src={process.env.API_URL! + "/" + item?.img[0]} alt="" />
                </div>
                <div className={styles.info}>
                  <span>Фаркоп {item.vendor_code}</span>
                  <span>
                    Нагрузки: {item.max_hor}/{item.max_ver}
                  </span>
                  <span>Вырез в бампере: {item.cutout}</span>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className={styles.noResults}>
          <span>Результатов по Ваше запросу не найдено</span>
          <img src="/static/images/no.png" alt="no-results" />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
