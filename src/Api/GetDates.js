import dayjs from "dayjs";

export function getDates(month = dayjs().month(), year = dayjs().year()) {
  month = Math.floor(month);
  year = Math.floor(year);

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysArray = new Array(35).fill(null).map(() => {
    currentMonthCount++;
    return dayjs(new Date(year, month, currentMonthCount));
  });

  return daysArray;
}
