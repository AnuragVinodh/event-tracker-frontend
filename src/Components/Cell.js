import React from "react";
import "../index.css";

export const Cell = (props) => {
  return (
    <div className="flex-1 w-30 h-30 p-2 m-0 border-solid border-2 border-black-500">
      <span class="relative top-0 left-0 font-bold text-color-black text-3xl sm:text-4xl md:text-6xl ">
        {props.value}
      </span>
      <p class="text-sm">
        Event : {props.event ? props.event.description : " NO EVENT "}
      </p>
    </div>
  );
};
