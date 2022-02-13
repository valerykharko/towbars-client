import React, { useEffect, useState } from "react";

import styles from "./ManufacturersFilter.module.scss";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

const ManufacturersFilter = () => {
  const [active, setActive] = useState(1);

  const { manufacturers, stateToFind } = useTypedSelector(
    (state) => state.manufacturer
  );

  const { fetchManufacturers, setStateForFindAction } = useActions();

  useEffect(() => {
    fetchManufacturers();
  }, []);

  return (
    <div className={styles.manufacturers}>
      <div className={styles.manufacturersTitle}>
        <span>Производитель</span>
      </div>
      <div className={styles.listOf}>
        {active === 1
          ? manufacturers.map(
              (manufacturer, index) =>
                index <= 5 && (
                  <div key={manufacturer.id}>
                    <input
                      type="checkbox"
                      checked={
                        !!stateToFind.find((elem) => elem === manufacturer?.id)
                      }
                      onChange={() => setStateForFindAction(manufacturer)}
                    />
                    <span>{manufacturer.name}</span>
                  </div>
                )
            )
          : manufacturers.map((manufacturer) => (
              <div key={manufacturer.id}>
                <input
                  type="checkbox"
                  checked={
                    !!stateToFind.find((elem) => elem === manufacturer?.id)
                  }
                  onChange={() => setStateForFindAction(manufacturer)}
                />
                <span>{manufacturer.name}</span>
              </div>
            ))}
      </div>
      {active === 1 ? (
        <div onClick={() => setActive(2)} className={styles.button}>
          Посмотреть все
        </div>
      ) : (
        <div onClick={() => setActive(1)} className={styles.button}>
          Свернуть
        </div>
      )}
    </div>
  );
};

export default ManufacturersFilter;
