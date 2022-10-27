import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-gray-600 border-black-200 px-2 sm:px-4 py-2.5 shadow-lg">
      <div class="flex flex-wrap justify-start items-center px-5">
        <div class="flex items-center">
          <img
            src={require("C:/Users/anura/Desktop/Projects/EventManager-Frontend/my-app/src/logo192.png")}
            class="mr-3 h-6 sm:h-9"
            alt="React"
          />
          <span className="text-white font-bold text-lg">Event Calendar</span>
        </div>
      </div>
    </nav>
  );
};
