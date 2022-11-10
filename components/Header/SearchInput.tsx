import React, { useState } from "react";
import Router from "next/router";
import { useActions } from "hooks/useActions";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  position?: string;
}

const SearchInput = ({ position }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState("");

  const { fetchTowbarByCode } = useActions();

  const onInputHandler = async (event: any) => {
    if (event.charCode === 13) {
      setSearchValue(event.target.value);
      fetchTowbarByCode(searchValue);
      setSearchValue("");
      await Router.push("/search");
    }
  };
  return (
    <div
      className={`${styles.searchInputBlock} ${
        position === "center" ? styles.center : styles.right
      }`}
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Поиск по артикулу"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => onInputHandler(e)}
      />
    </div>
  );
};

export default SearchInput;
