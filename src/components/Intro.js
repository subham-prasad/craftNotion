import React from "react";
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
const Intro = () => {
  return (
    <div className="grid grid-cols-4 m-auto ">
      <div className="col-span-3">
        <h1 className="font-bold text-3xl">Hello, Margaret</h1>
        <p className="text-gray-500">Track team progress here. You almost reach a goal!</p>
      </div>
      <div className="col-span-1 flex ml-10">
        <p className="mt-4">16 May,2023</p>
        <div className="rounded-full bg-gray-100 p-2 mx-1 my-2">
        <CalendarDaysIcon className="h-6 w-6  text-black" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
