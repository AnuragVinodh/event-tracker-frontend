import React from "react";
import "../index.css";
import { CalendarBoard } from "./CalendarBoard.js";

export const CalendarBody = (props) => {
  return (
    <div>
      <div>
        <p>Calendar Head</p>
      </div>
      <div>
        <CalendarBoard />
      </div>
    </div>
  );
};
