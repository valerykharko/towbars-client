import React, { useEffect, useRef, useState } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { setSortValue } from "store/actions/sortActions";

import styles from "./SortBlock.module.scss";

const SortBlock = () => {
  const sortItems = [
    { name: "Популярные" },
    { name: "Новые" },
    { name: "Сначала дешевые" },
    { name: "Сначала дорогие" },
    { name: "По рейтингу" },
  ];
  const [visiblePopup, setVisiblePopup] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  const { sortValue } = useTypedSelector((state) => state.sort);
  const { setSortValue } = useActions();

  const onSelectItem = (value: string) => {
    setSortValue(value);
    setVisiblePopup(false);
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutSideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);
  }, []);

  return (
    <div ref={sortRef}>
      <div className={styles.sortBlock} onClick={toggleVisiblePopup}>
        <span>{sortValue}</span>
        {visiblePopup ? (
          <img src="/static/images/arrows/up-arrow.png" alt="up-arrow" />
        ) : (
          <img src="/static/images/arrows/down-arrow.png" alt="down-arrow" />
        )}
      </div>
      {visiblePopup && (
        <div className={styles.sortPopup}>
          <ul>
            {sortItems &&
              sortItems.map((obj) => (
                <li
                  className={
                    sortValue === obj.name ? styles.activeSort : styles.sort
                  }
                  onClick={() => onSelectItem(obj.name)}
                  key={obj.name}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBlock;
