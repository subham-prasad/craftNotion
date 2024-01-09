import React from "react";
import LeftSideBar from "./LeftSideBar";
import Dashboard from "./Dashboard";
import RightSideBar from "./RightSideBar";

const Body = () => {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen w-full">
      <LeftSideBar />
      <Dashboard />
      <RightSideBar  />
    </div>
  );
};

export default Body;
