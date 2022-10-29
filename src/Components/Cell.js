import React from "react";
import "../index.css";
import { EventCard } from "./EventCard.js";

export const Cell = ({ value, is_event, events }) => {
  return (
    <div class="flex-1 w-30 h-30 p-2 m-0 border-solid border-2 border-black-500">
      <span class="top-0 left-0 font-bold text-color-black text-3xl z-0 sm:text-4xl md:text-6xl mb-20">
        {value}
      </span>
      <EventCard heading="11:20 am" eventMessage="hello" />
      <EventCard heading="12:34 pm" eventMessage="hello" />
      <EventCard heading="04:00 pm" eventMessage="hello" />
    </div>
  );
};
