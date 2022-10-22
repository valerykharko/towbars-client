import React from "react";
import { Pagination } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./ReviewsPages.module.scss";

const ReviewsPages = () => {
  const { totalCountT, limitT, pageT } = useTypedSelector(
    (state) => state.rating
  );

  const { setCurrentPageOfRatingsT } = useActions();

  const onChange = (value: any) => {
    setCurrentPageOfRatingsT(value);
  };

  return (
    <div className={styles.wrapper}>
      <Pagination
        current={pageT}
        defaultPageSize={limitT}
        total={totalCountT}
        onChange={onChange}
      />
    </div>
  );
};

export default ReviewsPages;
