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

export const CalendarBoard = (props) => {
  const [events, setEvents] = React.useState([]);
  const rows = [];
  const array = getDates(1);

  React.useEffect(() => {
    getEvents().then((value) => {
      setEvents(value.data.sort(compare));
    });
  }, []);

  React.useEffect(() => {
    console.log(events);
  }, [events]);
  let event_idx = 0;
  for (let i = 0; i < 5; i++) {
    const cells = [];
    for (let j = 0; j < 7; j++) {
      if (
        events[event_idx] &&
        events[event_idx].date_day === array[i][j].date()
      ) {
        cells.push(
          <Cell
            key={i * 7 + j}
            value={array[i][j].date()}
            event={events[event_idx]}
          />
        );
        event_idx++;
      } else {
        cells.push(<Cell key={i * 7 + j} value={array[i][j].date()} />);
      }
    }
    rows.push(<div key={i}>{cells}</div>);
  }
  return <div className="grid grid-cols-7 grid-rows-3 gap-7">{rows}</div>;
};
