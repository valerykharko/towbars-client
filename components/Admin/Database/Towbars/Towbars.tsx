import React, { useEffect, useState } from "react";
import { AdminPanel } from "components";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import getPrice from "utils/towbars/getPrice";

import styles from "./Towbars.module.scss";

const Towbars = () => {
  const [towbarId, setTowbarId] = useState<number>();
  const [towbarVisible, setTowbarVisible] = useState<boolean>();
  const [price, setPrice] = useState<number>();
  const [percent, setPercent] = useState<string>();

  const { towbarAdmin, towbarsAdmin } = useTypedSelector(
    (state) => state.towbar
  );

  useEffect(() => {}, [towbarAdmin, towbarsAdmin]);

  const { fetchTowbarByIdAdmin, editTowbar, editAllTowbarsPrice } =
    useActions();

  const searchTowbar = () => {
    towbarId && fetchTowbarByIdAdmin(towbarId);
  };

  const saveTowbar = () => {
    const payload = {
      visible: towbarVisible,
      price: price,
    };
    towbarId && editTowbar(towbarId, payload);
    setTowbarVisible(undefined);
  };

  const savePercent = () => {
    percent && editAllTowbarsPrice(percent);
  };

  return (
    <AdminPanel link="Управление фаркопами">
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.header}>
            <h2>Фаркоп</h2>
            <div className={styles.search}>
              <span>Введите id</span>
              <input
                value={towbarId || 0}
                onChange={(e) => setTowbarId(Number(e.target.value))}
              />
            </div>
            <div className={styles.searchBtn} onClick={searchTowbar}>
              <button>Поиск фаркопа</button>
            </div>
          </div>
          <div className={styles.body}>
            {towbarAdmin && (
              <div className={styles.result}>
                <div className={styles.resultVisible}>
                  <div>{towbarAdmin.vendor_code}</div>
                  <div>
                    <input
                      type="checkbox"
                      checked={
                        typeof towbarVisible !== "undefined"
                          ? towbarVisible
                          : towbarAdmin.visible
                      }
                      onChange={(event) => {
                        setTowbarVisible(event.target.checked);
                      }}
                    />
                  </div>
                  <div>
                    <span>
                      Сейчас {towbarAdmin.visible ? "включено" : "выключено"}
                    </span>
                  </div>
                </div>
                <div className={styles.resultPrice}>
                  <input
                    type="number"
                    value={
                      typeof price !== "undefined" ? price : towbarAdmin.price
                    }
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                  <div className={styles.resultPriceNow}>
                    Текущая цена: {getPrice(towbarAdmin.price)}
                  </div>
                </div>
              </div>
            )}
            {towbarAdmin && (
              <div className={styles.saveBtn} onClick={saveTowbar}>
                <button>Сохранить</button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.priceHeader}>
            <h2>Изменение цены</h2>
            <div className={styles.editPrice}>
              <span>Введите параметр (x.xx)</span>
              <input
                type="text"
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>
            <div className={styles.editPriceBtn} onClick={savePercent}>
              <button>Изменить</button>
            </div>
          </div>
          <div className={styles.priceBody}>
            {towbarsAdmin &&
              towbarsAdmin.map((item) => (
                <div key={item.id} className={styles.priceBodyElem}>
                  <div>
                    <strong>{item.vendor_code}</strong>
                  </div>
                  <div>
                    <span>{getPrice(item.price)}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AdminPanel>
  );
};

export default Towbars;
