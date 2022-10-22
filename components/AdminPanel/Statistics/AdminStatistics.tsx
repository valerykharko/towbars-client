import React, { useEffect } from "react";
import {
  Charts,
  DateRangePicker,
  MenuAdmin,
  TableStatistics,
} from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./AdminStatistics.module.scss";

const AdminStatistics = () => {
  const { dateRange, statistic, totalCount } = useTypedSelector(
    (state) => state.statistics
  );

  const { fetchStatistics } = useActions();

  useEffect(() => {
    fetchStatistics(dateRange);
  }, [dateRange]);

  return (
    <div className={styles.wrapper}>
      <MenuAdmin />
      <div className={styles.container}>
        <div className={styles.picker}>
          <div>
            <DateRangePicker />
          </div>
          <div>
            <h3>Общее количество заказов: {totalCount}</h3>
          </div>
        </div>
        {statistic ? (
          <div className={styles.body}>
            <Charts />
            <TableStatistics />
          </div>
        ) : (
          <div className={styles.tip}>
            <h3>Результатов не найдено!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminStatistics;
