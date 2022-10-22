import React from "react";
import { ConfigProvider, DatePicker } from "antd";
const { RangePicker } = DatePicker;

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";

const DateRangePicker = () => {
  const { dateRange } = useTypedSelector((state) => state.statistics);

  const { setDateRange } = useActions();

  const onChange = (value: any) => {
    setDateRange(value);
  };

  return (
    <ConfigProvider locale={locale}>
      <RangePicker value={dateRange} onChange={onChange} />
    </ConfigProvider>
  );
};

export default DateRangePicker;
