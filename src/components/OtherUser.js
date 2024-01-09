import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const OtherUser = ({
  image,
  name,
  action,
  actionUser,
  actiondesc,
  time,
  isLiked,
  online,
  isChat,
  isFile,
  fileLogo,
  fileSize,
  fileName,
}) => {
  return (
    <div>
      <div className="grid grid-cols-6 m-2 mb-5">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 relative overflow-visible col-span-1">
          <img
            src={image}
            alt="user"
            className="w-full h-full object-cover rounded-full border-4 border-white absolute"
          />
          <div
            className={`w-3 h-3 rounded-full ${
              online ? "bg-online" : "bg-offline"
            } absolute bottom-1 right-1 border-2 border-white`}
          ></div>
        </div>
        <div className=" col-span-5">
          <div className="flex justify-between">
            <h1 className="text-sm font-semibold">{name}</h1>
            <p className="text-gray-400 text-sm font-extralight">{time}</p>
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-400">
              {action}
              <span className="text-blue-200">{actionUser}</span>
            </p>
          </div>
          <div className="text-left justify-end ml-4 mr-2 bg-blue-100 rounded-lg px-2 relative overflow-visible mt-2">
            {isChat && <p className="text-sm font-semibold">{actiondesc}</p>}
            {isFile && (
              <div className="grid grid-cols-4 ">
                <div className="col-span-1 mt-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={fileLogo}
                    alt="figma"
                  />
                </div>
                <div className="col-span-2 mt-1">
                  <h1 className="text-xs font-semibold">{fileName}</h1>
                  <p className="text-xs text-gray-400">{fileSize}</p>
                </div>
                <div className="items-center flex justify-end col-span-1">
                  <ArrowDownCircleIcon className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            )}
            {isLiked && (
              <HandThumbUpIcon
                className={`w-6 h-6 p-1 rounded-xl bg-gray-200 text-yellow-400 absolute right-0 bottom-0 -mr-1 -mb-3 border-2 border-white  `}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherUser;
