import React from "react";
import {
  HomeIcon,
  Squares2X2Icon,
  PlusIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

const LeftSideBar = () => {
  return (
    <div className="m-2 mt-5 grid grid-rows-12 gap-4 col-span-2 h-[100vh]">
      <div className="font-bold row-span-1 flex justify-center items-center">
        <img
          className="w-10"
          src={"https://craftnotion.com/icons/logo.webp"}
          alt="Craft notion Logo"
        />
        <h1 className="font-bold mx-5">
          Craft <br /> Notion
        </h1>
      </div>
      <ul className="row-span-3">
        <li className="mt-2">
          <div className="flex justify-left items-center">
            <HomeIcon className="h-6 w-6 mx-2 " />
            <p className="text-gray-400">Home</p>
          </div>
        </li>
        <li className="mt-2">
          <div className="flex justify-between items-center text-gray-400 mt-1">
            <div className="flex">
              <Squares2X2Icon className="h-6 w-6 mx-2 " />
              <p className=" ">Projects</p>
            </div>
            <div>
              <PlusIcon className=" h-6 w-6 bg-gray-200 text-black rounded-full p-1" />
            </div>
          </div>
        </li>
        <li className="mt-2">
          <div className="flex justify-between items-center text-black mt-1">
            <div className="flex">
              <ClipboardDocumentCheckIcon className="h-6 w-6 mx-2 " />
              <p className=" ">Tasks</p>
            </div>
            <div>
              <PlusIcon className=" h-6 w-6 bg-gray-200 text-black rounded-full p-1" />
            </div>
          </div>
        </li>

        <li className="mt-2">
          <div className="flex justify-left items-center text-gray-400">
            <UsersIcon className="h-6 w-6 mx-2 " />
            <p className="">Team</p>
          </div>
        </li>
        <li className="mt-2">
          <div className="flex justify-left items-center text-gray-400">
            <Cog6ToothIcon className="h-6 w-6 mx-2 " />
            <p className="">Settings</p>
          </div>
        </li>
      </ul>

      <div className="h-[70%] mt-10 bg-gradient-to-b from-gray-200 to-white row-span-6 items-center justify-center flex flex-col rounded-xl my-7 mx-5 text-center">

          <h1>Upgrade to Pro</h1>
          <p>
            Get 1 month free <br /> and unlock
          </p>
          <button className="rounded-3xl py-2 px-3 text-base font-semibold bg-blue-400">
            Upgrade
          </button>

      </div>

      <div className="row-span-2">
        <ul>
          <li>
            <div className="flex justify-left items-center text-gray-400">
              <InformationCircleIcon className="h-6 w-6 mx-2 " />
              <p className="">Help And Information</p>
            </div>
          </li>
          <li>
            <div className="flex justify-left items-center text-gray-400">
              <MinusCircleIcon className="h-6 w-6 mx-2 " />
              <p className="">Log Out</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
