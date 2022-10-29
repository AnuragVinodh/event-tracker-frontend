import React from "react";
import "../index.css";

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

export const EventCard = ({ heading, eventMessage }) => {
  const random_color = random_hex_color_code();
  console.log(random_color);
  return (
    <div class="my-2 bg-gray-50 flex flex-col justify-start relative overflow-hidden">
      <div class="max-w">
        <div class="relative group">
          <div
            class={`relative mx-1 px-1 py-1 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}
            style={{ backgroundColor: random_color }}
          >
            <p class="text-white">{heading} :</p>
            <p class="text-white">{eventMessage}</p>
          </div>
        </div>
      </div>
    </div>
    // <div class="text-sm flex">
    //   Event : {props.event ? props.event.description : " NO EVENT "}
    // </div>
  );
};
