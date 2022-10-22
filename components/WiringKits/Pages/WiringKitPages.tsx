import React from "react";
import { Pagination } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./WiringKitPages.module.scss";

const WiringKitPages = () => {
  const { totalCount, limit, page } = useTypedSelector(
    (state) => state.wiringKit
  );

  const { setCurrentPageWK } = useActions();

  const onChange = (value: any) => {
    setCurrentPageWK(value);
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

export default WiringKitPages;
