export const getDate = (day: any, year: any) =>
  new Date(year, 0, day).toLocaleString("ru-RU", {
    day: "numeric",
    month: "long",
    weekday: "short",
  });

function dateRange(startDate: any, endDate: any) {
  const start = startDate.toISOString().split("T")[0].split("-");
  const end = endDate.toISOString().split("T")[0].split("-");
  const startYear = parseInt(start[0]);
  const endYear = parseInt(end[0]);
  const dates = [];

  for (let i = startYear; i <= endYear; i++) {
    const endMonth = i !== endYear ? 11 : parseInt(end[1]) - 1;
    const startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
    for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      const month = j + 1;
      const displayMonth = month < 10 ? "0" + month : month;
      dates.push([i, displayMonth, "01"].join("-"));
    }
  }
  return dates;
}

export const getArrayOfDates = (startDate: any, endDate: any, dataOfReport: any) => {
  const oneDay = 24 * 3600 * 1000;
  const arrayOfDays = [];
  const arrayOfHours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const newReport = dataOfReport;

  for (
    let ms: any = startDate * 1, last = endDate * 1;
    ms <= last;
    ms += oneDay
  ) {
    const startOfYear: any = new Date(startDate.getFullYear(), 0, 0);
    // @ts-ignore
    const diff: any = new Date(ms) - startOfYear;
    const dayOf = Math.floor(diff / oneDay);
    arrayOfDays.push(dayOf);
  }

  const arrayOfMonths = dateRange(startDate, endDate);

  const overlapDaysArray = [...arrayOfDays];
  const overlapHoursArray = [...arrayOfHours];
  const overlapMonthsArray = [...arrayOfMonths];

  const delta = Math.ceil(
    Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 3600 * 24)
  );

  if (delta === 0) {
    const dayNow = newReport[0].date_of_use.day;
    for (let i = 0; i < dataOfReport.length; i++) {
      arrayOfHours.map((item, index) => {
        if (item === dataOfReport[i].date_of_use.hour) {
          return overlapHoursArray.splice(index - i, 1);
        } else return undefined;
      });
    }
    overlapHoursArray.map((item) =>
      newReport.push({
        count: 0,
        date_of_use: {
          year: new Date(startDate).getFullYear(),
          day: dayNow,
          hour: item,
        },
      })
    );
    newReport.sort(
      (prev: any, next: any) => prev.date_of_use.hour - next.date_of_use.hour
    );
  } else if (delta <= 31) {
    for (let i = 0; i < dataOfReport.length; i++) {
      arrayOfDays.map((item, index) => {
        if (item === dataOfReport[i].date_of_use.day) {
          return overlapDaysArray.splice(index - i, 1);
        } else return undefined;
      });
    }
    overlapDaysArray.map((item) =>
      newReport.push({
        count: 0,
        date_of_use: {
          year: new Date(startDate).getFullYear(),
          day: item,
        },
      })
    );
    newReport.sort((prev: any, next: any) => prev.date_of_use.day - next.date_of_use.day);
  } else if (delta > 31) {
    for (let i = 0; i < dataOfReport.length; i++) {
      arrayOfMonths.map((item, index) => {
        const date = String(
          dataOfReport[i].date_of_use.year +
            "-" +
            dataOfReport[i].date_of_use.month +
            "-" +
            "01"
        );
        if (item === date) {
          return overlapMonthsArray.splice(index - i, 1);
        } else return undefined;
      });
    }
    overlapMonthsArray.map((item) =>
      newReport.push({
        count: 0,
        date_of_use: {
          year: item.split("-")[0],
          month: item.split("-")[1],
        },
      })
    );
    newReport.sort(
      (prev: any, next: any) => prev.date_of_use.month - next.date_of_use.month
    );
  }

  return newReport;
};
