import React from "react";
import "../index.css";
import { CalendarBoard } from "./CalendarBoard.js";
import { NavBar } from "./NavBar";

export const CalendarBody = (props) => {
  return (
    <div>
      <NavBar />
      <div>
        <CalendarBoard />
      </div>
    </div>
  );
};
