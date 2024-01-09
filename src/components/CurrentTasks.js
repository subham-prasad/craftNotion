import {
  ChevronDownIcon,

} from "@heroicons/react/24/outline";


import React from "react";
import CurrentTasksContent from "./CurrentTasksContent";

const CurrentTasks = () => {
    const currentTaskData = [{
      id: 1,
      iconColor: 'blue',
        iconName: "ChatBubbleBottomCenterTextIcon",
        taskTitle: 'Product Review for UI8 Market',
        statusColor: 'yellow',
        statusText: 'In Progress',
        timeTaken: 4
    },
    {
      id: 2,
      iconColor: 'pink',
      iconName: "ChatBubbleOvalLeftEllipsisIcon",
      taskTitle: 'UX Research For Product',
      statusColor: 'blue',
      statusText: 'On hold',
      timeTaken: 8
  },
  {
    id: 3,
    iconColor: 'gray',
      iconName: "CommandLineIcon",
      taskTitle: 'App Design and Development',
      statusColor: 'green',
      statusText: 'Done',
      timeTaken: 32
  }]
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {/* Added items-center class to center items vertically */}
        <div className="flex">
          <h1 className="mr-10 text-xl font-bold">Current Tasks</h1>
          {/* Added margin-right to create space between text and percentage */}
          <p className="text-xl font-bold">Done 30%</p>
        </div>
        <div className="flex bg-white border-2 border-gray-300 px-2 rounded-full">
          <p>Week</p>
          <ChevronDownIcon className="h-3 w-3 mt-2 ml-1" />
        </div>
      </div>
      <div>
        <ul>
          {currentTaskData.map((data)=>{
            return (
              <CurrentTasksContent {...data} key={data.id} />
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrentTasks;
