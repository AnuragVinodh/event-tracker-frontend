import dayjs from "dayjs";

export function getDates(month = dayjs().month(), year = dayjs().year()) {
  month = Math.floor(month);
  year = Math.floor(year);

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  // console.log(firstDayOfTheMonth);
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
}
