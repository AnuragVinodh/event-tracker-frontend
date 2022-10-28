import React, { useState } from "react";
import "../index.css";
import { CalendarBoard } from "./CalendarBoard.js";
import { NavBar } from "./NavBar";
import dayjs from "dayjs";

export const CalendarBody = (props) => {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());

  const monthOnClickHandler = (newMonth) => {
    console.log("Month On Click Handle");
    setMonth(newMonth);
  };

  const yearOnClickHandler = (newYear) => {
    console.log("Year On Click Handle");
    setYear(newYear);
  };

  return (
    <div>
      <NavBar
        year={year}
        month={month}
        monthOnClickHandler={monthOnClickHandler}
        yearOnClickHandler={yearOnClickHandler}
      />
      <div>
        <CalendarBoard year={year} month={month} />
      </div>
    </div>
  );
};
