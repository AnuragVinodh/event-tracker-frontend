import React from "react";
import "../index.css";

export const Cell = (props) => {
  return (
    <div
      className="cell"
      onClick={() => {
        alert("Hello Benny " + props.events);
      }}
    >
      {props.value}
      <p className="event-description">
        Event : {props.event ? props.event.description : " NO EVENT "}
      </p>
    </div>
  );
};
