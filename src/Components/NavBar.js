import React from "react";
import { DropDownButton } from "./DropDownButton.js";
import dayjs from "dayjs";

export const NavBar = ({
  month,
  year,
  monthOnClickHandler,
  yearOnClickHandler,
}) => {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [];
  for (let i = dayjs().year(); i > 1899; i--) {
    years.push(i);
  }
  return (
    <nav class="h-30 bg-gray-600 border-black-200 px-2 sm:px-4 py-2.5 shadow-lg">
      <div class="flex flex-wrap justify-between items-center px-5">
        <div class="flex items-center">
          <img
            src={require("C:/Users/anura/Desktop/Projects/EventManager-Frontend/my-app/src/logo192.png")}
            class="mr-3 h-6 sm:h-9"
            alt="React"
          />
          <span class="text-white font-bold text-lg">Event Calendar</span>
        </div>
        <div class="inline-flex">
          <DropDownButton
            data={months}
            heading={months[month]}
            onClickHandler={monthOnClickHandler}
          />
          <div class="w-6"></div>
          <DropDownButton
            data={years}
            heading={year}
            onClickHandler={yearOnClickHandler}
          />
        </div>
      </div>
    </nav>
  );
};
