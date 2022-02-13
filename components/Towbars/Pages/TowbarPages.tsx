import React from "react";
import { Pagination } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { setCurrentPage } from "store/actions/towbarActions";

import styles from "./TowbarsPages.module.scss"

const TowbarPages = () => {
  const { totalCount, limit, page } = useTypedSelector((state) => state.towbar);

  const { setCurrentPage } = useActions();

  const onChange = (value: any) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.wrapper}>
      <Pagination
        current={page}
        defaultPageSize={limit}
        total={totalCount}
        onChange={onChange}
      />
    </div>
  );
};

export default TowbarPages;
