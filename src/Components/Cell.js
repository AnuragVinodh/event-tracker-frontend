import React from "react";
import "../index.css";

export const Cell = (props) => {
  return (
    <div class="flex-1 w-30 h-30 p-2 m-0 border-solid border-2 border-black-500">
      <p class="top-0 left-0 font-bold text-color-black text-3xl z-0 sm:text-4xl md:text-6xl ">
        {props.value}
      </p>
      <p class="text-sm">
        Event : {props.event ? props.event.description : " NO EVENT "}
      </p>
    </div>
  );
};
