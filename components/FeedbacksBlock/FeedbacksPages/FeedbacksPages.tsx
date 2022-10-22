import React from "react";
import { Pagination } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./FeedbacksPages.module.scss";

const FeedbacksPages = () => {
  const { totalCountU, limitU, pageU } = useTypedSelector(
    (state) => state.rating
  );

  const { setCurrentPageOfRatingsU } = useActions();

  const onChange = (value: any) => {
    setCurrentPageOfRatingsU(value);
  };

  return (
    <div className={styles.wrapper}>
      <Pagination
        current={pageU}
        defaultPageSize={limitU}
        total={totalCountU}
        onChange={onChange}
      />
    </div>
  );
};

export default FeedbacksPages;
