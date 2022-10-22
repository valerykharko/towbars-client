import React, { useMemo } from "react";
import { Table } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IStatistic } from "interfaces/statistics";

import styles from "./TableStatistics.module.scss";

const TableStatistics = () => {
  const { statistic } = useTypedSelector((state) => state.statistics);

  const columns: any = [
    {
      title: "Дата",
      dataIndex: "date",
    },
    {
      title: "Количество заказов",
      dataIndex: "count",
    },
  ];

  const data: [] = useMemo(() => {
    const dataSource: any = [];

    statistic.map((elem: IStatistic, index) =>
      dataSource.push({
        key: 1 + index,
        date: elem.dateValue,
        count: elem.count,
      })
    );
    return dataSource;
  }, [statistic]);

  return (
    <div className={styles.table}>
      <h2>Таблица</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableStatistics;
