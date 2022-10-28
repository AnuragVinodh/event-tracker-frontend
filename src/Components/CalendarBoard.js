import React from "react";
import "../index.css";
import { getDates } from "../Api/GetDates.js";
import { getEvents } from "../Api/GetEvents.js";
import { Cell } from "./Cell.js";

function compare(a, b) {
  if (a.date_day < b.date_day) {
    return -1;
  }
  if (a.date_day > b.date_day) {
    return 1;
  }
  return 0;
}

export const CalendarBoard = ({ month, year }) => {
  const [events, setEvents] = React.useState([]);
  const rows = [];
  const dates = getDates(month, year);
  const headers = [
    <span class="font-bold text-xl py-1">Sunday</span>,
    <span class="font-bold text-xl py-1">Monday</span>,
    <span class="font-bold text-xl py-1">Tuesday</span>,
    <span class="font-bold text-xl py-1">Wednesday</span>,
    <span class="font-bold text-xl py-1">Thursday</span>,
    <span class="font-bold text-xl py-1">Friday</span>,
    <span class="font-bold text-xl py-1">Saturday</span>,
  ];

  // React.useEffect(() => {
  //   getEvents().then((value) => {
  //     setEvents(value.data.sort(compare));
  //   });
  // }, []);

  // React.useEffect(() => {
  //   console.log(events);
  // }, [events]);

  let event_idx = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      if (
        events[event_idx] &&
        events[event_idx].date_day === dates[i][j].date()
      ) {
        rows.push(
          <Cell
            key={i * 7 + j}
            value={dates[i][j].date()}
            event={events[event_idx]}
          />
        );
        event_idx++;
      } else {
        rows.push(<Cell key={i * 7 + j} value={dates[i][j].date()} />);
      }
    }
  }

  return (
    <div class="p-5">
      <div class="grid grid-cols-7 text-center">{headers}</div>
      <div class="grid grid-cols-7 h-screen w-100">{rows}</div>
    </div>
  );
};
