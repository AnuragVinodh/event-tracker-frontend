import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const DropDownButton = ({ data, heading, onClickHandler }) => {
  const sendDataBack = (value) => {
    onClickHandler(value);
  };
  const Items = [];
  for (let i = 0; i < data.length; i++) {
    Items.push(
      <Menu.Item key={i}>
        {({ active }) => (
          <button
            class={`${
              active ? "bg-sky-500 text-white text-center" : "text-gray-900"
            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            onClick={() => sendDataBack(i)}
          >
            {data[i]}
          </button>
        )}
      </Menu.Item>
    );
  }
  return (
    <div class="text-right">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <Menu.Button class="inline-flex w-full justify-center rounded-md text-3xl bg-black bg-opacity-20 px-4 py-2 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {heading}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items class="absolute right-0 mt-2 h-80 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll">
            <div class="px-1 py-1">{Items}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
