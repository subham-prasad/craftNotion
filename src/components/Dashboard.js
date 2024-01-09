import React from "react";
import Intro from "./Intro";
import Overview from "./Overview";
import Performance from "./Performance";
import CurrentTasks from "./CurrentTasks";

const Dashboard = () => {
  return (
    <div className="col-span-7 mt-6 h-[100vh]">
      <Intro />
      <hr />
      <Overview />
      <hr />
      <Performance />
      <CurrentTasks />
    </div>
  );
};

export default Dashboard;
